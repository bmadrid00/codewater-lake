from fastapi.testclient import TestClient
from main import app
from queries.users import UserQueries

# written by Paul Kingston

client = TestClient(app)


class FakeUserQueries():
    def get_all_users(self):
        return {"users": []}


def test_list_users():
    # arrange
    app.dependency_overrides[UserQueries] = FakeUserQueries

    # act
    res = client.get("/api/users/")
    data = res.json()

    # assert
    assert res.status_code == 200
    assert data == {"users": []}
