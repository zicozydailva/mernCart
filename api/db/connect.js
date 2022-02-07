
const mongoose = require("mongoose");
function connectDB() {

    mongoose
    .connect("mongodb+srv://zicoraw:Ogbu10ski@cluster0.dfiqf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() => console.log("DB CONNECTED SUCCESSFULLY"));
}

module.exports = connectDB