function checkAnswer() {
    
  let correctAnswer = "4";
  let userAnswer =  document.querySelector ('input[name="quiz"]:checked').value;
    
if (userAnswer === correctAnswer) {
  let feedback = document.querySelector("#feedback");
    feedback.textContent="Correct! Well Done.";
} else {
 document.querySelector("#feedback").textContent="That's incorrect. Try again!";
}
}
 document.getElementById("submit-answer").addEventListener("click", checkAnswer); 
