//you have to create a middleware for logging the number of requests on a server
const express = require("express");
const app = express();

let requestCount = 0;

function increaseCount(req,res,next){
    requestCount++;
    next()
}

app.use(increaseCount);


app.get("/user",  (req,res) =>{
    res.status(200).json({name:"john"});
})

app.post("/user",function(req,res){
    res.status(200).json({msg: "created dummy user"});
})

app.get("/logs",function(req,res){
    res.send({
        msg:`Total request recieved ${requestCount}`
    })
})

//{"msg":"Total request recieved 6"}


app.listen(3000,()=>{
    console.log("server listening on port 3000");
});