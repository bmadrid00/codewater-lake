from fastapi.testclient import TestClient
from main import app
from queries.reviews import ReviewQueries


client = TestClient(app)

# ####################--List Reviews Test--###################
# ####################-------Eric B-------####################


class FakeReviewQueries():
    def get_reviews(self):
        return {"reviews": []}


def test_list_reviews():
    # Arrange
    app.dependency_overrides[ReviewQueries] = FakeReviewQueries

    # Act
    response = client.get("/api/reviews/")
    data = response.json()

    # Assert
    assert response.status_code == 200
    assert data == {"reviews": []}

    # Cleanup
    app.dependency_overrides = {}
