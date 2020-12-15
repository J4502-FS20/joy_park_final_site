"use strict";

var radios = document.getElementsByTagName('input');

var correctAnswers = ["real", "real", "fake", "real", "fake", "real", "real", "real"];

var numberOfCorrectAnswers;

var submitButton = document.getElementById("submit");

var answerElement = document.getElementById("answerTally");

submitButton.addEventListener('click', function() {

  console.clear();

  numberOfCorrectAnswers = 0;
  for (var i = 0; i < radios.length; i++) {
      if (radios[i].type === 'radio' && radios[i].checked) {
          // get value, set checked flag or do whatever you need to
          if (correctAnswers.indexOf(radios[i].value) > - 1) {
            console.log(radios[i].value + " is correct");
            numberOfCorrectAnswers += 1;
          }
      }
  }
  console.log(this);
  answerElement.innerHTML = "You got <span>" + numberOfCorrectAnswers + "</span> correct!";

});

// for (var i = 0; i < radios.length; i++) {
//   radios[i].addEventListener('change', function() {
//     this.parentElement.style.background = "red";
//     console.log("A radio button has been selected!");
//   });
// }

function mySquare(x){
  return x*x;
}

function divide(x,y){
  return x/y;
}

function checkRadios(){
  console.log(radios.length);
}

checkRadios();
