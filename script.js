console.log('Console log:');

// Primitive datatyper:
// sting "Setning"
// number 100
// boolean true/false

// variabler

//let age = 35;

// = `${age}, ${race}!`;
// (age + ' ' + race + !);

// Regular Functions / Functions

function greeting() {
    console.log ("Dette er en funksjon");

    const race = "Human";
    const greet = "Welcome";

    console.log (greet + ' ' + race);
}

greeting();

// DOMM (Document Object Model Manipulation)

// lagringsplass = lagrings innhold

const greetingbutton = document.querySelector("#greetingbutton");

greetingbutton.addEventListener("click", greeting)

const darkmode = document.querySelector("#darkmodebutton")

