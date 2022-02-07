const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3001;
const connectDB = require("./db/connect")
const productData = require("./seederProducts")
const Product = require("./models/Product")

// app.use()
app.use(express.json());

connectDB()

const importData = async () => {
  try {
      await Product.deleteMany({})

      await Product.insertMany(productData)
      console.log("success with data import");
      process.exit()
  } catch (error) {
      console.log("Error with data import");
      process.exit(1)
  }
}
importData()

app.listen(port, () => console.log(`Server is running on ${port}`));
  

