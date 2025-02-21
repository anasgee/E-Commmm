const { hostname } = require("os");
const app  = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");


dotenv.config();

connectDB();

const Port = process.env.PORT || 5000;

app.listen(Port,()=>{
    console.log(`Server is listening to the port ${Port} with host ${hostname}`)
})