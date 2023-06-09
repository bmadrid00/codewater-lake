from fastapi.testclient import TestClient
from queries.cabins import CabinQueries, CabinIn
from main import app

client = TestClient(app)

# written by Bradley M both cabin list and get cabin

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


def test_list_cabins():
    # Arrange
    app.dependency_overrides[CabinQueries] = FakeCabinQueries

    # Act
    res = client.get('/api/cabins/')
    data = res.json()

    # Assert
    assert res.status_code == 200
    assert data == {'cabins': []}

    app.dependency_overrides = {}
