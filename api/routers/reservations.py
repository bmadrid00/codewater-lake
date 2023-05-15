from fastapi import APIRouter, Depends
from queries.reservations import ReservationIn, ReservationOut, ReservationList, ReservationQueries


router = APIRouter()

@router.get("/api/reservations/", response_model=ReservationList)
def list_reservations(
    repo: ReservationQueries = Depends(),
    ):
    return repo.get_all_reservations()


@router.get("/api/reservations/{reservation_id}", response_model=ReservationOut)
def get_reservation(reservation_id: int,
                    repo: ReservationQueries = Depends(),
                    ):
    return repo.get_reservation(reservation_id)


@router.post("/api/reservations", response_model=ReservationOut)
def create_reservation(reservation: ReservationIn, repo: ReservationQueries = Depends()):
    return repo.create_reservation(reservation)


@router.put("/api/reservations/{reservation_id}", reponse_model=ReservationOut)
def update_reservation(reservation_id: int, reservation: ReservationIn, repo: ReservationQueries = Depends()):
    return repo.update_reservation(reservation_id, reservation)


@router.delete("/api/reservations/{reservation_id}", response_model=bool)
def delete_reservation(reservation_id: int, repo: ReservationQueries = Depends()):
    return repo.delete_reservation(reservation_id)