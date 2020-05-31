// Declaring variables needed to run Password Generator //
var generateBtn = document.getElementById("generateBtn");
var myPassword =  generateBtn.addEventListener("click", function() {
  // Creating variables from user input elements//
  var reqPassLength = document.getElementById("reqPassLength");
  var reqNum = document.getElementById("reqNum").checked;
  var reqSym = document.getElementById("reqSym").checked;
  var reqLLetter = document.getElementById("reqLLetter").checked;
  var reqULetter = document.getElementById("reqULetter").checked;
  // Creating parameters for users options //
  var lLetters = "abcdefghijklmnopqrstuvwxyz";
  var ULetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var syms = "!@#$%^&&*()";
  var num = "1234567890";
  var length = reqPassLength.value
  var pass = "";
  var password = "";
  // Requesting permissions from user checked elements//
if (reqNum){
  for (i=0; i<=length; i++){
    var ranNumGen = function getRandomNum(){
      return num.charAt(Math.floor(Math.random() * num.length ));
    }
  pass += ranNumGen()
  }
}
if (reqSym){
  for (i=0; i<=length; i++){
    var getSym = function getRandomSym(){
      return syms.charAt(Math.floor(Math.random() * syms.length ));
    }
  pass += getSym()
  }
}
if (reqLLetter){
  for (i=0; i<=length; i++){
    function getRandomLLetters(){
      return lLetters.charAt(Math.floor(Math.random() * lLetters.length )+1)
    }
  pass += getRandomLLetters()
  }
}
if (reqULetter){
  for (i=0; i<=length; i++){
    function getRandomULetters(){
      return ULetters.charAt(Math.floor(Math.random() * ULetters.length )+1)
    }
  pass += getRandomULetters()
  }
}
// creating password from permissions arranged symbiotically structured aka p.a.s.s. //
for (i=0; i<length; i++){
  password += pass.charAt(Math.floor(Math.random() * pass.length ))
  }
// Printing password to password generator//
document.getElementById("password").innerText = password;
// Ending click function//
});
// Please enjoy your password built by Brandon Myhan//
// And be sure to look out, Coming this Winter: version 2 with increased security features and new user interface//