// import express module
const express = require('express');
const app = express();
console.log(app);

// define port for server to listen on
const port = 4000

// start server and listen on port
app.listen(port,()=>{
    console.log(`I am listening to port:${port}`);
});

// define route for root url
app.get('/',(req,res)=>{
    res.send('hello');
})