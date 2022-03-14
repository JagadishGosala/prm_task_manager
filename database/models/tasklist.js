const mongoose = require('mongoose');

const TaskListSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minlength: 3
    }
});
// creating model for schema
const taskList = mongoose.model('taskList',TaskListSchema);

//exporting module

module.exports = taskList;
