document.addEventListener('DOMContentLoaded', () => {
    
    const questions = document.querySelectorAll(".question");
    const resultDiv = document.getElementById("result");
    const getProductBtn = document.getElementById("getProductBtn");

    let answers = {};
    
    let currentQuestionIndex = 0; 
    
    function showQuestion(index) {
        questions.forEach((q, i) => {
            q.classList.remove('active'); 
            if (i === index) {
                q.classList.add('active'); 
                
                const questionName = q.dataset.question;
                const nextBtn = q.querySelector('.next-btn');
                
                if (nextBtn) {
                    nextBtn.disabled = !answers[questionName]; 
                }
            }
        });
    }

    function showResult() {
        let score = { oily: 0, dry: 0, normal: 0, combination: 0 };

        Object.values(answers).forEach(a => score[a]++);

        let skinType = Object.keys(score).reduce((a, b) =>
            score[a] > score[b] ? a : b
        );
        
        questions.forEach(q => q.classList.remove("active"));
        
        resultDiv.innerHTML = `
            <h2>✅ Your Skin Type: <strong>${skinType.toUpperCase()}</strong></h2>
            <p>Ready for your personalized product recommendations?</p>
        `;
        
        getProductBtn.style.display = 'block';

       
        getProductBtn.onclick = () => {
            window.location.href = `/skincare/sub-page/${skinType}/`;
        };
        
        
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    }
    
    function handleOptionChange(event) {
        const optionInput = event.target;
        const currentQuestion = optionInput.closest('.question');
        const questionName = currentQuestion.dataset.question; 
        const nextBtn = currentQuestion.querySelector('.next-btn');
        
        answers[questionName] = optionInput.value;
        
        if (nextBtn) {
            nextBtn.disabled = false;
        }
        
        if (currentQuestion.dataset.question === questions[questions.length - 1].dataset.question) {
            showResult();
        }
    }

    function handleNextClick() {
        currentQuestionIndex++; 
        showQuestion(currentQuestionIndex); 
    }


    questions.forEach((question) => {
        const radioInputs = question.querySelectorAll('input[type="radio"]');
        radioInputs.forEach(input => {
            input.addEventListener('change', handleOptionChange);
        });
        
        const nextBtn = question.querySelector('.next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', handleNextClick);
        }
    });

    showQuestion(currentQuestionIndex); 
});