# **React SQL Tutorial - Backend Side**

![image](https://github.com/user-attachments/assets/f639636b-9144-47b4-8910-3aecb1099d80)

Medium Link: https://medium.com/@ardasenbakkavaci/react-backend-sql-tutorial-9f8f8103d75f

Frontend Side Sample Project: https://github.com/ardasenbaklavaci/React-SQL-Tutorial-Frontend

This is a simple RESTful API built with Node.js, Express, and MySQL for managing user data. The API supports fetching all users and adding a new user to the database.

## **Features**

- Fetch all users from the database.
- Add a new user to the database.

## **Technologies Used**

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MySQL**: Relational database management system.
- **Body-parser**: Middleware to handle JSON and URL-encoded data.

## **Installation and Setup**

### **Prerequisites**

- Node.js (v14+ recommended)
- MySQL server
- A MySQL database and user with appropriate permissions

### **Clone the Repository**

```bash
git clone https://github.com/ardasenbaklavaci/React-SQL-Tutorial-Backend.git
cd user-management-api
```

### **Set Up Database**
In MySQL or your database choice instance, set up database using this query:
```
create database demo;

CREATE TABLE Users (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) NOT NULL
);
INSERT INTO Users (Name, Email) VALUES ('John Doe', 'john.doe@example.com');
INSERT INTO Users (Name, Email) VALUES ('Jane Smith', 'jane.smith@example.com');
INSERT INTO Users (Name, Email) VALUES ('Alice Johnson', 'alice.johnson@example.com');
```

Set up Database Connection at index.js:

```
// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'your_database_name'
});
```
## **Run**

Run the backend server in VsCode:

```
node index.js
```

![image](https://github.com/user-attachments/assets/c43e4b0f-a017-46a6-bdf0-16ff38745b13)

When you recieved the log ‘Connected to MySQL database.’ at Terminal Console, this means your backend is working… Also you can debug your errors here… So now backend pipe is streaming at http://localhost:3001 . Do not turn off this terminal since it streams backend to your localhost… Now you can consume this backend (API) from any frontend application. 

![image](https://github.com/user-attachments/assets/5760a673-4a90-4310-925f-6c582b1dd5fd)


---

## **API Endpoints**

### **GET /users**

Fetch all users from the database.

#### **Request**

- **Method**: `GET`
- **URL**: `/users`

#### **Response**

- **Status Code**: `200 OK`
- **Body**:

```json
[
  {
    "Id": 1,
    "Name": "John Doe",
    "Email": "john.doe@example.com"
  },
  {
    "Id": 2,
    "Name": "Jane Smith",
    "Email": "jane.smith@example.com"
  },
  {
    "Id": 3,
    "Name": "Alice Johnson",
    "Email": "alice.johnson@example.com"
  }
]
```

### **POST /users**

Add a new user to the database.

#### **Request**

- **Method**: `POST`
- **URL**: `/users`

#### **Headers:**

- Content-Type: application/x-www-form-urlencoded
#### **Body Parameters:** ####

- ```Id``` (optional): Integer - Unique identifier for the user (auto-generated if omitted).

- ```Name``` (required): String - Name of the user.

- ```Email``` (required): String - Email of the user.

#### **Response**

- **Status Code**: `200 OK`
- **Body**:

```json
{
  "Id": 4,
  "Name": "Bob Taylor",
  "Email": "bob.taylor@example.com"
}
```

#### **Sample Error Response**

- **Status Code**: `500 Internal Server Error`
- **Body**:
```json
{
  "error": "Database insertion failed."
}
```
