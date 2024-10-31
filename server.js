const express = require('express');
require('dotenv').config();
const connectDB = require('./config/connectDB');
const cors = require('cors');

const userRoute = require('./routes/user.route');
const portfolioRoute = require('./routes/portfolio.route');
const products = require('./staticData');

const app = express();
app.use(
  cors({
    origin: process.env.FORNTEND_URL,
    credentials: true,
  })
);
app.use(express.json());

app.use('/api', userRoute);
app.use('/api', portfolioRoute);

app.get('/', (req, res) => {
  console.log(products);
  res.status(200).json('products');
});

port = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, () => {
      console.log(`server is running at port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
