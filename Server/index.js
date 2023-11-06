// import modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// C R U D
// Restful API | HTTP Methods: Post (create), Get (read), Put (update), Patch (update), Delete

app.post('/task', async (req, res) => {
    try {
        let createTask = new Task({
            name: req.body.name,
            date: req.body.date,
            isCompleted: false,
        });
        let savedTask = await createTask.save();
        res.send(savedTask);
    } catch (err) {
        console.log(err)
        res.send('failed to create new task.')
    }
});

app.get('/get_task', async (req, res) => {
    try {
        let allTasks = await Task.find();
        res.send(allTasks);
    } catch (err) {
        console.log(err);
        res.send('failed to get tasks')
    }
})

app.put('/update_task', async (req, res) => {
    try {
        let updatedTask =  await Task.findOneAndUpdate({ _id: req.body.id }, {isCompleted: req.body.isCompleted});
        res.send(`successfully updated task: ${updatedTask}`);
    } catch (err) {
        console.log(err);
        res.send('failed to update task.');
    }
});

app.delete('/delete_task', async (req, res) => {
    try {
        await Task.findOneAndDelete({ _id: req.body.id });
        res.send({message: 'successfully deleted task.'});
    } catch (err) {
        console.log(err);
        res.send('failed to delete task.');
    }
})










