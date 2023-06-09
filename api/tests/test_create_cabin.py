from fastapi.testclient import TestClient
from queries.cabins import CabinQueries, CabinIn, CabinOut
from main import app

client = TestClient(app)


class FakeCabinQueries():
    def create_cabin(self, cabin):
        return CabinOut(id=123, **cabin.dict())
    
def test_create_cabin():
    # Arrange
    app.dependency_overrides[CabinQueries] = FakeCabinQueries
    
    
    # Act
    res = client.post("/api/cabins", json={"cabin_name": "Mohogany Spring",
        "max_occupants": 6,
        "description": "Escape to our enchanting cabin nestled amidst the lush wilderness, offering a serene retreat from the bustling city life. Surrounded by towering pines and embraced by nature's embrace, our cabin provides a cozy and intimate setting for relaxation and rejuvenation. Step inside to discover a rustic yet elegant interior adorned with warm wood finishes and charming rustic decor. Unwind in the spacious living area beside a crackling fireplace or savor the breathtaking views from the private balcony overlooking a crystal-clear lake. With modern amenities and proximity to hiking trails and outdoor adventures, our cabin promises an unforgettable getaway for nature lovers and tranquility seekers alike.",
        "on_lake": True,
        "rating": 4.1,
        "day_rate": 210,
        "cabin_images": [
            "https://dl.dropboxusercontent.com/s/9hfhkiz9fcyo3ok/exterior.jpeg" 
        ]})
    data = res.json()
    
    # Assert
    assert res.status_code == 200
    assert data == {
        "cabin_name": "Mohogany Spring",
        "max_occupants": 6,
        "description": "Escape to our enchanting cabin nestled amidst the lush wilderness, offering a serene retreat from the bustling city life. Surrounded by towering pines and embraced by nature's embrace, our cabin provides a cozy and intimate setting for relaxation and rejuvenation. Step inside to discover a rustic yet elegant interior adorned with warm wood finishes and charming rustic decor. Unwind in the spacious living area beside a crackling fireplace or savor the breathtaking views from the private balcony overlooking a crystal-clear lake. With modern amenities and proximity to hiking trails and outdoor adventures, our cabin promises an unforgettable getaway for nature lovers and tranquility seekers alike.",
        "on_lake": True,
        "rating": 4.1,
        "day_rate": 210,
        "cabin_images": [
            "https://dl.dropboxusercontent.com/s/9hfhkiz9fcyo3ok/exterior.jpeg" 
        ],
        "id": 123,
    }
    
    app.dependency_overrides = {}