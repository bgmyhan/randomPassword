// Isolating random Letter;Symbol;Number///

// prompts for PassswordLength | UpperCaseLetters |LowerCaseLetters| Symbols//

var requestPasswordLength = generate.addEventListener(
  "click", function(){
  prompt("Please decide how long you want your password to be using only numbers.")
  })
var requestUpperLetters = generate.addEventListener("click", function(){
  confirm("Do You Want To Include Upper Case Letters?")
  })
var requestLowerLetters = generate.addEventListener("click", function(){
    confirm("Do You Want To Include Lower Case Letters?")
  })
var requestSymbols = generate.addEventListener("click", function(){
    confirm("Do You Want To Include Symbols?")
  }) 
var requestNumbers = generate.addEventListener("click", function(){
  confirm("Do You Want To Include Numbers?")
  })
var finalGenPassword = document.getElementById("password");



// Generate Password Function
   
password.innerText = finalPassword(requestPasswordLength, requestLowerLetters, requestUpperLetters, requestNumbers, requestSymbols)

;


function finalPassword(requestLowerLetters, requestUpperLetters, requestNumbers, requestSymbols, requestPasswordLength) {
  var finalGenPassword = "";
  const typesCount = requestLowerLetters + requestUpperLetters + requestNumbers + requestSymbols + requestPasswordLength;
  const fullArray = [{requestLowerLetters}, {requestUpperLetters}, {requestNumbers}, {requestSymbols}].filter (item => Object.values(item)[0]);

  // If user requested modified password//
  if(typesCount === 0) {
    return '';
  }
 for( i=0; i < length; i += typesCount){
   fullArray.forEach(type => {
     const funcName = Object.keys(type)[0];
     finalGenPassword += randomFunc[funcName]();
   });

 }
  var finalPassword = finalGenPassword.slice(0, length);
  return finalPassword
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