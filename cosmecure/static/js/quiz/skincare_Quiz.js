const questions = document.querySelectorAll(".question");
let answers = {};
questions.forEach((q, index) => {
  const options = q.querySelectorAll("input[type=radio]");
  options.forEach(option => {
    
    option.addEventListener("change", () => {

      answers[q.dataset.question] = option.value;

      questions[index].classList.remove("active");

      if (index + 1 < questions.length) {

        questions[index + 1].classList.add("active");

      } else {

        showResult();

      }

    });

  });

});
