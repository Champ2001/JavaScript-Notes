const marvel_heros = ["thor", "Ironman", "spiderman"]
const marvel_heros2 = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros) //!Creates an array inside array [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros)

console.log(marvel_heros[3]) //=>[ 'superman', 'flash', 'batman' ]
console.log(marvel_heros[3][1])//=>For further accessing of the array inside array which is not a good syntax

//!Concat - Does not create an array inside array
const all_heros = marvel_heros2.concat(dc_heros);
console.log(all_heros);

//! SPREAD OPERATOR - ek glass tha jo gir gaya to tukre gir gaye (spread ho gaye) 

const all_new_heros = [...marvel_heros2, ...dc_heros]
console.log(all_new_heros)

const another_array = [1,2, 3, [4,5,6], 7, [6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity);//! If we are having an array where there is array inside another array and we want a new array then we use flat and it also requires depth upto which we should solve this.We can give infinity value also 
console.log(real_another_array)

//! Data scraping conversion to different arrays 
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))

console.log(Array.from({name:"hitesh"})) //! Intersting case for interviews as we need to specify that we need to covert the key or value .Otherwise it will return an empty array []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //! Converts all these values in the form of an array [ 100, 200, 300 ]