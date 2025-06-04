const express = require("express");
const app = express();

const Users = [
  {
    user: "John",
    kidneys: [{
      healthy: false
    }]
  },
];

app.use(express.json())

app.get("/",(req,res)=>{
    let johnKidneys = Users[0].kidneys;
    let numberOfKidney = johnKidneys.length;
    let healthyKidney = 0;
    for(let i=0; i<johnKidneys.length; i++){
       if(johnKidneys[i].healthy){
        healthyKidney = healthyKidney + 1;
       }
    }
    let unHealthyKidneys = numberOfKidney - healthyKidney;
    res.json({
     numberOfKidney,
      healthyKidney,
      unHealthyKidneys
    })
})


app.post("/",(req,res)=>{
    let isHealthy = req.body.isHealthy;
    Users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })
})

app.put("/",(req,res)=>{
    Users[0].kidneys.forEach((kidney)=>{
        kidney.healthy = true;
    })

    res.json({
        msg:"All kidney marked as healthy"
    })
})

app.delete("/",(req,res)=>{
    let newKidney = Users[0].kidneys.filter(user => user.healthy === true);
    Users[0].kidneys =  newKidney;

    res.json({
        "msg":"Unhealthy kidneys removed"
    });
})


app.listen(3000);