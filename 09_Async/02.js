const sayHitesh = function() {
    console.log("Hitesh")
}

const changeText = function() {
    document.querySelector("h1").innerHTML = "Best jS"
}

//! setTimeout
const changeMe = setTimeout(changeText, 2000)

//! clearTimeout
document.querySelector('#stop').addEventListener('click', function() {
    clearTimeout(changeMe);
    console.log("Stopped")
})

//! setInterval
const sayDate = function(str) {
    console.log(str, Date.now());
}

setInterval(sayDate, 1000 , "hi")//! We can even give a third parameter str as passed in the sayDate function

//! ClearInterval

const intervalId = setInterval(sayDate, 1000, "hi")
clearInterval(intervalId)