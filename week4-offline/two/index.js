const express = require("express");
const app = express();


function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if(age>=14){
        next();
    }else{
        res.json({
            msg:"you are not old enough"
        })
    }
}

app.use(isOldEnoughMiddleware) //all the routes below it ..will have it.

app.get("/ride1",(req,res)=>{
  res.send({
        msg:"You have successfully riden ride 1"
    })  
    
})

app.get("/ride2",(req,res)=>{
  res.send({
        msg:"You have successfully riden ride 1"
    })  
})


app.listen(3000);

//an express app is series of middleware calls :--- 