//! Global Execution Context (this){}
//! Function Execution Context
//! Eval Execution Context

//{} =>1.Memory creation phase 2.Execution Phase 
let val1 = 10 
let val2 = 5
function addNum(num1, num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10,2)

/*
1.Global execution is created and is allocated inside this
2.Memory phase - all the variables are created and then stored and initially given value as undefined
    val1-> undefined
    val2-> undefined
    addNum->defination
    result1->undefined
    result2->undefined
3.Execution Phase 
    val1 ->10
    val2 ->5
    addNum then makes new Execution Context inside which a new variable environment and execution thread is created

    //! Inside the function a new memory phase is created and also an execution context and after the job is done it is deleted
    
    Now the totalvalue is return in the global execution phase
*/

//! Call Stack
