function sayMyName(){
    console.log("S")
}
sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3,5);

// console.log("Result : " , result); //!Undefined as no return type form the function

function addTwoNumbers(number1, number2){
    // let result = number1+number2;
    // return result;
    return number1 + number2
}

const result = addTwoNumbers(3,5);

console.log("Result : " , result); //! Result :  8

function loginUserMessage(username = "sam") { //! If we want that the state of undefined is never encountered then we can assign default values for the user 
    if(username === undefined){//can also be written as (!username)
        console.log("Please enter a username")
        return // If this return is reached then further will not be executed
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("sarnava"));
console.log(loginUserMessage()); //! If we are no passing anything in the argument then it is taken as undefined


//! REST Operator
function calculateCartPrice(val1,val2,...num1){
    return num1;
}

console.log(calculateCartPrice(200,400,500,2000))

const user ={
    username:"hitesh",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
//Not mandatory to make the user object first then use it .We can also specify the values in the brackets 

handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,5000,1000]))