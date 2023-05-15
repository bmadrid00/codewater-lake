from pydantic import BaseModel
from pool import pool


class CabinIn(BaseModel):
    cabin_name: str
    max_occupants: int
    description: str
    on_lake: bool
    day_rate: int


class CabinOut(CabinIn):
    id: int
