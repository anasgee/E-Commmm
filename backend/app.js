const express = require("express");
const producRoute = require("./routes/productRoute")

const errorMiddleware = require("./middleware/error")
//added comment
const app = express();


app.use(express.json())
app.use("/api/v1",producRoute)
app.use(errorMiddleware);

// Unhandleled Promise Rejection



module.exports = app;