// config/db.js
const mongoose = require("mongoose");

// Set strictQuery explicitly to suppress the warning
//mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    let uri = process.env.MONGO_URI;
    if (!uri) {
      console.warn('MONGO_URI not set in .env, falling back to local MongoDB');
      uri = 'mongodb://127.0.0.1:27017/task-manager';
    }

    // Ensure database name exists in URI (MongoDB Atlas requires it, use default task-manager)
    if (uri.match(/^mongodb\+srv:\/\//) && !uri.split('/').slice(3).join('/')) {
      uri = uri.replace(/\/?$/, '/task-manager?retryWrites=true&w=majority');
    }

    // Add options when not present for compatibility
    if (!uri.includes('retryWrites')) {
      const separator = uri.includes('?') ? '&' : '?';
      uri += `${separator}retryWrites=true&w=majority`;
    }

    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
