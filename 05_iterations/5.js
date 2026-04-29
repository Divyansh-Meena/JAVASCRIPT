// for each

const coding = ['js', 'ruby', 'java']

// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach((val) => {
// console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr);
// })


const myCoding = [
    {
        lanName : "javascript",
        lanFileName : "js"
    },

    {
        lanName : "python",
        lanFileName : "py"
    },

    {
        lanName : "c++",
        lanFileName : "cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.lanName);
})