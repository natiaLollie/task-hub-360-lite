const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: String,
    date: String,
    isCompleted: Boolean,
})

const Task = mongoose.model('tasks',taskSchema);

module.exports = Task;