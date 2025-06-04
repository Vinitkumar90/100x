const express = require("express");
const app = express();

//you have been given an express server which has a few enpoints.
//1.Ensure that if there is ever an exception , the end user sees a status code of 404
//2, Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

let errorCount = 0;


//error handling middleware
app.use(function(err, req, res, next){
    res.status(404).send({});
    errorCount ++;
})

app.listen(3000,()=>{
    console.log(`Server is listening on port 3000`);
})