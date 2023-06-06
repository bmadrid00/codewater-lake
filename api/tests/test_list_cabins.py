from fastapi.testclient import TestClient
from queries.cabins import CabinQueries, CabinIn
from main import app

client = TestClient(app)

# written by Bradley M both cabin list and get cabin

class FakeCabinQueries():

    def get_all_cabins(self):
        return {'cabins': []}

    def get_cabin(self, cabin_id: int):
        return {
            "id": 1,
            "cabin_name": "Maple",
            "max_occupants": 4,
            "description": """Perched on the edge of a serene lake, this small
            moder lakeside house offers a harmonious blend of contemporary design
            and natural beauty. With expansive windows framing breathtaking views,
            the sleek exterior seamlessly integrates wood, stone, and glass.
            Inside, an open-concept living space with minimalist aesthetics and
            abundant natural light awaits. Two cozy bedrooms with picturesque
            vistas provide a tranquil escape. Step outside to a deck extending
            towards the water, where relaxation and connection with nature await.
            This idyllic retreat offers a peaceful lakeside lifestyle in a compact,
            modern setting.""",
            "on_lake": True,
            "rating": 4.8,
            "day_rate": 35000,
            "cabin_images": [
                "https://dl.dropboxusercontent.com/s/4zhx7opb9lr8jbg/exterior-with-lake.webp",
                "https://dl.dropboxusercontent.com/s/ub7pgw8b83bc5jw/living-room.webp",
                "https://dl.dropboxusercontent.com/s/yvo4vq512amwn84/bedroom.webp",
                "https://dl.dropboxusercontent.com/s/1ri9wsvzxwyxinc/bathroom.webp"
            ]
        }

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


def test_get_cabin():
    # Arrange
    app.dependency_overrides[CabinQueries] = FakeCabinQueries

    # Act
    res = client.get('/api/cabins/1')
    data = res.json()

    # Assert
    assert res.status_code == 200
    assert data == {
            "id": 1,
            "cabin_name": "Maple",
            "max_occupants": 4,
            "description": """Perched on the edge of a serene lake, this small
            moder lakeside house offers a harmonious blend of contemporary design
            and natural beauty. With expansive windows framing breathtaking views,
            the sleek exterior seamlessly integrates wood, stone, and glass.
            Inside, an open-concept living space with minimalist aesthetics and
            abundant natural light awaits. Two cozy bedrooms with picturesque
            vistas provide a tranquil escape. Step outside to a deck extending
            towards the water, where relaxation and connection with nature await.
            This idyllic retreat offers a peaceful lakeside lifestyle in a compact,
            modern setting.""",
            "on_lake": True,
            "rating": 4.8,
            "day_rate": 35000,
            "cabin_images": [
                "https://dl.dropboxusercontent.com/s/4zhx7opb9lr8jbg/exterior-with-lake.webp",
                "https://dl.dropboxusercontent.com/s/ub7pgw8b83bc5jw/living-room.webp",
                "https://dl.dropboxusercontent.com/s/yvo4vq512amwn84/bedroom.webp",
                "https://dl.dropboxusercontent.com/s/1ri9wsvzxwyxinc/bathroom.webp"
            ]
        }
