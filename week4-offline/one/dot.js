const express = require("express");
const app = express();

const fs = require("fs")

// app.get("/hello/:name",(req,res)=>{  //after: whatever is there ..will be in name...and accessed by req.param.name
//     const a = req.params.name;
//     res.send({
//         hey:a,
//     })
// })


app.get("/:filename",(req,res) => {
    let a = req.params.filename
    fs.readFile(a, "utf-8" , (error,data) =>{
        res.json({
            data
        })
    })
})


app.listen(3000)