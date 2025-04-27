//1 => n

/*
function sum(n){
    let final = 0;
    while(n>0){
        final+=n;
        n--;
    }
    console.log(final);
}

sum(3)  */

/* 
const fs = require("fs");

const contents = fs.readFileSync("./a.txt") //utf-8 one way to represent english lang
console.log(contents);

const newCont = fs.readFileSync("./b.txt", "utf-8")
console.log(newCont); */

//callbacks ..functional arguments
/* 
function add(a,b){
    return a+b;
}


function add(a,b){
    return a+b;
}

function doSome(a,b,fn){
    let ans = fn(a,b);
    console.log(ans);
}

doSome(2,5,add);  */

// const fs = require("fs")

// function print(err, data){ //error first function
//     console.log(data);
// }

// fs.readFile("a.txt","utf-8",print)
// fs.readFile("b.txt","utf-8",print)

// console.log("Done !");


console.log("hi");

function timeout(){
    console.log("click the btn");
}

setTimeout(timeout,10000);

let c = 0;
for(let i=0; i<20; i++){
    c++;
}

console.log(c);