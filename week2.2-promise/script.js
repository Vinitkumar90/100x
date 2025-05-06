function waitFor3 (resolve){   //2. jo resolve hai ...whenever this is called
    setTimeout(resolve, 3000);
}

function setTimeoutPromisified(){
    return Promise(waitFor3)   ///1. ess function ka pehla parameter
}

function main(){
    console.log("main is called");
}
 
//3. after that this then ...is called 
setTimeoutPromisified().then(main)   //promised based appraoch


let rect = new Reactangle