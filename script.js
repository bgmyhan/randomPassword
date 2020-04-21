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
  var generatePassword = document.getElementById("password");



  // Event Listener for Password//
  generatePassword.addEventListener('click',()=>{

    var userConflength = +requestPasswordLength.value;
    var userConfUpper = requestUpperLetters.true;
    var userConfLower = requestLowerLetters.true;
    var userConfSymbols = requestSymbols.true;
    var userConfNumbers = requestNumbers.true;
    
    generatePassword.innertext = finalPassword (userConflength, userConfUpper, userConfLower, userConfSymbols, userConfNumbers);

  });


// Generate Password Function

  function finalPassword(userConflength, userConfUpper, userConfLower, userConfSymbols, userConfNumbers){
  
  generatedPassword = "";

  userOptions = [{userConflength}, {userConfUpper}, {userConfLower}, {userConfSymbols}, {userConfNumbers}].filter

  for ( i = 0; i < userConfLength; i+= userOptions){
  userOptions.forEach = object.keys(type)(0);
  var generatedPassword = generatedPassword + finalPassword[userOptions]();
  var finalGenPassword = generatedPassword.slice(0, length);
}
return finalGenPassword;

};
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

