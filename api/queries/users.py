from pydantic import BaseModel
from psycopg_pool import ConnectionPool
import os


pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])


class UserIn(BaseModel):
    first_name: str
    last_name: str
    email: str


class UserOut(UserIn):
    id: int

    
class UserQueries():
    def get_user(self, user_id: int) -> UserOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT id, first_name, last_name, email
                    FROM users
                    WHERE id=%s
                    """,
                    [user_id]
                    )
                result = db.fetchone()
                user = {}
                for i, col in enumerate(db.description):
                    user[col.name] = result[i]
                return user

    def delete_user(self, user_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM users
                        WHERE id=%s
                        """,
                        [user_id]
                    )
            return True
        except Exception:
            return {"message": "Invalid user id"}

    def update_user(self, user_id: int, user: UserIn) -> UserOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    UPDATE users
                    SET user first_name=%s
                        , last_name=%s
                        , email=%s
                    WHERE id=%s
                    """,
                    [user.first_name,
                    user.last_name,
                    user.email,
                    user_id]
                )
                old_data = user.dict()
                return UserOut(id=user_id, **old_data)
