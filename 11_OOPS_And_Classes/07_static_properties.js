class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

//! abb kahi baar aise situation honge jaha pe hum iss method ka access har uss object ko nahi dena chahenge jo ki iss class se instantiate hua hai .Toh uske liye "static" keyword use karo

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phhone.com")
iphone.logMe() //=> Username : iphone
console.log(iphone.createId()) //! will throw error because of static keyword