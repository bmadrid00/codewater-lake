from pydantic import BaseModel
from psycopg_pool import ConnectionPool
import os
from typing import List

pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])


# ########################---MODELS---########################


class UserInWithPassword(BaseModel):
    first_name: str
    last_name: str
    email: str
    password: str


class UserIn(BaseModel):
    first_name: str
    last_name: str
    email: str


class UserInWithPassword(UserIn):
    first_name: str
    last_name: str
    email: str
    password: str


class UserOut(BaseModel):
    id: int
    first_name: str
    last_name: str
    email: str


class UserList(BaseModel):
    users: List[UserOut]


class UserForm(BaseModel):
    username: str
    password: str


class UserOutWithPassword(UserOut):
    hashed_password: str


class DuplicateAccountError(ValueError):
    pass

class UserList(BaseModel):
  users: List[UserOut]

  
# ########################---QUERIES---########################

class UserQueries():

    def get_all_users(self) -> UserList:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT id
                    , first_name
                    , last_name
                    , email
                    FROM users
                    """
                )
                results = []
                for row in db.fetchall():
                    user = {}
                    for i, col in enumerate(db.description):
                        user[col.name] = row[i]
                        results.append(user)
            return {"users": results}

    def get_user(self, email: str) -> UserOutWithPassword:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT id, first_name, last_name, email, hashed_password
                    FROM users
                    WHERE email=%s
                    """,
                    [email]
                    )
                result = db.fetchone()
                user = {}
                for i, col in enumerate(db.description):
                    user[col.name] = result[i]
                return UserOutWithPassword(**user)

    def create_user(
            self,
            user: UserInWithPassword,
            hashed_password: str
            ) -> UserOutWithPassword:
        account = user.dict()
        account[hashed_password] = hashed_password
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    INSERT INTO users
                        (first_name, last_name, email, hashed_password)
                    VALUES (%s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [user.first_name,
                        user.last_name,
                        user.email,
                        hashed_password]
                )
                id = db.fetchone()[0]
                old_data = user.dict()
                return UserOutWithPassword(
                    id=id,
                    hashed_password=hashed_password,
                    **old_data
                    )

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
                    SET first_name=%s
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
