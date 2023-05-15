from fastapi import APIRouter, Depends
from queries.users import UserOut, UserIn, UserQueries

router = APIRouter()

# @router.post("/api/users", response_model=UserOut)
#     pass


@router.put("/api/users/{user_id}", response_model=UserOut)
def create_user(user_id: int, user: UserIn, repo: UserQueries = Depends()):
    return repo.create_user(user)


@router.delete("/api/users/{user_id}", response_model=bool)
def delete_user(user_id: int, repo: UserQueries = Depends()):
    return repo.delete_user(user_id)
