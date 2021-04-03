console.log("JS loaded")
const questions = document.querySelectorAll(".question"); 
const questionContainer = document.querySelectorAll(".question-container");


questions.forEach(question => {
  question.addEventListener("click", () => {
    let questionIcon = question.nextElementSibling; 
    let answer = questionIcon.nextElementSibling; 
    
   

    answer.classList.toggle("active");
    questionIcon.classList.toggle("active"); 
  }); 
}); 