# User Management REST API

This project provides a simple **User Management REST API** built with **Golang**. It allows you to perform CRUD (Create, Read, Update, Delete) operations on users, with a basic **frontend UI** that interacts with the API.

---

## 📁 Project Structure

User-Management-API/ ├── static/ │ ├── index.html # Frontend UI │ ├── script.js # JavaScript for API interaction and CRUD functionality │ └── style.css # Styling for the frontend UI ├── go.mod # Go module file ├── go.sum # Go sum file ├── rest_api.go # Golang REST API code (handles the routes and logic) └── README.md # Project documentation

yaml
Copy
Edit

---

## 🚀 How to Run the Project

### Prerequisites

- **Go (1.16 or later)** installed on your machine
- **Basic knowledge of Go and REST APIs**

### Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/heinthant/user-management-api.git
    cd user-management-api
    ```

2. **Install dependencies**:
    Run the following command to install any Go dependencies (like `gorilla/mux`):
    ```bash
    go mod tidy
    ```

3. **Start the Go server**:
    ```bash
    go run rest_api.go
    ```
    The server will start running on `http://localhost:8083`.

4. **Access the frontend**:
    Open your browser and go to `http://localhost:8083/static/index.html` to use the user management interface.

---

## 🖥️ API Endpoints

The following endpoints are available in the User Management REST API:

### 1. **GET `/users`**  
**Description**: Fetch all users.  
**Response**: JSON array of users.

Example:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "email": "jane@example.com"
  }
]
2. GET /users/{id}
Description: Fetch a specific user by ID.
Parameters:

id: The ID of the user to retrieve.

Example:

json
Copy
Edit
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
3. POST /users
Description: Create a new user.
Body:

json
Copy
Edit
{
  "name": "New User",
  "email": "newuser@example.com"
}
Response: The newly created user object.

4. PUT /users/{id}
Description: Update an existing user.
Parameters:

id: The ID of the user to update.
Body:

json
Copy
Edit
{
  "name": "Updated User",
  "email": "updated@example.com"
}
Response: The updated user object.

5. DELETE /users/{id}
Description: Delete a user by ID.
Parameters:

id: The ID of the user to delete.
Response: HTTP status code indicating success or failure.

🧰 How the Frontend Works
The frontend is a simple HTML page (index.html) that interacts with the API using JavaScript (script.js).

Create a User: Fill out the form with the user’s name and email and click "Create User". The data is sent via a POST request to the API.

Edit a User: Click the "Edit" button next to a user, update the form with new values, and click "Update User". The data is sent via a PUT request to the API.

Delete a User: Click the "Delete" button next to a user to remove them from the list. A DELETE request is sent to the API.

🧑‍💻 Technologies Used
Go (Golang): For building the backend REST API.

Gorilla Mux: For routing and handling HTTP requests in Go.

HTML, CSS, JavaScript: For the frontend UI and interaction with the API.

🛠️ Running Tests
There are currently no automated tests for the project, but you can manually test the API by interacting with the UI.

🚧 Future Enhancements
Authentication: Add JWT-based authentication for API access.

Database Integration: Store user data in a persistent database (e.g., MySQL or PostgreSQL).

User Validation: Add validation for input fields (e.g., email format).

Error Handling: Improve error responses for different edge cases.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

📢 Feedback & Contributions
Feel free to open an issue or submit a pull request if you'd like to contribute to this project. Your feedback is always welcome!

