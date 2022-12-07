const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const colors = require('colors');

const app = require('./app');

// database connection
mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log(`Database connection established.` .red.bold);
})

// server port
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App is running on port ${port}`.yellow.bold);
})