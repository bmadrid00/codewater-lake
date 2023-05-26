from fastapi.testclient import TestClient
from queries.cabins import CabinQueries, CabinIn
from main import app

client = TestClient(app)


class FakeCabinQueries():

    def get_all_cabins(self):
        return {'cabins': []}

    def get_cabin(self, cabin_id: int):
        pass

    def create_cabin(self, cabin: CabinIn):
        pass

    def update_cabin(self, cabin_id: int, cabin: CabinIn):
        pass

    def delete_cabin(self, cabin_id: int):
        pass


def test_get_all_cabins():

    app.dependency_overrides[CabinQueries] = FakeCabinQueries

    res = client.get('/api/cabins')
    data = res.json()

    assert res.status_code == 200
    assert data == {"cabins": []}

    app.dependency_overrides = {}
