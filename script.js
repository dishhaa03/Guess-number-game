let randomNumber = Math.floor(Math.random() * 100) + 1;
let previousGusses = [];
const previousValues = document.querySelector('#previous-values');
const remainingGuessCount = document.querySelector('#remaining-guess-count');
const wonGame = false;

const submitButton = document.querySelector('#submit-btn');
const userInput = document.querySelector('#user-input');
let countNoOfGuess = 0;

const goHigherButton = document.getElementById('higher-btn');
const goLowerButton = document.getElementById('lower-btn');

const RandomNumberInput = document.getElementById('random-number1');
const RandomNumberInput2 = document.getElementById('random-number2');
const sadAnimation = document.getElementById('sad-animation-container');
const happyAnimation = document.getElementById('happy-animation-container');
const gameContainer = document.getElementById('game-container');
const StartNewGameButton = document.getElementById('start-container');

// console.log(userInput.value);
StartNewGameButton.addEventListener('click', function(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    previousGusses = [];
    previousValues.innerHTML = '';
    remainingGuessCount.innerText = '10';
    countNoOfGuess = 0;
    gameContainer.parentElement.parentElement.classList.remove('hidden');
    happyAnimation.parentElement.classList.add('hidden');
    sadAnimation.parentElement.classList.add('hidden');
    StartNewGameButton.classList.add('hidden');
    disableGoHigher();
    disableGoLower();
})
submitButton.addEventListener('click', function(e) {
    console.log(userInput.value);
    console.log(randomNumber);
    
    e.preventDefault();
    let userInputValue = parseInt(userInput.value);
    if(!userInputValue || userInputValue < 1 || userInputValue > 100){
        alert('Please enter a valid number between 1 and 100');
        return;
    }
    userInput.value='';
    updatePreviousValues(userInputValue);
    countNoOfGuess++;
    updateRemainingGuessCount(countNoOfGuess);
    if(userInputValue == randomNumber){
        RandomNumberInput2.innerHTML = `${randomNumber}`;
        happyAnimation.parentElement.classList.remove('hidden');
        StartNewGameButton.classList.remove('hidden');
        gameContainer.parentElement.parentElement.classList.add('hidden');
    }
    if(userInputValue < randomNumber){
        enableGoHigher();
        disableGoLower();
    }else if(userInputValue > randomNumber){
        enableGoLower();
        disableGoHigher();
    }
})

function updatePreviousValues(userInputValue){
    previousGusses.push(userInputValue);
    previousValues.innerHTML = `${previousGusses.join(', ')}`;
}
function updateRemainingGuessCount(countNoOfGuess){
    remainingGuessCount.innerText = `${10 - countNoOfGuess}`;
    if(countNoOfGuess == 10){
        RandomNumberInput.innerText = randomNumber;
        gameContainer.parentElement.parentElement.classList.add('hidden');
        sadAnimation.parentElement.classList.remove('hidden');
        StartNewGameButton.classList.remove('hidden');
    }
}

function enableGoHigher() {
    goHigherButton.disabled = false;
    goHigherButton.classList.remove('opacity-50');
}

function disableGoHigher() {
    goHigherButton.disabled = true;
    goHigherButton.classList.add('opacity-50');
}

function enableGoLower() {
    goLowerButton.disabled = false;
    goLowerButton.classList.remove('opacity-50');
}

function disableGoLower() {
    goLowerButton.disabled = true;
    goLowerButton.classList.add('opacity-50');
}

