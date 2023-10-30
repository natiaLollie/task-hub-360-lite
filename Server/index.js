// import modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

// define port for server to listen on
const port = 4000;

// define the MongoDB connection string
const mongoDBAccess = process.env.MONGODB_URI;

// connect to the MongoDB database:
mongoose.connect(mongoDBAccess, {
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(() => {
    console.log("Couldn't connect to MongoDB");
})

const Task = require('./model/Task');

// define route for root url
app.get('/', (req, res) => {
    res.send('hello');
})

// start server and listen on port
app.listen(port, () => {
    console.log(`I am listening to port:${port}`);
});

// C R U D (dummy data)

/* 
let schoolTask = new Task(
    {
        name: "book is read",
        date: "30 Oct 2023",
        isDone: false,
    }
)
schoolTask.save();
*/

// Restful API | HTTP Methods: Post (create), Get, Put, Patch, Delete

app.post('/task', async (req, res) => {
    let schoolTask = new Task(
        {
            name: "book is read",
            date: "30 Oct 2023",
            isDone: false,
        }
    )
    let data = await schoolTask.save();
    res.send(data);
})




