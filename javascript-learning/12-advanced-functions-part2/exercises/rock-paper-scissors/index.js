//FIXME:Use JSON
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};
let intervalId = 0;
const autoPlayButtonElement = document.querySelector('.js-auto-play-button');

renderScoreHTML();
renderGameDetail();
addEventListenerToButtons();

function addEventListenerToButtons() {
    //add r p s a backSpace key press down listener
    document.body.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
            playGame('rock');
        } else if (event.key === 'p') {
            playGame('paper');
        } else if (event.key === 's') {
            playGame('scissors');
        } else if (event.key === 'a') {
            autoPlayByPressKey();
        } else if (event.key === 'Backspace') {
            renderHint();
        };
    })

    //add three eventListener to three buttons
    document.querySelector('.js-rock-button').addEventListener('click', () => {
        playGame('rock');
    });
    document.querySelector('.js-paper-button').addEventListener('click', () => {
        playGame('paper');
    });
    document.querySelector('.js-scissors-button').addEventListener('click', () => {
        playGame('scissors');
    });
    document.querySelector('.js-reset-button').addEventListener('click', () => {
        renderHint();
    });
    autoPlayButtonElement.addEventListener('click', () => {
        if (autoPlayButtonElement.textContent === 'Auto Play') {
            autoPlayButtonElement.textContent = 'Stop Auto Play';
            autoPlay();
        } else {
            //remove interval and change the text inside the button
            autoPlayButtonElement.textContent = 'Auto Play';
            clearInterval(intervalId);
        }
    })
}
function renderHint() {
    //show the hint
    document.querySelector('.js-reset-hint').innerHTML = `
    <p style="display: inline-block;">Are you sure you want to reset the score?</p>
        <button class="js-reset-confirm-button reset-confirm-button">Yes</button>
        <button class="js-reset-not-confirm-button reset-not-confirm-button">No</button>
    `
    //add listener to Yes and No buttons;
    document.querySelector('.js-reset-confirm-button').addEventListener('click', () => {
        console.log('true');
        score = { wins: 0, losses: 0, ties: 0 };
        localStorage.setItem('score', JSON.stringify(score));
        renderScoreHTML();
        renderGameDetail();
        document.querySelector('.js-reset-hint').innerHTML = '';
    });
    document.querySelector('.js-reset-not-confirm-button').addEventListener('click', () => {
        document.querySelector('.js-reset-hint').innerHTML = '';
    });
}
function autoPlayByPressKey() {
    if (autoPlayButtonElement.textContent === 'Auto Play') {
        autoPlayButtonElement.textContent = 'Stop Auto Play';
        autoPlay();
    } else {
        //remove interval and change the text inside the button
        autoPlayButtonElement.textContent = 'Auto Play';
        clearInterval(intervalId);
    }
}
function autoPlay() {
    intervalId = setInterval(() => {
        const playMove = pickComputerMove();
        playGame(playMove);
    }, 1000)
}
function playGame(playerMove) {
    //create the computer move;
    const computerMove = pickComputerMove();
    const result = getResult(playerMove, computerMove);
    //show result and game-tails on the page
    document.querySelector('.result').innerHTML = result;
    document.querySelector('.game-detail').innerHTML = `
    You <img src="images/${playerMove}-emoji.png"> <img src="images/${computerMove}-emoji.png"> Computer
    `
    //update the score in localStorage
    if (result === 'You win.') {
        console.log('win');
        score.wins++;
    } else if (result === 'You lose.') {
        console.log('lose');
        score.losses++;
    } else if (result === 'Tie.') {
        console.log('tie');
        score.ties++;
    }
    //FIXME:Use JSON
    localStorage.setItem('score', JSON.stringify(score));
    console.log(score);

    //show score on the page
    renderScoreHTML();
}
function renderGameDetail() {
    document.querySelector('.result').innerHTML = "Let's start!";
    document.querySelector('.game-detail').innerHTML = "Your Pick - Computer's Pick";
}
function renderScoreHTML() {
    document.querySelector('.game-score').innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}
function pickComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random();
    if (randomNumber > 0 && randomNumber <= 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber > 1 / 3 && randomNumber <= 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber > 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}
function getResult(playerMove, computerMove) {
    let result = '';

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }

    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    }
    return result;
}