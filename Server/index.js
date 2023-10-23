// import modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
console.log(app);

// define port for server to listen on
const port = 4000

// define the MongoDB connection string
const mongoDBAccess = process.env.MONGODB_URI;

// connect to the MongoDB database:
mongoose.connect(mongoDBAccess, { useNewUrlParser: true }).then(() => {
    console.log("Connected to MongoDB");
})
    .catch(() => {
        console.log("Couldn't connect to MongoDB");
    })

// start server and listen on port
app.listen(port, () => {
    console.log(`I am listening to port:${port}`);
});

// define route for root url
app.get('/', (req, res) => {
    res.send('hello');
})