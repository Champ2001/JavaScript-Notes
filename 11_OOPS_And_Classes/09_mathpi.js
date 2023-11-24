
console.log(Math.PI)
Math.PI = 5 // not overwritable

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI") //! konse key ke upar value chahiye

console.log(descriptor) //=>{
                        //     value: 3.141592653589793,
                        //     writable: false,
                        //     enumerable: false,
                        //     configurable: false
                        // }

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable : true,

    orderChai : function() {
        console.log("chai nahi bani")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"))
    //   {
    //     value: 'ginger chai',
    //     writable: true,
    //     enumerable: true,
    //     configurable: true
    //   }
    
    Object.defineProperty(chai, 'name', {
        writable: false,
        enumerable : true //agar false karde toh name property mai hum iterate nahi kar payenge
    })
    console.log(Object.getOwnPropertyDescriptor(chai, "name"))
    // {
    //     value: 'ginger chai',
    //     writable: false,
    //     enumerable: false,
    //     configurable: true
    //   }

//for(let [key, value] of chai){ //! chai is not iterable so not possible .We have to use Object.entries
//     console.log(`${key} : ${value}`)
// }

for(let [key, value] of Object.entries(chai)){ 

    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}

//! Agar (typeof value !== 'function') nahi check karte toh yeh output aayega 
    // price : 250
    // isAvailable : true
    // orderChai : function() {
    //         console.log("chai nahi bani")
    //     }
