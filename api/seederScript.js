require("dotenv").config()

const productData = require('./seederProducts')
const Product= require("./models/Product")
const connectDB = require("./db/connect")

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