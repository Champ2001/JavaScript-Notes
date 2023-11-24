//! Immediately Invoked Function Expressions(IIFE) - Mudde ki baat yahi hai ki jab bhi humne function likha use turant execute ho jana chahiye .Promblem hai ki hum chate hai ki global scope ke variables ka jo pollution hai waha se at least cheeze pollute na ho uss particular funtion ke liye

(function chai(){ //! This is named IIFE chai
    console.log(`Db Connected`)
})(); //! IIFE - The function invoke toh ho gaya lekin usko pata nahi ki context rokna kaha hai ..Isiliye semicolon ";" bohot zaruri ho jata hai

//Now we can run below codes 
( () =>{ //! Un-named IIFE
    console.log(`DB connected Two`)
} )();

//! If we want to pass an argument 
( (name) =>{ 
    console.log(`DB connected Two ${name}`)
} )('sarnava');


