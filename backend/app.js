const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
// middleware
app.use(express.json());
app.use(cors());

// routes

app.get("/", async (req, res) => {
    res.send("Route Is Working");
})

module.exports = app;