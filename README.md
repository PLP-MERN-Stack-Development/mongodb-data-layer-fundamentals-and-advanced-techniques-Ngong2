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

yaml
Copy code

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

Would you like me to also **finish the full `queries.js` file (CRUD, advanced queries, aggregations, indexing)** so you just run `node script/queries.js` and see results like in your Compass screenshots?
👉 Now just make sure you **place both screenshots in your repo root** with the same filenames:
<img width="1874" height="969" alt="Screenshot 2025-10-02 161351" src="https://github.com/user-attachments/assets/7a82ca3c-990a-4c54-b994-772bbc06006e" />


<img width="940" height="476" alt="Screenshot 2025-10-02 162637" src="https://github.com/user-attachments/assets/b226377f-43b8-418e-8320-f8f784528ea2" />



<img width="1874" height="969" alt="Screenshot 2025-10-02 161351" src="https://github.com/user-attachments/assets/78c1286b-29fb-4aca-9565-a1e3fa2f09b3" />



<img width="539" height="445" alt="image" src="https://github.com/user-attachments/assets/984e3c3d-feef-4ab3-8665-1599e38a4ab8" />

<img width="940" height="476" alt="Screenshot 2025-10-02 162637" src="https://github.com/user-attachments/assets/38a71609-6574-4c3c-a71d-1564d52df546" />


