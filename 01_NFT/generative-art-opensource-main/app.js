const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");

//Import Routes
const nftsRoute = require("./routes/nfts");

//Middlewares
app.use("/nfts", nftsRoute);

mongoose.connect(process.env.DB_URI, () => console.log("connected to DB!"));

//Routes
app.get("/", (req, res) => {
    res.send("Running on port 3000");
});

app.get("nft", (req, res) => {
    res.send("");
});
//Listening
app.listen(3000);
