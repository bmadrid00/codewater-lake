from fastapi.testclient import TestClient
from main import app
from queries.cabins import CabinQueries
client = TestClient(app)


class FakeCabinQueries():
    def get_all_cabins(self):
        return []


def test_list_cabins():
    #arrange
    app.dependency_overrides[CabinQueries] = FakeCabinQueries

    #act
    res = client.get("/api/cabins")
    data = res.json()

    #assert
    assert res.status_code == 200
    assert data == {"cabins": []}
