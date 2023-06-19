# WheelzDrive - Online Vehicle Rental Application

WheelzDrive is a full-stack web application designed for local businesses and individuals looking to run an online vehicle rental business. It provides a user-friendly interface for customers to browse and book vehicles, as well as for businesses to manage their rental fleet. The application is built using Node.js for the backend, which serves a REST API, and React for the frontend.

## Tech Stack

- HTML
- CSS
- JavaScript
- ReactJS
- Bootstrap
- Node.js

## Features

- User-friendly interface for browsing and booking vehicles
- Management interface for businesses to manage their rental fleet
- OAuth2 authentication and authorization for secure access
- RESTful API for seamless integration with other services
- Responsive design with Bootstrap for optimal user experience

## Installation

1. Clone the repository: `git clone https://github.com/your-username/wheelzdrive`
2. Navigate to the project directory: `cd wheelzdrive`
3. Install the dependencies for the backend: `npm install`
4. Install the dependencies for the frontend: `cd client && npm install`
5. Start the backend server: `npm start`
6. In a separate terminal, start the frontend development server: `cd client && npm start`
7. Access the application in your browser at `http://localhost:3000`

## Configuration

To configure the application, you may need to update certain parameters:

- OAuth2 provider: WheelzDrive uses OAuth2 for authentication and authorization. You will need to configure the application with the necessary credentials from your chosen OAuth2 provider. Update the backend code (`server.js`) to include the appropriate OAuth2 settings.

## Usage

1. Launch the application by following the installation instructions.
2. Customers can browse the available vehicles, view their details, and make bookings.
3. Businesses can access the management interface to add, update, and remove vehicles from the rental fleet.
4. Users can log in using their OAuth2 credentials to access their booking history and manage their account.
5. The application provides a seamless and user-friendly experience for both customers and businesses, ensuring smooth vehicle rental operations.
