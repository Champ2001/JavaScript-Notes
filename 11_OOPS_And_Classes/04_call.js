function SetUsername(username) {
    //complex DB calls
    this.username = username
}

function createUser(username, email, password){
    // SetUsername(username)
    SetUsername.call(this, username) //Niche wale issue se bachne ke liye .call use karna par raha hai . this likhne ka matlab hai ki mai mera this nahi istemal karunga .mai apka this istemal karunga

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai) //! yaha par username to le hi nahi raha hai .Bas print kar raha hai => createUser { email: 'chai@fb.com', password: '123' } 