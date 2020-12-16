function check(){

  var q1 = document.quiz.q1.value;
  var q2 = document.quiz.q2.value;
  var q3 = document.quiz.q3.value;
  var q4 = document.quiz.q4.value;
  var q5 = document.quiz.q5.value;
  var q6 = document.quiz.q6.value;
  var q7 = document.quiz.q7.value;
  var q8 = document.quiz.q8.value;
  var correct = 0;

  if(q1 == "real"){
    correct++;
  }

  if(q2 == "real"){
    correct++;
  }

  if(q3 == "fake"){
    correct++;
  }

  if(q4 == "real"){
    correct++;
  }

  if(q5 == "fake"){
    correct++;
  }

  if(q6 == "real"){
    correct++;
  }

  if(q7 == "real"){
    correct++;
  }

  if(q8 == "real"){
    correct++;
  }

  var messages = ["Awesome job! You're officially a pumpkin spice connoisseur.", "You're getting there!", "Keep trying! You'll be a pumpkin spice expert in no time."];

  var range;

    if (correct > 6){
      range = 0;
    }

    if (correct > 4 && correct < 7){
      range = 1;
    }

    if (correct < 5){
      range = 2;
    }

  document.getElementById("results").style.visibility = "visible";
  document.getElementById("message").innerHTML = messages[range] + " You got " + correct + " correct.";
}
