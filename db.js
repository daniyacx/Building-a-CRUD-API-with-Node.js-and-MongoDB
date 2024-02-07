const { MongoClient } = require('mongodb');

const dbUri = 'mongodb://localhost:27017/blogs';
let db;

const connectDb = async () => {
    try {
        const client = await MongoClient.connect(dbUri);
        db = client.db();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
};

const getDb = () => {
    if (!db) {
        throw new Error('Database not connected');
    }
    return db;
};

module.exports = { connectDb, getDb };
