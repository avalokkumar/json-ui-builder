# JSON UI Builder Backend

## Description
A backend service for processing JSON input, managing users, and exporting it as UI components.

## Features
- User authentication (register, login)
- User management (CRUD operations)
- JSON processing
- Render JSON in different UI structures (e.g., table, tree, card, list)
- Customize UI (layout, color schemes, font size)
- Live preview of the selected UI
- Export UI as HTML/CSS/JS for embedding elsewhere
- Redis caching

## API Endpoints

### User Routes
#### Register a new user
**POST** `/api/user/register`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Curl Example**:
```bash
curl -X POST http://localhost:3000/api/user/register \
-H "Content-Type: application/json" \
-d '{"name": "John Doe", "email": "john.doe@example.com", "password": "password123"}'
```

---

#### Login a user
**POST** `/api/user/login`

**Request Body**:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Curl Example**:
```bash
curl -X POST http://localhost:3000/api/user/login \
-H "Content-Type: application/json" \
-d '{"email": "john.doe@example.com", "password": "password123"}'
```

---

#### Get all users
**GET** `/api/user`

**Curl Example**:
```bash
curl -X GET http://localhost:3000/api/user
```

---

#### Get a user by ID
**GET** `/api/user/:id`

**Curl Example**:
```bash
curl -X GET http://localhost:3000/api/user/1
```

---

#### Create a new user
**POST** `/api/user`

**Request Body**:
```json
{
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "password": "password123",
  "role": "admin"
}
```

**Curl Example**:
```bash
curl -X POST http://localhost:3000/api/user \
-H "Content-Type: application/json" \
-d '{"name": "Jane Doe", "email": "jane.doe@example.com", "password": "password123", "role": "admin"}'
```

---

#### Update a user
**PUT** `/api/user/:id`

**Request Body**:
```json
{
  "name": "Jane Smith",
  "email": "jane.smith@example.com",
  "role": "user"
}
```

**Curl Example**:
```bash
curl -X PUT http://localhost:3000/api/user/1 \
-H "Content-Type: application/json" \
-d '{"name": "Jane Smith", "email": "jane.smith@example.com", "role": "user"}'
```

---

#### Delete a user
**DELETE** `/api/user/:id`

**Curl Example**:
```bash
curl -X DELETE http://localhost:3000/api/user/1
```

---

#### Get mock user details
**GET** `/api/user/mockDetail`

**Curl Example**:
```bash
curl -X GET http://localhost:3000/api/user/mockDetail
```

---

### UI Routes
#### Process JSON input
**POST** `/api/ui/process`

**Request Body**:
```json
{
  "json": { "key": "value" }
}
```

**Curl Example**:
```bash
curl -X POST http://localhost:3000/api/ui/process \
-H "Content-Type: application/json" \
-d '{"json": {"key": "value"}}'
```

---

#### Render JSON in a specified UI structure
**POST** `/api/ui/render`

**Request Body**:
```json
{
  "json": { "key": "value" },
  "structure": "table"
}
```

**Curl Example**:
```bash
curl -X POST http://localhost:3000/api/ui/render \
-H "Content-Type: application/json" \
-d '{"json": {"key": "value"}, "structure": "table"}'
```

---

#### Customize the UI
**POST** `/api/ui/customize`

**Request Body**:
```json
{
  "json": { "key": "value" },
  "customization": { "color": "blue" }
}
```

**Curl Example**:
```bash
curl -X POST http://localhost:3000/api/ui/customize \
-H "Content-Type: application/json" \
-d '{"json": {"key": "value"}, "customization": {"color": "blue"}}'
```

---

#### Generate a live preview of the UI
**POST** `/api/ui/preview`

**Request Body**:
```json
{
  "json": { "key": "value" },
  "customization": { "color": "blue" }
}
```

**Curl Example**:
```bash
curl -X POST http://localhost:3000/api/ui/preview \
-H "Content-Type: application/json" \
-d '{"json": {"key": "value"}, "customization": {"color": "blue"}}'
```

---

#### Export the UI in a specified format
**POST** `/api/ui/export`

**Request Body**:
```json
{
  "json": { "key": "value" },
  "format": "html"
}
```

**Curl Example**:
```bash
curl -X POST http://localhost:3000/api/ui/export \
-H "Content-Type: application/json" \
-d '{"json": {"key": "value"}, "format": "html"}'
```

---

## Installation
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Configure the `.env` file with the following variables:
   - `PORT`
   - `JWT_SECRET`
   - `DB_HOST`
   - `DB_USER`
   - `DB_PASS`
   - `DB_NAME`
4. Start the server using `npm start`.

## Scripts
- `npm start`: Start the server.
- `npm test`: Run tests.
