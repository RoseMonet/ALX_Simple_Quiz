function checkAnswer() {
    
  let correctAnswer = "4";
  let userAnswer =  document.querySelector (name="quiz").value;
  let feedback = document.getElementById("feedback");
if (userAnswer === correctAnswer) {
  feedback.textContent = "Correct! Well Done.";
} else {
  feedback.textContent = "That's incorrect. Try again!";
}
}
 document.getElementById ("submit-answer").addEventListener("click", checkAnswer); 