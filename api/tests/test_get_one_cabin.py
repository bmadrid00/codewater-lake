from fastapi.testclient import TestClient
from main import app
from queries.cabins import CabinQueries

client = TestClient(app)


class FakeCabinQueries():
    def get_cabin(self, cabin_id: int):
        return {
            "cabin_name": "Maple",
            "max_occupants": 4,
            "description": "",
            "on_lake": "true",
            "rating": 4.8,
            "day_rate": 35000,
            "cabin_images": [
              "", ""
            ],
            "id": 1
          }


def test_get_cabin():
    app.dependency_overrides[CabinQueries] = FakeCabinQueries

    res = client.get("/api/cabins/1")
    data = res.json()
    assert res.status_code == 200
    assert data["cabin_name"] == "Maple"

    app.dependency_overrides = {}
