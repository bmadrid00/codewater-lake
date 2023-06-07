from fastapi.testclient import TestClient
from main import app
from queries.cabins import CabinQueries, CabinOut

client = TestClient(app)

class FakeCabinQueries():
    def get_cabin(self, cabin_id: int):
        return {
  "cabin_name": "Maple",
  "max_occupants": 4,
  "description": "Perched on the edge of a serene lake, this small\n        moder lakeside house offers a harmonious blend of contemporary design\n        and natural beauty. With expansive windows framing breathtaking views,\n        the sleek exterior seamlessly integrates wood, stone, and glass.\n        Inside, an open-concept living space with minimalist aesthetics and\n        abundant natural light awaits. Two cozy bedrooms with picturesque\n        vistas provide a tranquil escape. Step outside to a deck extending\n        towards the water, where relaxation and connection with nature await.\n        This idyllic retreat offers a peaceful lakeside lifestyle in a compact,\n        modern setting.",
  "on_lake": "true",
  "rating": 4.8,
  "day_rate": 35000,
  "cabin_images": [
    "https://dl.dropboxusercontent.com/s/4zhx7opb9lr8jbg/exterior-with-lake.webp",
    "https://dl.dropboxusercontent.com/s/ub7pgw8b83bc5jw/living-room.webp",
    "https://dl.dropboxusercontent.com/s/yvo4vq512amwn84/bedroom.webp",
    "https://dl.dropboxusercontent.com/s/1ri9wsvzxwyxinc/bathroom.webp"
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
