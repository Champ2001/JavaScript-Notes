var c = 300 //! Use of var is prohibited as it is global scoped and gets redeclared in a function

function normal(){
    var c = 30;
    console.log(c);
}

//! CLOSURES - Example hai bare chote se ice cream cheen sakta hai lekin chota jo hai woh nahi cheen payega bade se icecream
function one(){
    const username = "hitesh"
    function two() {
        const website ="youtube"
        console.log(username);
    }
    // console.log(website);//! Cannot be accessed
    two()
}
one()


//! Important

addone(5) //! This will run fine
function addone(num){
    return num+1
}

// addTwo(5) //! This will give error bcoz of hoisting
const addTwo = function(num){
    return num+2
}
addTwo(5)