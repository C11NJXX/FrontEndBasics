//FIXME:Use JSON
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

let intervalId = 0;

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
    });
    document.querySelector('.js-reset-not-confirm-button').addEventListener('click', () => {
        document.querySelector('.js-reset-hint').innerHTML = '';

    });

});

const autoPlayButtonElement = document.querySelector('.js-auto-play-button');

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