# Module3 Project Gamma
Codewater Lake Cabins

Overview
Codewater Lake Cabins is a web application that simplifies the process of reserving rental cabins. This project utilizes the FastAPI framework for the back-end API and the React library for the front-end user interface.

Front-end
Tech Stack
The front-end of this application is built using:

React: A popular JavaScript library for building user interfaces, especially single-page applications.
CSS/SCSS: For styling the components. We incorporated BootstrapMD as well.
React Router: For handling routing in our React application.
Structure
The React application is component-based. Each component has its own directory, and each directory contains the component JavaScript file and the associated CSS file.

Back-end
Tech Stack
The back-end API of this application is built using:

FastAPI: A modern, fast (high-performance), web framework for building APIs with Python based on standard Python type hints.
PostgreSQL: The chosen database for this application.
Structure
The FastAPI application follows the MVC (Model, View, Controller) structure. Each model represents a database table and the associated operations that can be performed on it.

Installation and Setup
Clone the Repository: Clone the repository to your local machine.
Front-end Setup: Navigate to the front-end directory. Install the required npm packages using npm install. Start the React application using npm start.
Back-end Setup: Navigate to the back-end directory. Set up a virtual environment and install the required python packages using pip install -r requirements.txt. Start the FastAPI server using uvicorn main:app --reload.
Database Setup: Create a PostgreSQL database and update the database URI in the configuration file.
API Endpoints
The FastAPI server exposes several API endpoints for the front-end application to interact with:

GET /api/cabins: Fetches a list of all cabins.
POST /api/reservations: Creates a new reservation.
GET /api/reservations/{id}: Fetches the details of a reservation.
PUT /api/reservations/{id}: Updates a reservation.
DELETE /api/reservations/{id}: Deletes a reservation.
Testing
We use Jest for front-end testing and Pytest for back-end testing. To run the tests, navigate to the respective directory and run npm test (for front-end) or pytest (for back-end).

Contributing
If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

Licensing
This project is licensed under MIT license.