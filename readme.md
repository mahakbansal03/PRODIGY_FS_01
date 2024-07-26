# User Authentication System

This project is an implementation of a user authentication system with secure login and registration functionality. It ensures that users can sign up for an account, log in securely, and access protected routes only after successful authentication. The system uses standard mechanisms to handle password hashing, session management, and user role-based access control. Unauthorized access to sensitive functionalities is restricted.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#Prerequisites)
- [Database Schema](#database-schema)
- [Usage](#usage)

## Features

- User Registration
- Secure Login
- Password Hashing
- Session Management
- User Role-Based Access Control
- Protected Routes

## Technologies Used

- **Frontend:** EJS, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** SQL (MySQL)


## Prerequisites

- Node.js
- npm
- MySQL

## Database Schema

The database schema consists of the following tables:

- **Users**
    - id (Primary Key)
    - username (Unique)
    - password (Hashed)
    - role (User Role)

## Usage

1. **User Registration:** Users can sign up by providing a username, email, and password.
2. **User Login:** Users can log in using their email and password.
3. **Access Control:** Only authenticated users can access protected routes. Different roles can access different functionalities.
