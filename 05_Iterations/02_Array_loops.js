//! for of Loop

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for(const num of arr){
    console.log(num)
}

const greetings = "Hello World!"
for(const greet of greetings){
    console.log(`Each char of ${greet}`)
}

//! Maps
//Map object holds key-value pairs and remembers the original insertion order of the keys.Any value (both objects and primitive values ) can be used as either a key or a value
const map = new Map()
map.set('IN', "India")
map.set('Un', "USA")
map.set('Un', "USA")
map.set('Fr', "France")
map.set('IN', "India") //! Not allowed as map stores unique values

console.log(map)

for(const key of map){
    console.log(key) //! Here it will print the whole in the form of an array .
}
//! If we want the key and the value seperately in map we can destructure it with [] brackets
for(const [key, value] of map){
    console.log(key ," => ", value);
}

const myObject ={
    'game1': "NFS",
    'game1': "Spiderman"
}
for(const [key, value] of myObject){ //Will give error bcoz myObject is not iterable
    console.log(key ," => ", value);
}