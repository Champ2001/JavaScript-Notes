const name = "sarnava"
const repoCount = 50

//! String declaration using objects in js
const gameName = new String('sarn-ava') //! Here we are using new key word and assigning the value inside the constructor of the String

// console.log(name + repoCount + "Mohanta")//! This is outdated

//! Now a days we use backticks ``=>String interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

console.log(gameName.length)
console.log(gameName.charAt(0))
console.log(gameName.toUpperCase()) //!The original value is not changed

const newString =  gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-6,4)
console.log(anotherString)

const newStringOne = "   hitesh   "
console.log(newString.trim())

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))

console.log(gameName.split('-')) 


