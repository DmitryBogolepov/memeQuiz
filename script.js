// Основные элементы страницы
const startBtn = document.getElementById('startBtn');
const startPage = document.getElementById('startPage');
const quizBlock = document.getElementById('quizBlock');
const memeImg = document.getElementById('memeImg');
const correctMemeImg = document.getElementById('correctMemeImg')
const memeInput = document.getElementById('memeInput');
const submitBtn = document.getElementById('submitBtn');


//Статистика
const currentQuestionEl = document.getElementById('currentQuestion');
const allQuestionsEl = document.getElementById('allQuestions');
const answersEl = document.getElementById('answer');
const correctEl = document.getElementById('correct');
const wrongEl = document.getElementById('notCorrect');

// Данные о вопросах
const quizData =  [
    {id:1, img:'images/blured/mem1blured.jpg', answer: 'почему', correctImg: 'images/correct/mem1.jpeg'},
    {id:2, img:'images/blured/meme2blured.jpg', answer: 'чугун', correctImg: 'images/correct/meme2.jpg'},
    {id:3, img:'images/blured/', answer: 'зачем', correctImg: 'images/correct/'},
    {id:4, img:'images/blured/', answer: 'писька', correctImg: 'images/correct/'},
    {id:5, img:'images/blured/', answer: 'жопа', correctImg: 'images/correct/'},
    {id:6, img:'images/blured/', answer: '', correctImg: 'images/correct/'},
    {id:7, img:'images/blured/', answer: '', correctImg: 'images/correct/'},
]

// Переменные для теста

let currentQuestionId = 1;
let questionsLength = quizData.length;
let correctAnswers = 0;
let wrongAnswers = 0;

// Основные функции
function onLoad(){

}

function startQuiz() {
    startPage.style.display = 'none'
    quizBlock.style.display = 'block';
    renderQuestionImg(currentQuestionId - 1)
    getLocaleStorageData();
    updateStats()
}

function updateStats(){
    currentQuestionEl.textContent = currentQuestionId.toString();
    allQuestionsEl.textContent = questionsLength.toString();
    answersEl.textContent = (currentQuestionId - 1).toString()
    correctEl.textContent = correctAnswers.toString();
    wrongEl.textContent = wrongAnswers.toString();
}

function nextQuestion() {
    if (currentQuestionId > quizData.length) {
        showResult();
    }



    if (memeInput.value.trim().length === 0) {
        alert('Введите мем');
        return;
    }
    if (memeInput.value.trim().toLowerCase() === quizData[currentQuestionId - 1].answer.toLowerCase()) {
        showCorrectAnswer(currentQuestionId - 1)
        correctAnswers++;
    } else {
        showCorrectAnswer(currentQuestionId - 1)
        wrongAnswers++;
    }

    setTimeout(() => {
        currentQuestionId++;
        memeInput.value = '';
        renderQuestionImg(currentQuestionId - 1);
        hideCorrectAnswer();
        setLocalStorageData();
        updateStats();
    }, 3000);


}

function renderQuestionImg(id) {
    memeImg.src = quizData[id].img;
    correctMemeImg.src = quizData[id].correctImg
}

function showCorrectAnswer() {
    memeImg.style.display = 'none'
    correctMemeImg.style.display = 'inline-block'
}

function hideCorrectAnswer() {
    memeImg.style.display = 'inline-block'
    correctMemeImg.style.display = 'none'
}

function setLocalStorageData() {

}

function getLocaleStorageData() {

}


function showResult() {

}

// Обработчики событий

startBtn.addEventListener('click', startQuiz);
startBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        startQuiz()
    }
})

submitBtn.addEventListener('click', nextQuestion);

onLoad();