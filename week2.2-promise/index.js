// callback version----

function callback(){
    console.log("hello world");
}

setTimeout(callback, 3000);

//callback has callback hell...so promises

//promisified version----

//returns an object of the promise class
function promisifiedSetTimeout(ms){
    return new Promise((resolve) => setTimeout(resolve,ms) )
}

promisifiedSetTimeout(4000).then(callback)

console.log(promisifiedSetTimeout(4000).then(callback));
//Promise { <pending> }


