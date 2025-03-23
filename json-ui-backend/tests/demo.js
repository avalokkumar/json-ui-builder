const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const uri = 'mongodb://127.0.0.1:27017/mydatabase'; // Replace with your MongoDB URI

app.get('/data', async (req, res) => {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');
    const data = await collection.find().toArray();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});