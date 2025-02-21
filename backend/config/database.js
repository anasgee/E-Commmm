const mongoose = require("mongoose")


const connectDB = async()=>{
    try {
        const connct = await mongoose.connect(process.env.MONGOURI);
        console.log(`mongodb connected at ${connct.connection.host}`);
    } catch (error) {
        console.log("error while connecting mongodb",error)
    }
}

module.exports = connectDB;