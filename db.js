var mongoose = require('mongoose');
require('dotenv').config();
// MongoDB connection string

const mongoURL=process.env.MONGODB_URL;
mongoose.connect(mongoURL);
//
const db = mongoose.connection;

// Log messgit staages to confirm connection status
db.on('connected', () => {
    console.log('Connected to MongoDB Server');
});

db.on('error', (err) => {
    console.error('Connection Error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB Disconnected');
});

module.exports = db;
