from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from queries.users import (
    UserOut,
    UserIn,
    UserQueries,
    DuplicateAccountError,
    UserForm
)
from jwtdown_fastapi.authentication import Token
from pydantic import BaseModel
from authenticator import authenticator


class AccountToken(Token):
    account: UserOut


class HttpError(BaseModel):
    detail: str


router = APIRouter()


@router.post("/api/users", response_model=AccountToken | HttpError)
async def create_account(
    info: UserIn,
    request: Request,
    response: Response,
    users: UserQueries = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    try:
        user = users.create_user(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account with those credentials",
        )
    form = UserForm(username=info.email, password=info.password)
    token = await authenticator.login(response, request, form, users)
    return AccountToken(account=user, **token.dict())


@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: UserOut = Depends(authenticator.try_get_current_account_data)
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


@router.put("/api/users/{user_id}", response_model=UserOut)
def update_user(
    user_id: int,
    user: UserIn,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: UserQueries = Depends()
):
    return repo.update_user(user_id, user)


@router.delete("/api/users/{user_id}", response_model=bool)
def delete_user(
    user_id: int,
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: UserQueries = Depends()
):
    return repo.delete_user(user_id)
