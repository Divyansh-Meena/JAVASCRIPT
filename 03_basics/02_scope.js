//var c  = 400
let a = 200
if (true){
    let a = 10
    const b = 20
    var c = 30
  //  console.log("INNER", a)
}

//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username  = "divyansh"

    function two(){
        const website = "youtube.com"
        //console.log(username);
    }
    //console.log(website);

    //two()
}

one()

if (true){
    const username ="divyansh"

    if(username ===  "divyansh"){
        const website = "  youtube.com"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


// +++++++++++++++++++++++++++ intresting +++++++++++++

console.log(addone(5))
function addone(num){
    return num +1
}



//addtwo(5)
const addtwo = function(num){
    return num+ 2
}

