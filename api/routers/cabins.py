from fastapi import APIRouter
from queries.cabins import CabinIn, CabinOut
from typing import List

router = APIRouter()


@router.get("api/cabins/")
def list_cabins(cabins: List[CabinOut]):
    pass
