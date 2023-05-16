from fastapi import APIRouter, Depends
from queries.cabins import CabinIn, CabinOut, CabinQueries, CabinList
from typing import List

router = APIRouter()


@router.get("/api/cabins/", response_model=CabinList)
def list_cabins(
    repo: CabinQueries = Depends(),
):
    return repo.get_all_cabins()


@router.get("/api/cabins/{cabin_id}", response_model=CabinOut)
def get_cabin(
    cabin_id: int,
    repo: CabinQueries = Depends(),
):
    return repo.get_cabin(cabin_id)


@router.post("/api/cabins", response_model=CabinOut)
def create_cabin(cabin: CabinIn, repo: CabinQueries = Depends()):
    return repo.create_cabin(cabin)


@router.put("/api/cabins/{cabin_id}", response_model=CabinOut)
def update_cabin(cabin_id: int, cabin: CabinIn, repo: CabinQueries = Depends()):
    return repo.update_cabin(cabin_id, cabin)


@router.delete("/api/cabins/{cabin_id}",  response_model=bool)
def delete_cabin(cabin_id: int, repo: CabinQueries = Depends()):
    return repo.delete_cabin(cabin_id)
