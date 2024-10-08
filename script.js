 const questions = [
    {
        question: "¿Cuál es mi color favorito?",
        answers: [
            { text: "Rosa", correct: false},
            { text: "Azul", correct: true},
            { text: "Verde", correct: false},
            { text: "Amarillo", correct: false},


        ]
    },
    {
        question: "Cuál sería el destino perfecto para pasar mis vacaciones? (Muy fácil)",
        answers: [
            { text: "Bosque", correct: false},
            { text: "Quedarme en mi casa", correct: false},
            { text: "Playa", correct: true},
            { text: "Aventura", correct: false},

        ]

    },
    {
        question: "Cosas que me gustan muchoooo",
        answers: [
            { text: "Correr, ver películas, aprender cosas nuevas", correct: false},
            { text: "Hacer ejercicio, Boba tea, vivir experiencias nuevas, tu", correct: false},
            { text: "Correr, planear muy bien todo, puntualidad, cocinar postres, (y tu) ", correct: true},
            { text: "Dormir, leer, comprarrr cosasjeje", correct: false},

        ] 
    },
    {
        question: "Mi lenguaje del amor esss... (en orden jeje) ",
        answers: [
            { text: "Palabras de afirmación, tiempo de calidad, contacto físico", correct: false},
            { text: "Actos de servicio, regalos, palabras de afirmación", correct: false},
            { text: "Tiempo de calidad, palabras de afirmación, actos de servicio ", correct: true},
            { text: "Contacto físico, regalos, palabras de afirmación", correct: false},

        ] 
    },

    {
        question: "No se que más preguntarxd, algo que diria cuando no se que decir ",
        answers: [
            { text: "Que haces", correct: false},
            { text: "Te amo", correct: true},
            { text: "Tengo hambre ", correct: false},
            { text: "menino", correct: false},

        ] 
    }


 ];

 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");

 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Siguiente";
    showQuestion();
 }

 function showQuestion(){
    answerButtons.innerHTML=""

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo =currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",selectAnswer);    


 });
}

function selectAnswer(e){
    const selectedBtn =e.target; 
    const isCorrect = selectedBtn.dataset.correct ==="true"
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display ="block";
}


function showScore(){

    let message;
    if (score >1 && score<=4){
        message="no me conoces bienn menino :("
    } else if (score===5){
        message = "menino si ama a seu menina <3"
    } else{ 
        message ="Puntuación no válida"
    }

    questionElement.innerHTML =  `Acertaste ${score} de ${questions.length} preguntas!<br>${message}`;
    answerButtons.innerHTML ="";
    nextButton.innerHTML = "Intentalo de nuevo";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }

}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
});


startQuiz();
