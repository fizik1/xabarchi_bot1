const mongoose = require("mongoose")

const connectDB = async()=>{
    const connecting= await mongoose.connect(process.env.DB_URI);
    console.log("MongoDB  connect to :" ,connecting.connection.host);
}

module.exports = connectDB