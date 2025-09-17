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

function showResult() {

  let score = { oily: 0, dry: 0, normal: 0, combination: 0 };

  Object.values(answers).forEach(a => score[a]++);

  let skinType = Object.keys(score).reduce((a, b) =>

    score[a] > score[b] ? a : b

  );

  window.location.href = `/skincare/sub-page/${skinType}/`;
}

