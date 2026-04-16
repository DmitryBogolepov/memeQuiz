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
    {id:1, img:'images/blured/', answer: '', correctImg: 'images/correct/'},
    {id:2, img:'images/blured/', answer: '', correctImg: 'images/correct/'},
    {id:3, img:'images/blured/', answer: '', correctImg: 'images/correct/'},
    {id:4, img:'images/blured/', answer: '', correctImg: 'images/correct/'},
    {id:5, img:'images/blured/', answer: '', correctImg: 'images/correct/'},
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


    setLocalStorageData();
    updateStats();
}

function setLocalStorageData() {

}

function getLocaleStorageData() {

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