//! The promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value .Jaise maine promise kar rakha hai ki video aayenge but agar aaj nahi aaya toh promise complete nahi hua ajj ka .

//! A Promise is in one of these states:

// 1.pending: initial state, neither fulfilled nor rejected.
// 2.fulfilled: meaning that the operation was completed successfully.
// 3.rejected: meaning that the operation failed.

const promiseOne = new Promise(function(resolve, reject) {
    //Do an async task
    //DB calls , cryptography , network
    setTimeout(function() {
        console.log('Async task is complete')
        resolve() //! when we call resolve then only it gets connected to .then .Now we can get the output of .then 
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise consumed");
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task 2")
    } ,1000)
}).then(function(){
    console.log("Async 2 resolved")
})

//! Pass values to .then from the promise (using arguments)
const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username:"Chai", email:"chai@exaple.com"}) //! Inside this resolve we can pass values in parameters .Mostly in the form of objects we pass the values
    } , 1000)
})

promiseThree.then(function(user){
    console.log(user) //=>{ username: 'Chai', email: 'chai@exaple.com' } as this is the object that we passed in the resolve
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if(!error){
            resolve({username: "chai", password:"123"})
        }
        else{
            reject('ERROR : Something went wrong')
        }
    } ,1000)
})

//! Promise chaining

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => { //We cannot directly acces the return value of username so we have to use chaining for accesing the value of the username
    console.log(username);
}).catch(function(error) {
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))

//! Promise using async await

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function() {
        let error = true;
        if(!error){
            resolve({username: "javascript", password:"123"})
        }
        else{
            reject('ERROR : JS went wrong')
        }
    } ,1000)
})

async function consumePromiseFive(){
    try {
        const response =await promiseFive
    console.log(response)
    }
    catch(error){ //If we do not use try catch block then => This error originated either by throwing inside of an async function without a catch block
        console.log(error)
    }
}
consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json() //! this code is correct but the response.json also needs some time to get converted .So we must use await to solve this issue
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

//! using fetch the same code 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data)
})
.catch((error) => {
    console.log(error)
})

//! The global fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfullied once the response is available

//Interview question - //! you have requested from promise and got error 404 .WHere you will get the error => We will get the error in the response only and not on fetch, resolve or reject .

// The operations in fetch gets priority .//! Micro task queue or priority queue and it gets priority queue
