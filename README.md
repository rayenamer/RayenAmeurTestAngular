🌟 Angular User Management Module

A beautifully structured Angular module for managing users with full CRUD functionality, role-based filtering, and status tracking. Built with scalability and maintainability in mind.

📦 Project Structure

This module contains:

Services

UserserviceRayenAmeurService – Handles all API interactions with /api/users:

Fetch all users

Fetch user by ID

Create a new user

Update existing user

Delete user

Filter users by role

Filter users by status

Components

UserListComponent – Displays a list of all users.

UserDetailsComponent – Shows detailed information of a selected user.

UserFormComponent – Allows creating and editing users with reactive forms.

UserRoleRayenAmeurComponent – Filters and displays users by their role.

UserStatusComponent – Filters and displays users by their status.

Module Setup

UsersModule – Integrates all components, forms, HTTP client, and routing for the users feature.

Imports:

CommonModule

FormsModule

ReactiveFormsModule

HttpClientModule

UsersRoutingModule

Provides: UserserviceRayenAmeurService

🚀 Features

✅ CRUD Operations

Create, read, update, and delete users easily with API integration.

✅ Role-based Filtering

Display users by specific roles for better organization.

✅ Status Management

Track and filter users by active, inactive, or custom status.

✅ Reactive Forms

Build forms with validation for robust user creation and editing.

✅ Scalable Architecture

Modular design allows easy integration into larger Angular applications.

⚡ Installation & Usage

Install dependencies

npm install


Serve the application

ng serve


Navigate to Users Module
Visit http://localhost:4200/users to access the user management interface.

💻 Example API Usage

Get all users

this.userService.getUsers().subscribe(users => console.log(users));


Get users by role

this.userService.getUsersByRole('admin').subscribe(admins => console.log(admins));


Create a new user

const newUser = { name: 'John Doe', email: 'john@example.com', role: 'user', status: 'active' };
this.userService.createUser(newUser).subscribe(response => console.log(response));

🌈 Tech Stack

Angular 18+

TypeScript

RxJS Observables

Reactive Forms

RESTful API integration

⚠️ Version Notice

This code may not work on your machine if the versions are mismatched 😉.

Ensure Angular, TypeScript, and other dependencies match the versions used in this project.

If you encounter errors, check package.json for exact version numbers.

✨ Aesthetic Notes

Components and services are prefixed for clarity (RayenAmeur)

Modular and reusable structure for enterprise-level projects

Designed for maintainability and scalability

🔗 Author

Rayen Ameur – 
