require("dotenv").config();
const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = process.env.MONGO_URL;

const collection = {};

const getCollection = () => {
   return collection
}

const connectMongo = async () => {
   const client = new MongoClient(MONGO_URL);

   await client.connect();
   const db = client.db();
   collection.Posts = db.collection('posts');
}



module.exports = {
   connectMongo,
   getCollection
}