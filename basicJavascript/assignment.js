const user = (us) =>{
    console.log(`namaste ${us[0]} ur age is ${us[1]}`);
}

user(["vinit",21])


function greetUser(us){
    const title = us.gender == "male" ? "Mr." : us.gender == "female" ? "Mrs." : "Mx."

    console.log(`Hi ${title} ${us.name}, your age is ${us.age}`);
    if(us.age>=18) console.log("your are legal to vote");
    else console.log("you are not eligible to vote !");
    
}

greetUser({
    name: "riya",
    age: 21,
    gender: "female"
})


function onlyEven(arr){
    const evenVal = arr.filter((val)=> val%2==0)
    console.log(evenVal);
}

onlyEven([2,1,3,5,6,3,9,12,14,13])


function allUsers(users){
    return users.filter(user => user.age >= 18)
}

const val = allUsers([{name:"vinit", age:21}, {name:"rahul",age : 19}, {name: "vilas" , age:23}])
console.log(val);


//define a function that takes array of user objects ...and return the users whose
// age > 18 and are male .

function getAdultMales(users){
    return users.filter(user => user.age >= 18 && user.gender == "male")
}

const users = [
    { name: "Vinit", age: 21, gender: "male" },
    { name: "Rahul", age: 17, gender: "male" },
    { name: "Vilas", age: 23, gender: "male" },
    { name: "Anita", age: 25, gender: "female" },
    { name: "Ravi", age: 18, gender: "male" }
  ];

const result = getAdultMales(users)
console.log(result);