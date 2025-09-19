const products = {
    dewy: "Glowy Primer, Liquid Highlighter, and a Dewy Foundation.",
    matte: "Matte Setting Spray, Matte Foundation, and a Clay Primer.",
    natural: "Tinted Moisturizer, Cream Blush, and a Clear Brow Gel.",
    smoky: "Smoky Eyeshadow Palette, and a Bold Mascara.",
    glittery: "Loose Glitter, Glitter Glue, and a Shimmer Spray.",
    "natural-eye": "Neutral Eyeshadow Palette, and a Brown Mascara.",
    lipstick: "Long-Wear Lipstick, and a Matching Lip Liner.",
    gloss: "High-Shine Lip Gloss, and a Plumping Lip Oil.",
    balm: "Tinted Lip Balm, and a Hydrating Lip Mask."
};

const questions = document.querySelectorAll(".question");
const resultContainer = document.getElementById("result-container");
const resultMessage = document.getElementById("result-message");
const productRecommendation = document.getElementById("product-recommendation");
const restartButton = document.getElementById("restart-button");

let answers = {};
let currentQuestionIndex = 0;

// Function to show a specific question
function showQuestion(index) {
    questions.forEach(q => q.classList.remove("active"));
    questions[index].classList.add("active");
}

// Function to calculate and show the result
function showResult() {
    // Hide questions and show the result container
    questions.forEach(q => q.classList.remove("active"));
    resultContainer.classList.remove("hidden");

    // Tally the scores for each category
    let score = {};
    Object.values(answers).forEach(answer => {
        score[answer] = (score[answer] || 0) + 1;
    });

    // Find the category with the highest score
    let finalCategory = Object.keys(score).reduce((a, b) => (score[a] > score[b] ? a : b));

  }

// Event listener for each question's options
questions.forEach(q => {
    const options = q.querySelectorAll("input[type=radio]");
    options.forEach(option => {
        option.addEventListener("change", () => {
            // Store the selected answer
            answers[q.dataset.question] = option.value;
            
            // Move to the next question or show results if it's the last one
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion(currentQuestionIndex);
            } else {
                showResult();
            }
        });
    });
});
