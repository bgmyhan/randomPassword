// Isolating random Letter;Symbol;Number///

// prompts for PassswordLength | UpperCaseLetters |LowerCaseLetters| Symbols//

var requestPasswordLength = generate.addEventListener("click", function(){
  prompt("Please decide how long you want your password to be using only numbers.")
}
)
var requestUpperLetters = generate.addEventListener("click", function(){
  confirm("Do You Want To Include Upper Case Letters?")
}
)
var requestLowerLetters = generate.addEventListener("click", function(){
  confirm("Do You Want To Include Lower Case Letters?")
}
)
var requestSymbols = generate.addEventListener("click", function(){confirm("Do You Want To Include Symbols?")
}
)
var requestNumbers = generate.addEventListener("click", function(){confirm("Do You Want To Include Numbers?")
}
)

const randomFunc = {
  upper: requestUpperLetters,
  lower: requestLowerLetters,
  symbol: requestSymbols,
  number: requestNumbers

 }

// generate.addEventListener("click", () => {
//   var userRequestedlength = requestPasswordLength;
//   var userRequestedLowerLetters = requestLowerLetters.true;
//   var userRequestedUpperLetters = requestUpperLetters.true;
//   var userRequestedNumbers = requestNumbers.true;
//   var userRequestedSymbols = requestSymbols.true
 

  // Generating Full Password //
  generatedPassword.innerText = generatePassword( userRequestedlength,
  userRequestedLowerLetters,
  userRequestedUpperLetters,
  userRequestedNumbers,
  userRequestedSymbols
  );
});

// Generate Password Function
function finalPassword(lower, upper, number, symbol, length) {

  let generatedPassword = "";
  const typescount = lower + upper + number + symbol;

  const fullArray = [{lower}, {upper}, {number}, {symbol}].filter (item => Objectvalues(item)[0]);

 for( i=0; i < length; i += typescount){
   fullArray.forEach(type => {
     const funcName = Object.keys(type)[0];

     generatePassword += randomFunc[funcName]();
   });

 }
  var finalPassword = generatePassword.slice(0, length);
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

