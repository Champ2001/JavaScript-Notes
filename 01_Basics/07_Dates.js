let myDate = new Date();
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())

console.log(myDate.getDate())
console.log(myDate.getMonth())//! Months in JS starts from 0 .Output is 10 for the month of November

console.log(typeof myDate); //! Date is an object inside of js

let myCreatedDate = new Date(2023, 0 , 23);
console.log(myCreatedDate.toDateString())
let myCreatedDate1 = new Date("2023-01-14"); //Specific format
console.log(myCreatedDate1.toLocaleString())

let myTimeStamp = Date.now();

console.log(myTimeStamp);//! Gives time in millisecond

console.log(myCreatedDate.getTime()); //! Gives time in millisecond .We can compare these two times for making a booking app 

//! Convert millisecond into seconds
console.log(Math.floor(Date.now()/1000))

//! toLocaleString customisations. First default is for country and then we can declare an object for further customisations ...
console.log(myDate.toLocaleString('default', {
    weekday: "long" 
}))