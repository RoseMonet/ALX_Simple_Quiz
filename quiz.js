function checkAnswer() {
    
  let correctAnswer = "4";
  let userAnswer =  document.querySelector ('input[name="quiz"]:checked').value;
    
  let feedback = document.querySelector ('p');
if (userAnswer === correctAnswer) {
  feedback.textContent = "Correct! Well Done.";
} else {
  feedback.textContent = "That's incorrect. Try again!";
}
}
 document.getElementById ("submit-answer").addEventListener("click", checkAnswer); 
