let myName = "hitesh     "
//Hum chate hai ki truelength karke ek method ho jo direct spaces hata ke length de de hume

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor :"hammer",
    spiderman :"sling",

    getSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`)
    }
}

//! Humne kya kiya ki ek top level heirarchy pe gaye aur bola ki object aapke andar ek nayi property banadeta hoon jo ki sab access kar sake
Object.prototype.hitesh = function() {
    console.log(`Hitesh is present in all obj`)
}

heroPower.hitesh()

Array.prototype.heyHitesh = function() {
    console.log(`Hitesh says hello`)
}

myHeros.heyHitesh()
//heroPower.heyHitesh() // Hero power ke pas heyHitesh ka access nahi hai 

//! Inheritance


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //Situation aise aayi ki do objects ko apas mai link karna hai.TeachingSupport ke saare properties borrow karlo
}

Teacher.__proto__ = User //Hum iskko bahar bhi declare kar sakte hai

//! Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) //For exaple TeachingSupport ki property hume Teacher ke andar daalna hai

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){ //! Method injection
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
//!" Jis ka matlab this ". Jisne call kiya wahi hai current context
anotherUsername.trueLength() //Yaha par this ka value hoga ChaiAurCode
"hitesh".trueLength() //Yaha par this ka value hoga hitesh
"iceTea".trueLength()  //Yaha par this ka value hoga iceTea
