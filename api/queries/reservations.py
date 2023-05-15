from pydantic import BaseModel
from datetime import date


class ReservationIn(BaseModel):
    cabin_id: int
    start_date: date
    end_date: date
    user_id: int
    number_of_people: int


class ReservationOut(ReservationIn):
    id: int


class ReservationQu
