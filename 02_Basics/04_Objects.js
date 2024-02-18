const tinderUser1 = new Object() //! This is a singleton object
const tinderUser = {} //! This is a non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userfullname :{
            firstname: "hitesh", 
            lastname :  "choudhury",
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2 : "b"}
const obj2 = {3: "a", 4 : "b"}

const obj3 = {obj1, obj2}
console.log(obj3) //! same issue of object inside object like arrays .To solve this issue we use assign operator 

const obj4 = Object.assign({} ,obj1, obj2);//! use of {} is optional but it always ensures that it is made into one object 
console.log(obj4)

//! Out of all these techniques the use of spread operator is the most convenient one

const obj5 ={...obj1, ...obj2}
console.log(obj5)

//When coming from database 

const users = [
    {
        id:1 ,
        email :"s@gmail.com"
    },
    {
        id:2 ,
        email :"b@gmail.com"
    },
    {
        id:3 ,
        email :"c@gmail.com"
    },
]
console.log(users[1].email)
console.log(users[0].id)

//! GETTING ALL THE KEYS AND VALUES OF AN OBJECT

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries (tinderUser))

//! WHEN WE WANT THAT A PROPERTY EXISTS OR NOT 

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

//! DESTRUCTURING
const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

const {courseInstructor : instructor} = course //if we think that courseInstructor is a long name , we can even rename according to us like instructor

// console.log(courseInstructor)
console.log(instructor)

//! API
// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free", 
// }