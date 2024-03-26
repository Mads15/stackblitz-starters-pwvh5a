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

greetingbutton.addEventListener("click", greeting);

// DOMM (Document Object Model Manipulation)

// lagringsplass = lagrings innhold

    //hent
const darkmodebutton = document.querySelector("#darkmodebutton");
    //modifiser
function darkmode() {
    //hent
    const body = document.querySelector("body");
    //modifiser
    body.classList.toggle("dark");
}

darkmodebutton.addEventListener("click", darkmode)
