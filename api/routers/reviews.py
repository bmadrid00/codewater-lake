from fastapi import APIRouter, Depends
from queries.reviews import ReviewIn, ReviewOut, ReviewQueries, ReviewList, AllReviewList
from authenticator import authenticator


router = APIRouter()


@router.get("/api/reviews", response_model=AllReviewList)
def list_reviews(
    repo: ReviewQueries = Depends()
):
    return repo.get_reviews()


@router.get("/api/cabins/{cabin_id}/reviews", response_model=ReviewList)
def list_reviews_for_cabin(
    cabin_id: int,
    repo: ReviewQueries = Depends()
):
    return repo.get_reviews_for_cabin(cabin_id)


@router.post("/api/reviews", response_model=ReviewOut)
def create_review(
    review: ReviewIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: ReviewQueries = Depends()
):

    return repo.create_review(review, account_data['id'])


@router.put("/api/reviews/{review_id}", response_model=ReviewOut)
def update_review(
    review_id: int,
    review: ReviewIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: ReviewQueries = Depends()
):
    return repo.update_review(review_id, account_data['id'], review)


@router.delete("/api/reviews/{review_id}",  response_model=bool)
def delete_review(
    review_id: int,
    repo: ReviewQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.delete_review(review_id, account_data['id'])
