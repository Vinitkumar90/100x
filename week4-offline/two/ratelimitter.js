//user will be sending there user id in the header as "user-id"
//if a user sends more than 5 requests in a single second. the server should block them with a 404.
//you have been given a numberOfRequestsForUser object to start off with which clears every one second

const express = require("express");
const app = express();

let numberOfRequestsForUser = {};

setInterval(() => {
    numberOfRequestsForUser = {}
}, 1000);



app.use(function(req,res,next){
    const userId = req.headers["user-id"];
    if(numberOfRequestsForUser[userId]){
        numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] + 1;
        if(numberOfRequestsForUser[userId] > 5){
            res.status(411).send("no entry");
        }else{
            next();
        }
    }else{
        numberOfRequestsForUser[userId] = 1;
        next();
    }
})




app.listen(3000,()=>{
    console.log("server listeninig on port 3000");
})