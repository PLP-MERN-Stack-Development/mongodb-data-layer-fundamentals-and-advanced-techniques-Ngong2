# 📘 MongoDB Data Layer Fundamentals and Advanced Techniques

This project demonstrates **MongoDB fundamentals** and **advanced techniques** using Node.js.  
It covers database setup, CRUD operations, indexing, and aggregation pipelines, with hands-on examples.

---

## 🚀 Features
- MongoDB Atlas/local connection setup  
- CRUD operations (Create, Read, Update, Delete)  <img width="1879" height="952" alt="Screenshot 2025-10-02 162631" src="https://github.com/user-attachments/assets/51031104-55d0-41c9-bd82-d4e392c86947" />

- Advanced queries (filtering, projections, sorting)  
- Aggregation pipelines  
- Indexing for performance optimization  

- [Node.js](https://nodejs.org/) installed  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster OR local MongoDB installation  
- [MongoDB Compass](https://www.mongodb.com/try/download/compass) (GUI client for MongoDB)  

---

## 📂 Project Structure
mongodb-data-layer-fundamentals-and-advanced-techniques-Ngong2/
│── script/ # Scripts for CRUD, queries, aggregation
│ ├── queries.js # All query examples (CRUD + advanced)
│── .env # Environment variables (MongoDB URI)
│── package.json # Node.js project configuration
│── README.md # Documentation (this file)


Would you like me to also **finish the full `queries.js` file (CRUD, advanced queries, aggregations, indexing)** so you just run `node script/queries.js` and see results like in your Compass screenshots?
👉 Now just make sure you **place both screenshots in your repo root** with the same filenames:
<img width="1879" height="952" alt="Screenshot 2025-10-02 162631" src="https://github.com/user-attachments/assets/51031104-55d0-41c9-bd82-d4e392c86947" />























Would you like me to also **finish the full `queries.js` file (CRUD, advanced queries, aggregations, indexing)** so you just run `node script/queries.js` and see results like in your Compass screenshots?
👉 Now just make sure you **place both screenshots in your repo root** with the same filenames:


<img width="800" alt="Screenshot 2025-10-02 161351" src="https://github.com/user-attachments/assets/7a82ca3c-990a-4c54-b994-772bbc06006e" />

---




















## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```bash
git clone https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-Ngong2.git
cd mongodb-data-layer-fundamentals-and-advanced-techniques-Ngong2
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Configure Environment
Create a .env file in the project root:

env
Copy code
MONGO_URI=your_mongodb_connection_string
DB_NAME=your_database_name
👉 Replace your_mongodb_connection_string with your MongoDB Atlas URI (or mongodb://127.0.0.1:27017 if running locally).

▶️ Running the Scripts
Run all queries (CRUD, aggregation, indexing):

bash
Copy code
node script/queries.js
You will see results logged in the terminal.

📸 MongoDB Compass Screenshots
1. Books Collection in Compass

2. Querying Fantasy Books
