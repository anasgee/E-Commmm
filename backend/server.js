const { hostname } = require("os");
const app  = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");


//Uncaught Error   

process.on("uncaughtException",err=>{
     console.log(`Error :${err.message}`)
     console.log("Server is shutting due to uncaught error exception")
    process.exit(1);
    })

dotenv.config();

connectDB();

const Port = process.env.PORT || 5000;

app.listen(Port,()=>{
    console.log(`Server is listening to the port ${Port} with host ${hostname}`)
})

// Unhandlered Promise Rejection
process.on("unhandledRejection",err=>{
    console.log(`Error :${err.message}`);
    console.log("Shutting Down the server Due to Unhandeled Promise Rejection ");
    server.close(()=>{
        process.exit(1);
    })
});