// Isolating random Letter;Symbol;Number///

// prompts for PassswordLength | UpperCaseLetters |LowerCaseLetters| Symbols//

var requestPasswordLength = generate.addEventListener(
  "click", function(){
  prompt(
    "Please decide how long you want your password to be using only numbers."
    )
  }
)
var requestUpperLetters = generate.addEventListener(
  "click", function(){
    confirm(
    "Do You Want To Include Upper Case Letters?"
    )
  }
)
var requestLowerLetters = generate.addEventListener(
  "click", function(){
    confirm(
    "Do You Want To Include Lower Case Letters?"
    )
  }
)
var requestSymbols = generate.addEventListener(
  "click", function(){
    confirm(
    "Do You Want To Include Symbols?"
    )
  }
) 
var requestNumbers = generate.addEventListener(
  "click", function(){
    confirm(
    "Do You Want To Include Numbers?"
    )
  }
)
var finalPassword = document.getElementById("password");

const randomFunc = {
  upper: requestUpperLetters,
  lower: requestLowerLetters,
  symbol: requestSymbols,
  number: requestNumbers,
 }
 
// Generate Password Function
    var generatedPassword = "";
    password.innerText = (generatedPassword +
    [requestPasswordLength,
    requestLowerLetters,
    requestUpperLetters,
    requestNumbers,
    requestSymbols]
  );


function finalPassword(lower, upper, number, symbol, length) {

  
  const typescount = lower + upper + number + symbol;

  const fullArray = [{lower}, {upper}, {number}, {symbol}].filter (item => Objectvalues(item)[0]);

 for( i=0; i < length; i += typescount){
   fullArray.forEach(type => {
     const funcName = Object.keys(type)[0];

     finalPassword += randomFunc[funcName]();
   });

 }
  var finalPassword = finalPassword.slice(0, length);
}


var possibleUpperLetters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var possibleLowerLetters =
"abcdefghijklmnopqrstuvwxyz"
var possibleSymbols =
"!@#$%^&*()/";
var possibleNumbers =
"0123456789";

var randomNumbers = possibleNumbers[Math.floor(Math.random()*10)];
var randomSymbols = possibleSymbols[Math.floor(Math.random()*10)];
var randomUpperLetters = possibleUpperLetters[Math.floor(Math.random()*10)];
var randomLowerLetters = possibleLowerLetters[Math.floor(Math.random()*10)];

console.log(finalPassword)