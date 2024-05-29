const mongoose = require("mongoose");

const URL = process.env.mongo_url

const connectDb = async () => {
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("database is connected successfull");
        
    } catch (error) {
        console.log("error from db",error);
    }
}

module.exports = connectDb;