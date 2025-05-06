
function random(resolve){ //resolve is also a function
    setTimeout(resolve,3000)
}


// let p =  new Date()
let p = new Promise(random) // suppose to return u something eventually
console.log(p); // this give Promise {<pending>} 




// using the eventual value returned by the promise ...using it is simple
function callback(){
    console.log("promise succeded");
}

p.then(callback)


// const rect = new Rectangle()
// rect.area()