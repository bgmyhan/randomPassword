var generateBtn = document.getElementById("generateBtn");
// Password Generator Click //
var myPassword =  generateBtn.addEventListener("click", function() {
  // Creating variables from user input //
  var reqPassLength = document.getElementById("reqPassLength");
  var reqNum = document.getElementById("reqNum");
  var reqSym = document.getElementById("reqSym");
  var reqLLetter = document.getElementById("reqLLetter");
  var reqULetter = document.getElementById("reqULetter");
  var lLetters = "abcdefghijklmnopqrstuvwxyz";
  var ULetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var syms = "!@#$%^&&*()";
  var num = "1234567890";
  var length = reqPassLength.value
  var pass = "";

  // Generating password based on user variables //

  // Generating individual symbols for password //


 // Creating Password based upon user preferences//
  var length = parseInt(reqPassLength.value);
  var lowerChar = reqLLetter.checked;
  var upperChar = reqULetter.checked;
  var symChar = reqSym.checked;
  var numChar = reqNum.checked;


  for (i=0; i<length; i++){
    if (lowerChar){
      llChar = lLetters.charAt(Math.floor(Math.random() * lLetters.length )+1)
      pass = pass.concat(llChar)
      console.log(pass)
    }
    if (upperChar){
      ulChar = ULetters.charAt(Math.floor(Math.random() * ULetters.length )+1)
      pass = pass.concat(ulChar)
      console.log(pass)
    }
    if (symChar){
      sChar = syms.charAt(Math.floor(Math.random() * syms.length )+1)
      pass = pass.concat(sChar)
      console.log(pass)
    }
    if (numChar){
      nChar = num.charAt(Math.floor(Math.random() * num.length )+1)
      pass = pass.concat(nChar)
      console.log(pass)
    }
      }

document.getElementById("password").innerText = pass;