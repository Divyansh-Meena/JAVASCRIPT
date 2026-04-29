// high order Array loop 

// for of

const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num);
}

const greetings = "Hello World"
for(const char of greetings){
    console.log(`each char is ${char}`)
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('US',"united states")
map.set('FR',"France")

// console.log(map);

for(const [key,value] of map){
    console.log(key,':-',value); 
}

const myObj = {
    'game1': 'GTA',
    'game2': 'NFS'
}

for(const [key,value] of Object.entries(myObj)){
    console.log(key,':-',value); 
}

