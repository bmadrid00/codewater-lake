from fastapi.testclient import TestClient
from queries.cabins import CabinQueries, CabinOut
from main import app

client = TestClient(app)


class FakeCabinQueries():
    def create_cabin(self, cabin):
        return CabinOut(id=123, **cabin.dict())


def test_create_cabin():
    # Arrange
    app.dependency_overrides[CabinQueries] = FakeCabinQueries

    # Act
    res = client.post("/api/cabins",  json={"cabin_name": "Mohogany Spring",
                                            "max_occupants": 6,
                                            "description": "",
                                            "on_lake": True,
                                            "rating": 4.1,
                                            "day_rate": 210,
                                            "cabin_images": [
                                                ""
                                            ]})
    data = res.json()

    # Assert
    assert res.status_code == 200
    assert data == {
        "cabin_name": "Mohogany Spring",
        "max_occupants": 6,
        "description": "",
        "on_lake": True,
        "rating": 4.1,
        "day_rate": 210,
        "cabin_images": [
            ""
        ],
        "id": 123,
    }

    app.dependency_overrides = {}
