function checkAnswer() {
    
  let correctAnswer = "4";
  let userAnswer =  document.querySelector ('input[name="quiz"]:checked').value;
    
if (userAnswer === correctAnswer) {
  document.querySelector ('p').textContent = "Correct! Well Done.";
} else {
 document.querySelector ('p').textContent = "That's incorrect. Try again!";
}
}
 document.getElementById ("submit-answer").addEventListener("click", checkAnswer); 
