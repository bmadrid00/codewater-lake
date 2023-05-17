from pydantic import BaseModel
import os
from typing import List
from psycopg_pool import ConnectionPool

pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])


# ########################---MODELS---########################

class CabinIn(BaseModel):
    cabin_name: str
    max_occupants: int
    description: str
    on_lake: bool
    rating: int
    day_rate: int
    cabin_images: str


class CabinOut(CabinIn):
    id: int


class CabinList(BaseModel):
    cabins: List[CabinOut]


# ########################---QUERIES---########################

class CabinQueries:
    def get_all_cabins(self) -> List[CabinOut]:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT id
                    , cabin_name
                    , max_occupants
                    , description
                    , on_lake
                    , rating
                    , day_rate
                    , cabin_images
                    FROM cabins
                    """
                )
                results = []
                for row in db.fetchall():
                    cabin = {}
                    for i, col in enumerate(db.description):
                        cabin[col.name] = row[i]
                    results.append(cabin)
                return {"cabins": results}

    def get_cabin(self, cabin_id: int) -> CabinOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT id
                    , cabin_name
                    , max_occupants
                    , description
                    , on_lake
                    , rating
                    , day_rate
                    , cabin_images
                    FROM cabins
                    WHERE id=%s
                    """,
                    [cabin_id]
                )
                result = db.fetchone()
                cabin = {}
                for i, col in enumerate(db.description):
                    cabin[col.name] = result[i]
                return cabin

    def create_cabin(self, cabin: CabinIn) -> CabinOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    INSERT INTO cabins
                        (cabin_name
                        , max_occupants
                        , description
                        , on_lake
                        , rating
                        , day_rate
                        , cabin_images)
                    VALUES
                        (%s, %s, %s, %s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [cabin.cabin_name,
                        cabin.max_occupants,
                        cabin.description,
                        cabin.on_lake,
                        cabin.rating,
                        cabin.day_rate,
                        cabin.cabin_images]
                )
                id = db.fetchone()[0]
                old_data = cabin.dict()
                return CabinOut(id=id, **old_data)

    def update_cabin(self, cabin_id: int, cabin: CabinIn) -> CabinOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    UPDATE cabins
                    SET cabin_name=%s
                        , max_occupants=%s
                        , description=%s
                        , on_lake=%s
                        , rating=%s
                        , day_rate=%s
                        , cabin_images=%s
                    WHERE id=%s
                    """,
                    [cabin.cabin_name,
                        cabin.max_occupants,
                        cabin.description,
                        cabin.on_lake,
                        cabin.rating,
                        cabin.day_rate,
                        cabin.cabin_images,
                        cabin_id]
                )
                old_data = cabin.dict()
                return CabinOut(id=cabin_id, **old_data)

    def delete_cabin(self, cabin_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM cabins
                        WHERE id=%s
                        """,
                        [cabin_id]
                    )
            return True
        except Exception:
            return {"message": "Invalid cabin id"}
