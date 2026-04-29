const myObj = {
    js: 'javascript',
    cpp: 'c++',
    py: 'python'
}

// for in loop

for(const key in myObj){
    console.log(`${key} shortcut is ${myObj[key]}`);
}

const programming = ["js","cpp","py"]

for(const key in programming){
    console.log(programming[key])
}