const buttons = document.querySelectorAll('.buttons')
const body = document.querySelector('body')

buttons.forEach(function(button) {
    button.addEventListner('click', function(e){
        if(e.target.id === 'grey'){
            e.style.backgroundColor = e.target.id
        }
    });
});

const form = document.querySelector('form')
//!This usecase will give you empty value
//const height = parseInt(document.querySelector('#height').value) So we should write it inside the function

form.addEventListener('submit' , function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value);

    if(height ==='' || height < 0 || isNaN(height)){
        result.innerHTML = `please give a valid height ${height}`
    }
    else{
        result.innerHTML = `<span>${bmi}</span>`
    }
})

const clock = document.getElementById('clock');

setInterval(function() {
    clock.innerHTML = date.toLocaleTimeString();
},1000);

//! PROJECT 4
let randomNumber = parseInt(Math.random()*100);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener('click' ,function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)) {
        alert('Please enter a valid number')
    } else if(guess < 1) {
        alert('Please enter a number more than 1')
    } else if(guess > 100) {
        alert('Please enter a number less than 100');
    } else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame();
    }
    else if(guess < randomNumber) {
        displayMessage(`Number is Too low`)
    }
}