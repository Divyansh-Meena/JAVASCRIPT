// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsuser = {
    name: "Divyansh",
    "full name": "Divyansh Meena",
    [mySym]: "myKey1",
    age: 18,
    location : "Bhopal",
    email: "divyanshmeena@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);


jsuser.email = "divyansh@chatgpt.com"
//Object.freeze(jsuser)
jsuser.email ="divyansh@gemni.com"

//console.log(jsuser)

jsuser.greeting = function(){
    console.log("Hello js user");
}
jsuser.greeting2 = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greeting2());