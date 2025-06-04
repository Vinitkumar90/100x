const express = require("express");
const app = express();


function calcuateSum(n){
 let ans=  0;
    for(let i=0; i<n; i++){
        ans+=i;
    }
    return ans;
}

app.get("/",(req,res)=>{
    const n = req.query.n;      //http://localhost:300/?n=5;
    const ans = calcuateSum(n)
    res.send(`the sum of ${n} : ${ans.toString()} `)
})

app.listen(3000);