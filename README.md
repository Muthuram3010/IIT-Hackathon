# AASM eLearning Platform

This is a web-based eLearning platform designed to enhance the learning experience using modern web technologies like React, Node.js, and MongoDB. The platform allows users to browse courses, enroll, track progress, and more. It’s equipped with an interactive UI, user authentication, and a robust backend to manage courses and analytics.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Registration and Authentication
- Course Browsing and Enrollment
- Course Progress Tracking
- Admin Dashboard for Course Management
- Real-time Analytics and Reports
- Responsive and Interactive UI

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **API:** RESTful API using Node.js and Express
- **Styling:** CSS, Bootstrap (or other frameworks you are using)
- **Version Control:** Git, GitHub

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (or use MongoDB Atlas for cloud hosting)
- Git

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Muthuram3010/aasm-elearning-platform.git
   ```

2. Navigate to the project directory:
   ```bash
   cd aasm-elearning-platform
   ```

3. Install dependencies for both backend and frontend:

   - **Backend (Node.js + Express):**
     ```bash
     cd backend
     npm install
     ```

   - **Frontend (React):**
     ```bash
     cd frontend
     npm install
     ```

4. Set up your MongoDB database. If you're using MongoDB Atlas, create a cluster and get your connection string.

5. Create a `.env` file in both `backend` and `frontend` folders (if applicable) and add the necessary environment variables, such as:

   - For **backend**:
     ```
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-secret-key
     ```

   - For **frontend** (if necessary):
     ```
     REACT_APP_API_URL=http://localhost:5000
     ```

6. Run the backend server:
   ```bash
   cd backend
   npm start
   ```

7. Run the frontend development server:
   ```bash
   cd frontend
   npm start
   ```

8. Open your browser and navigate to `http://localhost:3000` to view the platform.

## Project Structure

```
aasm-elearning-platform/
├── backend/                # Backend (Node.js + Express)
│   ├── controllers/        # API controllers
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── server.js           # Entry point for the backend
│   └── .env                # Environment variables
├── frontend/               # Frontend (React)
│   ├── src/                # React components and assets
│   ├── public/             # Public assets (e.g., index.html)
│   └── .env                # Environment variables
└── README.md               # This file
```

## Usage

- **User Registration & Login:** Users can sign up and log in using their credentials. JWT is used for authentication.
- **Course Browsing:** Users can view a list of available courses.
- **Course Enrollment:** Users can enroll in courses and track their progress.
- **Admin Dashboard:** Admins can manage courses, users, and analytics.
- **Analytics:** Users and admins can view real-time data about course completions and engagement.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, feel free to fork this repository, create a new branch, and submit a pull request.

### Steps for Contributing:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and test them.
4. Commit your changes with a clear message.
5. Push your changes to your fork.
6. Open a pull request to the main repository.

## License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for more information.
