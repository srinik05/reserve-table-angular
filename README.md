# Reservation Table Booking Application
This is a web application that allows users to book a table at a restaurant. It is built using Angular on the frontend and Spring Boot on the backend.

## Features
Users can select a date and time for their reservation.
Users can specify the number of guests.
Users can enter their name, location, phone number, and email.
Users can submit the reservation request.
Users receive a confirmation message after successfully making a reservation.

## Technologies Used
Angular
TypeScript
HTML/CSS
Bootstrap (for styling)
Spring Boot
Java
MongoDB (as the database)


## Getting Started

## Prerequisites
Node.js and npm (Node Package Manager) should be installed on your machine.
Angular CLI should be installed globally.
Java Development Kit (JDK) should be installed.
MongoDB should be installed and running.

## Frontend Setup
1. Clone the repository to your local machine.
2. Navigate to the frontend directory.
3. Install the dependencies by running the following command:

### npm install

4. Start the Angular development server:

### ng serve

5. Open your browser and access the application at http://localhost:4200.

## Backend Setup
Make sure MongoDB is running on your machine.
Navigate to the backend directory.
Open the project in your preferred IDE.
Build and run the Spring Boot application.

## Configuration

## Frontend Configuration
The frontend configuration can be found in the frontend/src/environments directory.
Update the environment.ts file with your backend API URL if it's different from the default value (http://localhost:8080/api/reservations).

## Backend Configuration
The backend configuration can be found in the backend/src/main/resources directory.
Update the application.properties file with your MongoDB connection details and any other necessary configurations.

## API Endpoints
The following API endpoints are available:

POST /api/reservations - Create a new table reservation.
GET /api/reservations/{id}' - Get the details of a specific reservation.
GET /api/reservations' - Get the details of all reservations.
PUT /api/reservations/{id}' - Update an existing reservation.
DELETE /api/reservations/{id}' - Delete a reservation.


Refer to the API documentation or Postman collection for more details on how to use these endpoints.

## Contributing
Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.



