var readline = require("readline-sync");

var score = 0;

function checkAnswer(question, answer)
{
  var userAnswer = readline.question(question);
  if(userAnswer.toUpperCase() === answer)
  {
    score++;
    console.log("You are right!");
  }
  else
  {
    if(score <= 0)
    {
      score = 0;
    }
    else 
    {
      score--;
    }
    console.log("You are wrong");
  }
}

var questions = [
  {
    question: "What is my name? ",
    answer: "SHUBHAM SINGH"
  },
  {
    question: "Where do I study? ",
    answer: "MAHARAJA SURAJMAL INSTITUTE"
  },
  {
    question: "Do I like Rasgulla? ",
    answer: "YES"
  }
];


for (var i = 0, l = questions.length; i < l; i++)
{
  checkAnswer(questions[i].question, questions[i].answer);
  console.log("---------------------------------------------\n");
}

console.log("Your score is: " + score);