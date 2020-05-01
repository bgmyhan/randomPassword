var generateBtn = document.getElementById("generateBtn");
  myPassword =  generateBtn.addEventListener("click", function() {
  var reqLength = prompt("How many Characters do you want to display?");
  var reqNum = confirm("Would you like your password to include Numbers?");
  var reqSym = confirm("Would you like your password to include Symbols?");
  var reqLLetter = confirm("Would you like your password to include Letters?");
  
// if( they're all true)
// genPassword = (reqNum  + reqSym + randLL) * reqLength;
LLetters = "abcdefghijklmnopqrstuvwxyz";
syms = "!@#$%^&&*(()))";
num = "1234567890";
pass = '';



  for (i = 0; i <= reqLength; i++){
   genPass = LLetters.charAt(Math.floor(Math.random() * reqLength));
   pass += genPass;
  document.getElementById("password").innerText = pass;
    }

  
  
  });