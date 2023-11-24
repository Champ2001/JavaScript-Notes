class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){ //getter aur setter banane ka basic syntax hai ki jo property ka naam hai hume wahi exact lena parta hai 
        return this._email.toUpperCase()
    }

    set email(value){
         this._email = value
    }

    get password(){
        return `${this._password}hitesh`; //Yaha pe ho raha hai ki value jab koi maang raha toh yeh value ja raha hai ..BUt actually store value set wala hi ho raha hai
    }
    set password(value){
        //this.password = value //! agar hum pehle bhi this.password kar rahe hai aur abhi bhi kar rahe hai toh error aata hai => Maximum call stack size exceeded .Issue hai ki constructor bhi values ko get karne ki koshish kar raha hai aur set password bhi .

        //Isi issue ko solve karne ke liye hum _password ka istemal karta hai

        this._password = value
    }
}



//! bohot saare aise cases hote hai jaha pe appne ek class banayi jiska access app sabko nahi dena chate , ya fir customise karke dena chate hai 

const hitesh = new User("h@hitesh.ai", "123")
console.log(hitesh.password)