//select elements needed
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
//pick out all the possible choices (the buttons)
const possibleChoices = document.querySelectorAll('button');
//grab each button and for each possible choice , listen for a click and pass through function

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice= e.target.id;//and save each event as the user choice globally
    userChoiceDisplay.innerHTML = userChoice; //assign the property of the HTML and assign to user choice
    generateComputerChoice();
    getResult();
}))//show for user

function generateComputerChoice(){//use random function to select a random number from 1-3 
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)+1 //returns 3 because three button 0-2 but 1-3 with +1 for readability
    //console.log(randomNumber)
    if (randomNumber === 1){
        computerChoice ='Rock';
    }
    if (randomNumber === 2){
        computerChoice ='Scissors';
    }
    if (randomNumber === 3){
        computerChoice = "Paper";
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice){
        result = 'Its a tie!'; 
    }
    if (computerChoice === 'Rock' && userChoice == "Paper"){
        result = 'You Win!'; 
    }
    if (computerChoice === 'Rock' && userChoice == "Scissors"){
        result = 'You Lose'; 
    }
    if (computerChoice === 'Paper' && userChoice == "Rock"){
        result = 'You Lose!'; 
    }
    if (computerChoice === 'Paper' && userChoice == "Scissors"){
        result = 'You Win'; 
    }
    if (computerChoice === 'Scissors' && userChoice == "Rock"){
        result = 'You Win!'; 
    }
    if (computerChoice === 'Scissors' && userChoice == "Paper"){
        result = 'You Lose'; 
    }
    resultDisplay.innerHTML = result;
}