// puts all env variables into the process.env object
require("dotenv").config();
const mongoose = require("mongoose");

// variable that is equal to my URL to connect to the database
const connectionString = process.env.DATABASE_URL;

// new connection to mongoose
mongoose.connect(connectionString);

mongoose.connection.on("connected", ()=>{
    console.log("mongoose connected to MongoDB")
});

mongoose.connection.on("error", (error) =>{
    console.log("mongoDB cnnection error: ", error)
});

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
});

