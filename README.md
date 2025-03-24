# Node.js API with MongoDB

## Overview

This is a simple Node.js Express API that connects to a MongoDB database to retrieve user data. The API includes a GET endpoint that fetches user details based on an ID, ensuring that only users older than 21 are returned.

## Features

- Retrieves user details by ID.
- Ensures users are older than 21.
- Handles invalid ObjectId errors gracefully.
- Returns a 404 response if the user is not found.

## Installation

1. Clone the repository:

   ```sh
   git clone <repository_url>
   cd <repository_folder>
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env` file and add your MongoDB connection string:

   ```sh
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. Start the server:

   ```sh
   node server.js
   ```

## API Endpoint

### GET `/users/:id`

- **Description**: Retrieves a user by ID, only if the user is older than 21.
- **Request Parameters**:
  - `id` (string) - The user ID (MongoDB ObjectId format).
- **Responses**:
  - `200 OK`: Returns user details in JSON format.
  - `400 Bad Request`: Invalid user ID format.
  - `404 Not Found`: User not found or underage.
  - `500 Internal Server Error`: Server-side error.

## Example Usage

```
GET /users/65df3b1c9e4a4e5c9b123456
Response:
{
  "_id": "65df3b1c9e4a4e5c9b123456",
  "name": "John Doe",
  "email": "johndoe@email.com",
  "age": 30
}
```

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

## License

This project is licensed under the MIT License.

## Author

[Your Name]

