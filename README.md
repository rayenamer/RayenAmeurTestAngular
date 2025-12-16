# 🌟 Angular User Management Module

A beautifully structured Angular module for managing users with full CRUD functionality, role-based filtering, and status tracking. Built with scalability and maintainability in mind.

---

## 📦 Project Structure

### Services
**`UserserviceRayenAmeurService`** – Handles all API interactions with `/api/users`:

- ✅ Fetch all users
- ✅ Fetch user by ID
- ✅ Create a new user
- ✅ Update existing user
- ✅ Delete user
- ✅ Filter users by role
- ✅ Filter users by status

### Components
- **`UserListComponent`** – Displays a list of all users.
- **`UserDetailsComponent`** – Shows detailed information of a selected user.
- **`UserFormComponent`** – Allows creating and editing users with reactive forms.
- **`UserRoleRayenAmeurComponent`** – Filters and displays users by their role.
- **`UserStatusComponent`** – Filters and displays users by their status.

### Module Setup
**`UsersModule`** – Integrates all components, forms, HTTP client, and routing for the users feature.

**Imports:**
- `CommonModule`
- `FormsModule`
- `ReactiveFormsModule`
- `HttpClientModule`
- `UsersRoutingModule`

**Provides:**  
`UserserviceRayenAmeurService`

---

## 🚀 Features

- ✅ **CRUD Operations** – Create, read, update, and delete users easily with API integration.  
- ✅ **Role-based Filtering** – Display users by specific roles for better organization.  
- ✅ **Status Management** – Track and filter users by active, inactive, or custom status.  
- ✅ **Reactive Forms** – Build forms with validation for robust user creation and editing.  
- ✅ **Scalable Architecture** – Modular design allows easy integration into larger Angular applications.  

---

## ⚡ Installation & Usage

1. **Install dependencies**
```bash
npm install
```

## Serve the application

```bash
ng serve
```


## 🌈 Tech Stack

Angular 18+

TypeScript

RxJS Observables

Reactive Forms

RESTful API integration

## ⚠️ Version Notice

This code may not work on your machine if the versions are mismatched 😉.
Ensure Angular, TypeScript, and other dependencies match the versions used in this project.

If you encounter errors, check package.json for exact version numbers.


## 🔗 Author

Rayen Ameur
