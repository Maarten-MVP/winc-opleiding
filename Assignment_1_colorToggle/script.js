let hamburgerMenu = document.querySelector('.menu-toggle');
let nav = document.querySelector('.nav');

let homeButton = document.querySelector('.link-home');
let redButton = document.querySelector('.link-red');
let orangeButton = document.querySelector('.link-orange');
let purpleButton = document.querySelector('.link-purple');
let greenButton = document.querySelector('.link-green');

let bodyElement = document.body;

hamburgerMenu.addEventListener('click', function (e) {
    hamburgerMenu.classList.toggle('active');
    nav.classList.toggle('active');
    console.log(e)
});

homeButton.addEventListener('click', function () {
    bodyElement.style.backgroundColor = "lightgray";
    hamburgerMenu.classList.remove('active')
    nav.classList.remove('active')
});

redButton.addEventListener('click', function () {
    bodyElement.style.backgroundColor = "Red";
    hamburgerMenu.classList.remove('active')
    nav.classList.remove('active')
});

orangeButton.addEventListener('click', function () {
    bodyElement.style.backgroundColor = "orange";
    hamburgerMenu.classList.remove('active')
    nav.classList.remove('active')
});

purpleButton.addEventListener('click', function () {
    bodyElement.style.backgroundColor = "purple";
    hamburgerMenu.classList.remove('active')
    nav.classList.remove('active')
});

greenButton.addEventListener('click', function () {
    bodyElement.style.backgroundColor = "green";
    hamburgerMenu.classList.remove('active')
    nav.classList.remove('active')
});

window.addEventListener('keydown', function(event) {

    switch(event.code) {
        case "Digit1": bodyElement.style.backgroundColor = "lightgray";
        break;
        case "Digit2": bodyElement.style.backgroundColor = "red";
        break;
        case "Digit3": bodyElement.style.backgroundColor = "orange";
        break;
        case "Digit4": bodyElement.style.backgroundColor = "purple";
        break;
        case "Digit5": bodyElement.style.backgroundColor = "green";
        break;
    }

});


