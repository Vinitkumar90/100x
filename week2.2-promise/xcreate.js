//most functions when we say are promisified ... under the hood in the end....there will be a callback 
// that will be called...we just syntatically coat it...make it a little prettier ..with wrapping of promise


//promsified version of read file

const fs = require("fs")

function readTheFile(resolve){
    fs.readFile("a.txt","utf-8", function(err,data){
        resolve(data)
    })
}

function readFile(fileName){
    return new Promise(readTheFile);
}

const  p = readFile();

function callback(contents){
    console.log(contents);
}

p.then(callback)


function setTimeoutPromisified(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

function cb(){
    console.log("promise succeded");
}

const s = setTimeoutPromisified(3000)
s.then(cb)