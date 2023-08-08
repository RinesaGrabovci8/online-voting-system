const sql = require('mssql');
const dbConfig = require('../mssql/dbConfig.js'); // Adjust the path as needed

async function connectToDatabase() {
  try {
    await sql.connect(dbConfig);
    console.log('Connected to database');
  } catch (err) {
    console.error('Error connecting to database:', err);
  }
}

// Call the connectToDatabase function to establish the connection
connectToDatabase();

async function getParties() {
  try {
    const result = await sql.query`SELECT * FROM Parties`;
    return result.recordset;
  } catch (err) {
    console.error('Error fetching parties:', err);
    return [];
  }
}

const express = require('express');
const app = express();

app.get('/parties', async (req, res) => {
  const parties = await getParties();
  res.json(parties);
});

// Other routes for different operations
