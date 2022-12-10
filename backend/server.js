const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

const dbConnect = require("./utils/dbConnect");
const { connectToServer } = require("./utils/dbConnect");
const errorHandler = require("./middleware/errorHandler");
const blogsRoutes = require('./routes/blogsRoutes.js')

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

connectToServer((err) => {
    if(!err) {
        app.listen(port, () => {
            console.log(`app listening on port ${port}`);
        })
    }else {
        console.log(err)
    }
});

// route
app.use("/product", blogsRoutes)

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.all("*", (req, res) => {
    res.send("NO route found.");
  });

app.use(errorHandler);

process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1);
    })
})