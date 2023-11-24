class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){

        super(username) //! Yeh super keyword refer karega ki bhaisab konse class ko extend kar rahe ho , aur sidha waha ke constructor mai jake automatically this set kar dunga aur app directly access le paoge

        this.email = email
        this.password = password

    }
    addCourse(){
        console.log(`A course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")
chai.addCourse()

const masalaChai = new User("masalaChai")
// masalaChai.addCourse() //! This will throw error because masala chai does not have access of addCourse

masalaChai.logMe()
chai.logMe() //! chai has access to logMe as it is being inherited

console.log(chai === masalaChai) // => false
console.log(chai instanceof Teacher) //> true
console.log(chai instanceof User) //> true
