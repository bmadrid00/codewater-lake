## match the name of the testing file with the
# name of the route or function you are testing
# don't write tests for JWTdown.
# each of us must write at least one test.

# Each test is a function, it must have the work "test" in it's name


from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


# class FakeTargetrouteNameQueries():
    #copy the methods from the queries class
 #   return []
    # i.e. get_all, get_by_id
#    def get_all(self, name: str):
        pass

def test_targetrouteName():
    # Arrange
    # Act
    # Assert
    assert 1 == 1


def test_tartgetrouteName():
    assert 1 == 1


# depends class -



# Cleanup
app.dependency_overides = {}
