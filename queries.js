// queries.js
// Run: node queries.js

require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;
const client = new MongoClient(uri);

async function runQueries() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(dbName);
    const books = db.collection("books");

    // -----------------------------
    // 🟢 Task 2: Basic CRUD Operations
    // -----------------------------

    // 1. Find all books in a specific genre (Fantasy)
    const fantasyBooks = await books.find({ genre: "Fantasy" }).toArray();
    console.log("\n📚 Fantasy books:", fantasyBooks);

    // 2. Find books published after a certain year (2000)
    const recentBooks = await books.find({ published_year: { $gt: 2000 } }).toArray();
    console.log("\n📚 Books published after 2000:", recentBooks);

    // 3. Find books by a specific author (George Orwell)
    const orwellBooks = await books.find({ author: "George Orwell" }).toArray();
    console.log("\n📚 Books by George Orwell:", orwellBooks);

    // 4. Update the price of a specific book (1984)
    const updatePrice = await books.updateOne(
      { title: "1984" },
      { $set: { price: 20.99 } }
    );
    console.log("\n💲 Updated price result:", updatePrice.modifiedCount);

    // 5. Delete a book by its title (Moby Dick)
    const deleteBook = await books.deleteOne({ title: "Moby Dick" });
    console.log("\n🗑️ Deleted Moby Dick result:", deleteBook.deletedCount);

    // -----------------------------
    // 🟡 Task 3: Advanced Queries
    // -----------------------------

    // 1. Find books in stock & published after 2010
    const stockAfter2010 = await books.find({
      in_stock: true,
      published_year: { $gt: 2010 }
    }).toArray();
    console.log("\n📦 In-stock books after 2010:", stockAfter2010);

    // 2. Use projection (only title, author, price)
    const projectionExample = await books.find(
      {},
      { projection: { _id: 0, title: 1, author: 1, price: 1 } }
    ).toArray();
    console.log("\n🔍 Projection (title, author, price):", projectionExample);

    // 3. Sorting by price (ascending)
    const sortAsc = await books.find().sort({ price: 1 }).toArray();
    console.log("\n⬆️ Books sorted by price ASC:", sortAsc);

    // 4. Sorting by price (descending)
    const sortDesc = await books.find().sort({ price: -1 }).toArray();
    console.log("\n⬇️ Books sorted by price DESC:", sortDesc);

    // 5. Pagination: Limit 5 books per page, skip first 5
    const page2 = await books.find().skip(5).limit(5).toArray();
    console.log("\n📄 Page 2 (5 books):", page2);

    // -----------------------------
    // 🔵 Task 4: Aggregation Pipelines
    // -----------------------------

    // 1. Average price of books by genre
    const avgPriceByGenre = await books.aggregate([
      { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
    ]).toArray();
    console.log("\n📊 Average price by genre:", avgPriceByGenre);

    // 2. Find author with the most books
    const mostBooksAuthor = await books.aggregate([
      { $group: { _id: "$author", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 }
    ]).toArray();
    console.log("\n👨‍💻 Author with most books:", mostBooksAuthor);

    // 3. Group books by publication decade
    const booksByDecade = await books.aggregate([
      { $project: { decade: { $subtract: [ { $divide: ["$published_year", 10] }, { $mod: [ { $divide: ["$published_year", 10] }, 1 ] } ] } } },
      { $group: { _id: "$decade", count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    ]).toArray();
    console.log("\n📆 Books grouped by decade:", booksByDecade);

    // -----------------------------
    // 🟣 Task 5: Indexing
    // -----------------------------

    // 1. Index on title
    const titleIndex = await books.createIndex({ title: 1 });
    console.log("\n⚡ Index created on title:", titleIndex);

    // 2. Compound index on author + published_year
    const compoundIndex = await books.createIndex({ author: 1, published_year: -1 });
    console.log("⚡ Compound index created on author + published_year:", compoundIndex);

    // 3. Explain query performance (example with title index)
    const explainResult = await books.find({ title: "1984" }).explain("executionStats");
    console.log("\n🔍 Query performance (with index):", explainResult.executionStats);

  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
    console.log("\n🔒 Connection closed");
  }
}

runQueries();
