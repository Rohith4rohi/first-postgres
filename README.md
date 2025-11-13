# Day 1 Express PostgreSQL API

A RESTful API built with Express.js and PostgreSQL for managing items with full CRUD operations.

## What Has Been Completed

### 🚀 Project Setup
- **Express.js server** configured with ES modules
- **PostgreSQL database** connection using `pg` library
- **Environment configuration** with dotenv
- **CORS** enabled for cross-origin requests
- **JSON parsing** middleware configured

### 📁 Project Structure
```
├── index.js           # Main server file
├── db.js             # Database connection configuration
├── routes/
│   └── items.js      # Items API routes
├── package.json      # Dependencies and scripts
├── .env             # Environment variables
└── .gitignore       # Git ignore rules
```

### 🛠 API Endpoints Implemented

All endpoints are prefixed with `/api/items`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/`      | Get all items |
| GET    | `/:id`   | Get item by ID |
| POST   | `/`      | Create new item |
| PUT    | `/:id`   | Update item by ID |
| DELETE | `/:id`   | Delete item by ID |

### 📊 Database Schema
The API expects an `items` table with the following structure:
```sql
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);
```

### 🔧 Features Implemented
- **Full CRUD operations** for items
- **Input validation** (name is required)
- **Error handling** with appropriate HTTP status codes
- **Partial updates** using COALESCE for PUT requests
- **Environment-based configuration**
- **Development and production scripts**

### 📦 Dependencies
- **express**: Web framework
- **pg**: PostgreSQL client
- **dotenv**: Environment variable management
- **cors**: Cross-origin resource sharing
- **nodemon**: Development auto-restart (dev dependency)

### 🚀 Getting Started
1. Install dependencies: `npm install`
2. Configure environment variables in `.env`
3. Start development server: `npm run dev`
4. Start production server: `npm start`

### 🌐 Server Info
- Default port: 3000
- Health check endpoint: GET `/` returns "API is running 🚀"
- Database: PostgreSQL with connection pooling

## Environment Variables Required
```
PORT=3000
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=your_database_name
```

## 📸 API Screenshots & Demo

### Server Running
![Server Running](.\snapshots\Screenshot 2025-10-18 220515.png)

### API Testing - Get All Items
![Get All Items](snapshots\Screenshot 2025-10-19 123735.png)

### API Testing - Create Item
![Create Item](snapchats\Screenshot 2025-10-19 123735.png)

### API Testing - Get Single Item
![Get Single Item](snapshots\Screenshot 2025-10-19 123808.png)

### API Testing - Delete Item
![Delete Item](snapshots\Screenshot 2025-10-19 123846.png)

### Database Verification
![Database Verification](snapshots\Screenshot 2025-10-19 123735.png)
