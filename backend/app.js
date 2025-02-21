const express = require("express");
const producRoute = require("./routes/productRoute")


const app = express();


app.use(express.json())
app.use("/api/v1",producRoute)

module.exports = app;