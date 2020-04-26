// // Isolating random Letter;Symbol;Number///

// // prompts for PassswordLength | UpperCaseLetters |LowerCaseLetters| Symbols//


    var requestPassword = generate.addEventListener("click", function (){
    // Generated User Prompts//
      var requestPasswordLength = prompt("Please decide how long you want your password to be using only numbers.");
    var requestUpperLetters = confirm("Do You Want To Include Upper Case Letters?");
    var requestLowerLetters = confirm("Do You Want To Include Lower Case Letters?");
    var requestSymbols = confirm("Do You Want To Include Symbols?");
    var requestNumbers = confirm("Do You Want To Include Numbers?");
    var generateButton = document.getElementById("#generate");
    var generateSecurePassword = document.getElementById("password");
   
    // Deciding What to include in Password//

  
      if (requestPasswordLength > 0){
        var generatePassword = " ";
        for  (i = 0; i <= requestPasswordLength; i++){
          if(requestUpperLetters){
            generateSecurePassword.innerText += randomUpperLetters;
           console.log(typeof requestUpperLetters[i])
           
          }
          else generateSecurePassword.innerText = generatePassword
        }
      }
      else (alert("User Error. Please input a number greater than 0 for password length"))
      ;
          
    //
    //    
    //       if (requestUpperLetters) {generateSecurePassword.innerText = generatePassword + randomUpperLetters};  
    //       else {generateSecurePassword.innerText = generateSecurePassword;
    //     }
    //     else {};
    //  };
        

      // generatedPassword = " ";
      // possiblePassword = [{requestUpperLetters}, {requestLowerLetters}, {requestSymbols}, {requestNumbers}]

      // if 


    // if (requestPasswordLength > 0) {
    //   
    //     .forEach = finalPassword.keys;
    //   var generatedPassword = generatedPassword + finalPassword()[userOptions]();

    //   var SecurePassword = generatedPassword.slice(0, length);
    
    // else (return null)
    
 
    // Random Password Maker //
    var possibleUpperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var possibleLowerLetters = "abcdefghijklmnopqrstuvwxyz"
    var possibleSymbols = "!@#$%^&*()/";
    var possibleNumbers = "0123456789"; 

    var randomNumbers = possibleNumbers[Math.floor(Math.random()*10)];
    var randomSymbols = possibleSymbols[Math.floor(Math.random()*10)];
    var randomUpperLetters = possibleUpperLetters[Math.floor(Math.random()*10)];
    var randomLowerLetters = possibleLowerLetters[Math.floor(Math.random()*10)];




});

    //   for ( i = 0; i <= requestPasswordLength.length; i++){
//     .forEach = finalPassword.keys;
//   var generatedPassword = generatedPassword + finalPassword()[userOptions]();

//   var SecurePassword = generatedPassword.slice(0, length);
//     var password = new Array(requestPasswordLength + 1).join( character );
    
    
//     i = random symbols;
    
//     for (randomPassword i = 0; i<requestPasswordLength.length; i++) {

//     }

//     // finalPassword (userConflength, userConfUpper, userConfLower, userConfSymbols, userConfNumbers);

//     //  var userConflength = +requestPasswordLength;
//     //  var userConfUpper = requestUpperLetters.true;
//     //  var userConfLower = requestLowerLetters.true;
//     //  var userConfSymbols = requestSymbols.true;
//     //  var userConfNumbers = requestNumbers.true;
// });


// // Generate Password Function

//   // function finalPassword(userConflength, userConfUpper, userConfLower, userConfSymbols, userConfNumbers){
 

//   // var userOptions = [{userConflength}, {userConfUpper}, {userConfLower}, {userConfSymbols}, {userConfNumbers}].filter;

//   generatedPassword = "";



// };



