from pydantic import BaseModel
import os
from typing import List
from psycopg_pool import ConnectionPool
from datetime import datetime

pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])


class ReviewIn(BaseModel):
    cabin_id: int
    reservation_id: int
    rating: int
    comment: str
    anonymous: bool


class ReviewOut(BaseModel):
    id: int
    cabin_id: int
    reservation_id: int
    rating: int
    comment: str
    created_at: datetime
    anonymous: bool


class AllReviewOut(BaseModel):
    cabin_id: int
    rating: int


class ReviewList(BaseModel):
    reviews: List[ReviewOut]


class AllReviewList(BaseModel):
    reviews: List[AllReviewOut]


class ReviewQueries:
    def get_reviews(self) -> AllReviewList:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT cabin_id
                    , rating
                    FROM reviews
                    """
                )
                results = []
                for row in db.fetchall():
                    review = {}
                    for i, col in enumerate(db.description):
                        review[col.name] = row[i]
                    results.append(review)
                return {"reviews": results}

    def get_reviews_for_cabin(self, cabin_id) -> ReviewList:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT id
                    , user_id
                    , cabin_id
                    , reservation_id
                    , rating
                    , comment
                    , created_at
                    , anonymous
                    FROM reviews
                    WHERE cabin_id=%s
                    """,
                    [cabin_id]
                )
                results = []
                for row in db.fetchall():
                    review = {}
                    for i, col in enumerate(db.description):
                        review[col.name] = row[i]
                    results.append(review)
                return {"reviews": results}

    def create_review(self, review: ReviewIn, user_id) -> ReviewOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    INSERT INTO reviews
                        (user_id
                        , cabin_id
                        , reservation_id
                        , rating
                        , comment
                        , anonymous)
                    VALUES
                        (%s, %s, %s, %s, %s, %s)
                    RETURNING id, created_at;
                    """,
                    [user_id,
                        review.cabin_id,
                        review.reservation_id,
                        review.rating,
                        review.comment,
                        review.anonymous]
                )
                row = db.fetchone()
                id = row[0]
                created_at = row[1]
                old_data = review.dict()
                return ReviewOut(id=id, created_at=created_at, **old_data)

    def update_review(self, review_id: int, user_id: int, review: ReviewIn) -> ReviewOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    UPDATE reviews
                    SET rating=%s
                        , comment=%s
                        , anonymous=%s
                    WHERE id=%s && user_id=%s
                    RETURNING created_at
                    """,
                    [review.rating,
                        review.comment,
                        review.anonymous,
                        review_id,
                        user_id]
                )
                created_at = db.fetchone()[0]
                old_data = review.dict()
                return ReviewOut(id=review_id, created_at=created_at, **old_data)

    def delete_review(self, review_id: int, user_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM reviews
                        WHERE id=%s && user_id=%s
                        """,
                        [review_id,
                         user_id]
                    )
            return True
        except Exception:
            return {"message": "Invalid review id"}
