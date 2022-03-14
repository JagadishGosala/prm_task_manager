const express = require('express');
const app = express();

const mongoose = require('./database/mongoose');

const taskList = require('./database/models/tasklist');
const task = require('./database/models/task');
const res = require('express/lib/response');

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
app.use(express.json());

app.get('/tasklists',(req, res)=>{
    taskList.find({})
        .then((taskLists)=> {
            res.status(200);
            res.send(taskLists);
        })
        .catch((error)=> {
            res.status(500);
            console.log(error)})
});

app.post('/tasklists',(req, res)=> {
    // console.log(req.body);
    let taskListObj = { 'title': req.body.title};
    taskList(taskListObj).save()
        .then((taskLists)=> { 
            res.status(201);
            res.send(taskLists) 
        })
        .catch((error)=> {
            res.status(500);
            console.log(error)});
});

app.get('/tasklists/:taskListId',(req,res)=> {
    let taskId = req.params.taskListId;
    taskList.find({_id: taskId})
        .then((tasklists)=>{
            res.status(200);
            res.send(tasklists)
        })
        .catch((error)=>{
            res.status(500);
            res.send(error)
        })
})

app.put('/tasklists/:taskListId',(req,res)=>{
    taskList.findOneAndUpdate({_id: req.params.taskListId},{$set: req.body})
        .then((tasklists)=>{
            res.status(201);
            res.send(tasklists)
        })
        .catch((error)=>{
            res.status(500);
            res.send(error)
        })
})

app.patch('/tasklists/:taskListId',(req,res)=>{
    taskList.findOneAndUpdate({_id: req.params.taskListId},{$set: req.body})
        .then((tasklists)=>{
            res.status(201);
            res.send(tasklists)
        })
        .catch((error)=>{
            res.status(500);
            res.send(error)
        })
})
app.delete('/tasklists/:taskListId', (req,res)=>{
    taskList.findOneAndDelete({_id: req.params.taskListId})
        .then((tasklists)=>{
            res.status(201);
            res.send(tasklists)
        })
        .catch((error)=>{
            res.status(500);
            res.send(error)
        })
})

app.listen(3000, ()=> {
    console.log("Listening on 3000");
})