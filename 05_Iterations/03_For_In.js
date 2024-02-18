//! For in loops - mainly used in objects and arrays
const myObject = {
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js","rb", "py","java","cpp"]

for(const key in programming){
    console.log(key) //! It will give the value of the keys i.e 0 1 2 3 4
    console.log(programming[key]) //! This will give the actual values
}

const map = new Map()
map.set('IN', "India")
map.set('Un', "USA")
map.set('Un', "USA")
map.set('Fr', "France")

for (const key in map) {
    console.log(key) //! not possible as map is not iterable
}
//! For of - mainly used in strings and arrays
const str = "Apna college"

for(let i of str){
    console.log(i)
}