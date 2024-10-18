const mongoose = require("mongoose");
const mongodburl = "mongodb://localhost:27017/seeder11"

const connectDB = async()=>{
    try {
        await mongoose.connect(mongodburl)
        console.log('Database connection is successfull');
        
    } catch (error) {
         console.log("Databse connection is unsuccessfull");
         process.exit(1)
    }
}

module.exports = connectDB