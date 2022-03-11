const express = require('express');
const app = express();

const mongoose = require('./database/mongoose');
// app.listen(3000, function(){
//     console.log("Server started");
// })

app.listen(3000, ()=> {
    console.log("Something exclusive");
})
console.log("what the heck");