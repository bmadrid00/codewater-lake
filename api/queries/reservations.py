from pydantic import BaseModel
from datetime import date
from psycopg_pool import ConnectionPool
from typing import List
import os

pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])


# ########################---MODELS---########################


class ReservationIn(BaseModel):
    cabin_id: int
    start_date: date
    end_date: date
    user_id: int
    number_of_people: int


class ReservationOut(ReservationIn):
    id: int


class ReservationLimited(BaseModel):
    cabin_id: int
    start_date: date
    end_date: date


class AllReservationList(BaseModel):
    reservations: List[ReservationLimited]


class ReservationList(BaseModel):
    reservations: List[ReservationOut]


# ########################---QUERIES---########################


class ReservationQueries():
    def get_all_reservations_for_user(self, user_id) -> ReservationList:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT id, cabin_id, start_date, end_date, user_id
                    , number_of_people
                    FROM reservations
                    WHERE user_id=%s
                    """,
                    [user_id]
                )
                results = []
                for row in db.fetchall():
                    reservation = {}
                    for i, col in enumerate(db.description):
                        reservation[col.name] = row[i]
                    results.append(reservation)
                return {"reservations": results}

    def get_all_reservations(self) -> AllReservationList:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    SELECT cabin_id, start_date, end_date
                    FROM reservations
                    """
                )
                reservations = []
                for row in db.fetchall():
                    reservation = {}
                    for i, col in enumerate(db.description):
                        reservation[col.name] = row[i]
                    reservations.append(reservation)
                return {"reservations": reservations}

    def create_reservation(
            self,
            reservation: ReservationIn,
            user_id: int
    ) -> ReservationOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    INSERT INTO reservations
                        (cabin_id, start_date, end_date, user_id
                        , number_of_people)
                    VALUES
                        (%s, %s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [reservation.cabin_id,
                        reservation.start_date,
                        reservation.end_date,
                        user_id,
                        reservation.number_of_people]
                )
                id = db.fetchone()[0]
                old_data = reservation.dict()
                return ReservationOut(id=id, **old_data)

    def update_reservation(
            self,
            reservation_id: int,
            user_id: int,
            reservation: ReservationIn
            ) -> ReservationOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                db.execute(
                    """
                    UPDATE reservations
                    SET cabin_id=%s
                        , start_date=%s
                        , end_date=%s
                        , user_id=%s
                        , number_of_people=%s
                    WHERE id = %s AND user_id = %s;
                    """,
                    [reservation.cabin_id,
                        reservation.start_date,
                        reservation.end_date,
                        reservation.user_id,
                        reservation.number_of_people,
                        reservation_id,
                        user_id]
                )
                old_data = reservation.dict()
                return ReservationOut(id=reservation_id, **old_data)

    def delete_reservation(self, reservation_id: int, user_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM reservations
                        WHERE id=%s AND user_id=%s
                        """,
                        [reservation_id, user_id]
                    )
            return True
        except Exception:
            return {"message": "Invalid reservation id"}
