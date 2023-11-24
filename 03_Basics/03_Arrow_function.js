const user = {
    username:"sarnava",
    price :999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)//! This refers to the current context
        console.log(this) // =>{
        //     username: 'sarnava',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
    }
}
user.welcomeMessage()
user.username ="sam" //We are changing the value and it is changing the current context
// user.welcomeMessage()
console.log(this) //! Here the current context is empty object{}

function chai(){
    let username ="sarnava"
    console.log(this.username)//! gives undefined as we are unable to use this inside the function
}

chai()

const chai2 = () =>{
    let username = "sarnava"
    console.log(this.username) //! Still gives undefined 
}
chai2()

//! Pure Arrow function pe charcha

const addTwo = (num1, num2) => {
    return num1+num2;
}

//! Implicit return 
const addTwoSame = (num1, num2) => (num1+ num2) 

//! If we want to return an object the single brackets are necessary
const addTwoObject = (num1, num2) => ({username:"hitesh"}) 
console.log(addTwoObject())

