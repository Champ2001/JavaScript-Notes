//! Arrays in JS are resizeable and may also contain different data types , zero based indexing , array copy operations create shallow copies 

const myArr = [0,1,2,3,4,5]

const myHeros = ["saktiman", "nagraj"]

const myArr2 = new Array(1,2,3,4);
console.log(myArr2[0])

//! Array Methods 
myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9) //! Enters the element in the start of the array which might be costly at some instances bcoz if there are 10000 values we need to shift all the other value by one index 
console.log(myArr)

myArr.shift() //! Removes the first element
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))

const newArr = myArr.join();
console.log(newArr)
console.log(typeof newArr) //=>join makes the array a string comma seperated

//! Slice and Splice
console.log("A " , myArr)
const myn1 = myArr.slice(1,3);//! Starting from the first index , before the third index
console.log(myn1)
console.log("B " , myArr)

const myn2 = myArr.splice(1,3);//! Starting from the first index , includes  the third index
console.log("C " , myArr) //! Splice manupulates the original array and removes those index .
console.log(myn2)
