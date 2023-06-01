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


@router.get("/api/reservations/mine",
            response_model=ReservationList)
def get_all_reservations_for_user(
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: ReservationQueries = Depends()
):
    return repo.get_all_reservations_for_user(account_data['id'])


@router.get("/api/reservations/", response_model=AllReservationList)
def get_all_reservations(repo: ReservationQueries = Depends()):
    return repo.get_all_reservations()


@router.post("/api/reservations/",
             response_model=ReservationOut)
def create_reservation(
    reservation: ReservationIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: ReservationQueries = Depends()
):
    return repo.create_reservation(reservation, account_data['id'])


@router.put("/api/reservations/{reservation_id}",
            response_model=ReservationOut)
def update_reservation(
    reservation_id: int,
    reservation: ReservationIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: ReservationQueries = Depends()
):
    return repo.update_reservation(
        reservation_id,
        account_data['id'],
        reservation
        )


@router.delete("/api/reservations/{reservation_id}",
               response_model=bool)
def delete_reservation(
    reservation_id: int,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: ReservationQueries = Depends()
):
    return repo.delete_reservation(reservation_id, account_data['id'])
