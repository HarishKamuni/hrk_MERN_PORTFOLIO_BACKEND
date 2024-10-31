const mongoose = require('mongoose');

const connectDB = async (uri) => {
  try {
    const conn = await mongoose.connect(uri);
    console.log('MongoDB is connected successfully!!');

    // const connection = await mongoose.connection;
    // connection.on('error', () => {
    //   console.log('Error connection to database');
    // });
    // connection.on('connected', () => {
    //   console.log('MongoDB connected successfully!!');
    // });
  } catch (error) {
    console.log('DB error', error);
  }
};
module.exports = connectDB;
