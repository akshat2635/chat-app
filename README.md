# Chatrix - A Realtime Chat Application

Chatrix is a full-stack real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and integrated with Socket.io for instant messaging. It features a modern, responsive user interface designed with Tailwind CSS and DaisyUI.

## Features

-   **User Authentication**: Secure user registration and login with JWT authentication.
-   **Real-time Messaging**: Instant messaging between users powered by Socket.io.
-   **Online Status**: See which users are currently online.
-   **Modern UI**: A clean and responsive user interface built with React, Tailwind CSS, and DaisyUI.
-   **Profile Customization**: Users can update their profile information.
-   **Error Handling**: Graceful error handling and user feedback with toast notifications.

## Tech Stack

**Frontend:**

-   React
-   Vite
-   Tailwind CSS
-   DaisyUI
-   Socket.io-client
-   Axios
-   Zustand (for state management)
-   React Router DOM

**Backend:**

-   Node.js
-   Express
-   MongoDB (with Mongoose)
-   Socket.io
-   JWT (for authentication)
-   Bcryptjs (for password hashing)
-   Cloudinary (for image storage)

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   MongoDB (local or a cloud instance like MongoDB Atlas)
-   A Cloudinary account for image hosting

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/chat-app.git
    cd chat-app
    ```

2.  **Install dependencies for both frontend and backend:**

    ```bash
    npm install
    ```

    This will run the `postinstall` script in the root `package.json` and install dependencies for both the `frontend` and `backend` directories.

### Environment Variables

Create a `.env` file in the `backend` directory and add the following variables:

```
PORT=5000
MONGO_DB_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
```

### Running the Application

1.  **Start the backend server:**

    ```bash
    npm run start --prefix backend
    ```

    The backend server will be running on `http://localhost:5000`.

2.  **Start the frontend development server:**

    ```bash
    npm run dev --prefix frontend
    ```

    The frontend development server will be running on `http://localhost:3000`.

3.  **Build the application for production:**

    ```bash
    npm run build
    ```

    This will create a production-ready build of the frontend in the `frontend/dist` directory.

## API Endpoints

### Auth Routes

-   `POST /api/auth/signup`: Register a new user.
-   `POST /api/auth/login`: Log in a user.
-   `POST /api/auth/logout`: Log out a user.
-   `GET /api/auth/me`: Get the authenticated user's profile.

### Message Routes

-   `GET /api/messages/:otherUserId`: Get messages between the authenticated user and another user.
-   `POST /api/messages/send/:receiverId`: Send a message to another user.

## Project Structure

```
.
├── backend
│   ├── package.json
│   └── src
│       ├── controllers
│       ├── lib
│       ├── middleware
│       ├── models
│       └── routes
├── frontend
│   ├── package.json
│   └── src
│       ├── components
│       ├── constants
│       ├── lib
│       ├── pages
│       └── store
└── package.json
```

## License

This project is licensed under the ISC License.
