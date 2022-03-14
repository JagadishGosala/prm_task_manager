const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minlength: 3
    },
    _tasklistId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
    }
});
// creating model for task schema
const task = mongoose.model('task',TaskSchema);

//exporting module

module.exports = task
