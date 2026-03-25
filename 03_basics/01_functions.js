// function sayMyname {
//     console.log("D");
//     console.log("I");
//     console.log("V");
//     console.log("Y");
//     console.log("A");
//     console.log("N");
//     console.log("S");
//     console.log("H");
// }

// sayMyname()

function addTwonumber(number1, number2){
    //console.log(number1 + number2);
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
}

const result = addTwonumber(3, 5)

// console.log("result: ",result);

function loginuserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return;
    }
return `${username} just logged in`
}

// console.log(loginuserMessage("Divyansh"));
// console.log(loginuserMessage());

function calculateCartPrice(val1, val2, ...nums1){
    return nums1
}

// console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "Divyansh",
    price: 1999
}

function handelObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handelObject(user)

handelObject({
    username: "divyansh",
    price: 499
})

const myNewArray = [200, 400, 100, 600]

function returnSsecondValue(getArray){
    return getArray[1];
}

// console.log(returnSsecondValue(myNewArray));
console.log(returnSsecondValue( [200, 400, 100, 600] ));


