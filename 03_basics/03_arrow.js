const user  = {
    username: "divyansh",
    price: 999,


    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username ="divyansh"
//     console.log(this.username);

// }
// chai()

// const chai = function() {
//     let username = "divyansh"
//     console.log(this.username);
// }

const chai = () => {
    let username = "divyansh"
    console.log(this);
}

chai()

// basic syntax of arrow function () => {}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => num1 + num2


// const addTwo = (num1, num2) => (num1 + num2)


const addTwo = (num1, num2) =>  ({username: "divyansh"})

console.log(addTwo(2,3));


// const myArray = [2,5,3,7,8]

// myArray.forEach(() => () )
