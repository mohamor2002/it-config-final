# Network Traffic Management System Monorepo

This monorepo contains multiple applications and services designed to manage network traffic and clients using a **Fair Access Policy (FAP)** system. 

## Project Structure

```
/
├── back-app
│   ├── db/           # Database service
│   ├── isp-server/   # Internet Service Provider (ISP) server
│   ├── router/       # Network router service
│   ├── rest-api/     # REST API for external access
│   ├── client/       # Client-side app 1
│   └── client2/      # Client-side app 2
└── front-app         # Frontend interface
```

---

## Getting Started

To set up and run the project, follow the steps below:

### 1. Backend Setup

1. **Navigate to the `back-app`:**
   ```bash
   cd back-app
   ```



2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Install Dependencies for Individual Services:**
   ```bash
   cd router && npm install
   cd ../isp-server && npm install
   cd ../rest-api && npm install
   cd ../db && npm install
   cd ../client && npm install
   cd ../client2 && npm install
   ```
4. **Create the Database:**
   ```bash
   npm run start:db
   ```

5. **Seed the Database:**
   ```bash
   npm run start:seed
   ```

6. **Run the Services in Order:**
   ```bash
   npm run start:isp     # Start ISP server
   npm run start:router  # Start Router service
   npm run start:client  # Start Client app 1
   npm run start:client2 # Start Client app 2
   npm run start:rest-api # Start REST API
   ```

---

### 2. Frontend Setup

1. **Navigate to the `front-app`:**
   ```bash
   cd .. && cd front-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Frontend App:**
   ```bash
   npm run dev
   ```

---

## Usage

Once all services are running, you can access:
- **Frontend Interface** via: `http://localhost:3000`
- **REST API** via: `http://localhost:4000`

Make sure the backend services are running in the correct order to avoid any issues.

---

## Technologies Used

- **Node.js**: Backend services and API
- **Express.js**: Web framework for REST API
- **Sqlite3**: Database 
- **socket.io**: Web Socket
- **React.js**: Frontend interface

---



