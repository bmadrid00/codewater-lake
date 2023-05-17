from fastapi import APIRouter, Depends
from queries.reservations import (
    ReservationIn,
    ReservationOut,
    ReservationList,
    ReservationQueries,
    AllReservationList
    )
from authenticator import authenticator


router = APIRouter()


@router.get("/api/users/{user_id}/reservations/",
            response_model=ReservationList)
def get_all_reservations_for_user(
    user_id: int,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: ReservationQueries = Depends()
):
    return repo.get_all_reservations_for_user(user_id)


@router.get("/api/reservations/", response_model=AllReservationList)
def get_all_reservations(repo: ReservationQueries = Depends()):
    return repo.get_all_reservations()


@router.post("/api/users/{user_id}/reservations/",
             response_model=ReservationOut)
def create_reservation(
    reservation: ReservationIn,
    user_id: int,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: ReservationQueries = Depends()
):
    return repo.create_reservation(reservation, user_id)


@router.put("/api/users/{user_id}/reservations/{reservation_id}",
            response_model=ReservationOut)
def update_reservation(
    reservation_id: int,
    user_id: int,
    reservation: ReservationIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: ReservationQueries = Depends()
):
    return repo.update_reservation(reservation_id, user_id, reservation)


@router.delete("/api/users/{user_id}/reservations/{reservation_id}",
               response_model=bool)
def delete_reservation(
    reservation_id: int,
    user_id: int,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: ReservationQueries = Depends()
):
    return repo.delete_reservation(reservation_id, user_id)
