# 📝 Todo API

REST API sederhana untuk mengelola daftar tugas (Todo List) menggunakan **NestJS**, **TypeORM**, dan **MySQL**.

## ✨ Features
- ➕ Create Todo
- 📋 Get All Todos
- 🔍 Get Todo by ID
- ✏️ Update Todo
- 🗑️ Delete Todo
- ✅ Filter Todo berdasarkan status `completed`
- 🛡️ Request Validation dengan `ValidationPipe`

## 🛠️ Tech Stack
- NestJS
- TypeORM
- MySQL
- TypeScript
- Postman

## 🚀 Installation

```bash
git clone <repository-url>
cd todo-api
npm install
npm run start:dev
```

## ⚙️ Environment Variables

Buat file `.env`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=todo_db_6082
PORT=3000
```

## 📌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/todos` | Create Todo |
| GET | `/api/v1/todos` | Get All Todos |
| GET | `/api/v1/todos?completed=true` | Filter Completed Todo |
| GET | `/api/v1/todos/:id` | Get Todo by ID |
| PUT | `/api/v1/todos/:id` | Update Todo |
| DELETE | `/api/v1/todos/:id` | Delete Todo |

---

⭐ Built with NestJS & MySQL by **Muhamad Rifal (24.11.6082)**
