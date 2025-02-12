//config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoURI = process.env.DATABASE_URL; // Используем Atlas, если доступен

        await mongoose.connect(mongoURI);

        console.log(`✅ MongoDB Connected: ${mongoURI.includes('127.0.0.1') ? 'Local DB' : 'Atlas Cloud'}`);
    } catch (err) {
        console.error('❌ Error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
