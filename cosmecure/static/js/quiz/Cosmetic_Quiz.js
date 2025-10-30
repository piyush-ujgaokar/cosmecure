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


function showQuestion(index) {
    if (index >= questions.length || index < 0) return; 

    questions.forEach(q => q.classList.remove("active"));
    questions[index].classList.add("active");
    
    const qName = questions[index].dataset.question;
    const nextBtn = questions[index].querySelector('.next-btn');
    
    if (nextBtn) {
        nextBtn.disabled = !answers[qName]; 
    }
}

function restartQuiz() {
    answers = {};
    currentQuestionIndex = 0;
    
    questions.forEach(q => {
        q.querySelectorAll("input[type=radio]").forEach(radio => radio.checked = false);
        
        const nextBtn = q.querySelector('.next-btn');
        if (nextBtn) nextBtn.disabled = true;
    });

    resultContainer.classList.remove("active");
    resultContainer.classList.add("hidden");
    
    if (questions.length > 0) {
        showQuestion(0);
    }
}

function showResult() {
    questions.forEach(q => q.classList.remove("active"));
    resultContainer.classList.remove("hidden");
    resultContainer.classList.add("active");

    let styleScores = { 'GLAM': 0, 'LUMINOUS': 0, 'NATURAL': 0 };

    const allAnswers = Object.values(answers);

    allAnswers.forEach(answer => {
        if (['matte', 'smoky', 'lipstick'].includes(answer)) {
            styleScores['GLAM']++;
        } else if (['dewy', 'glittery', 'gloss'].includes(answer)) {
            styleScores['LUMINOUS']++;
        } else if (['natural', 'natural-eye', 'balm'].includes(answer)) {
            styleScores['NATURAL']++;
        }
    });

    
    let finalStyleWord = 'BALANCED'; 
    let maxScore = -1;

    const scoresArray = Object.entries(styleScores);
    
    scoresArray.forEach(([, score]) => {
        if (score > maxScore) {
            maxScore = score;
        }
    });
    
    const winningStyles = scoresArray.filter(([, score]) => score === maxScore);

    if (winningStyles.length === 1 && maxScore > 0) {
        finalStyleWord = winningStyles[0][0]; 
    } else if (winningStyles.length > 1) {
        finalStyleWord = 'BLENDED'; 
    } else {
        finalStyleWord = 'CLASSIC'; 
    }
    
    finalStyleWord = finalStyleWord.charAt(0).toUpperCase() + finalStyleWord.slice(1).toLowerCase();

    resultMessage.innerHTML = `Your makeup style is **${finalStyleWord}**!`;
}



questions.forEach(q => {
    const questionName = q.dataset.question;
    const nextBtn = q.querySelector('.next-btn');

    const options = q.querySelectorAll("input[type=radio]");
    options.forEach(option => {
        option.addEventListener("change", () => {
            answers[questionName] = option.value;
            
            if (nextBtn) {
                nextBtn.disabled = false;
            }
        });
    });
    
   
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            
            if (!answers[questionName]) return; 
            
            currentQuestionIndex++;
            
            if (currentQuestionIndex < questions.length) {
               
                showQuestion(currentQuestionIndex);
            } else {
                
                showResult();
            }
        });
    }
});


if (restartButton) {
    restartButton.addEventListener("click", restartQuiz);
}


document.addEventListener('DOMContentLoaded', () => {
    if (questions.length > 0) {
        
        questions.forEach(q => {
            const nextBtn = q.querySelector('.next-btn');
            if (nextBtn) nextBtn.disabled = true;
        });
        showQuestion(0);
    }
});