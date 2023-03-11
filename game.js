let computerGameScore = 0;
let playerGameScore = 0;
let gameMoves = ["rock","paper","scissors"];

let computerPlay =  () =>  gameMoves[Math.floor((Math.random()*gameMoves.length))];

let playerSelection = function() {
    let playerMoveInput = '';
    while (true) {
        playerMoveInput = prompt("Enter your move: ");
        playerMoveInput.trim();
        if (gameMoves.includes(playerMoveInput.toLowerCase())) {
            break;
        } else {
            console.log("Error, please enter a valid move!");
        }
    }
    return(playerMoveInput.toLowerCase());
}

/*
    0 = DRAW
    1 = PLAYER WINS
    2 = COMPUTER WINS
*/
function gameRound(computerMovement,playerMovement) {
    if (computerMovement == 'rock') {
        switch (playerMovement) {
            case "rock":
                return 0;
            case "paper":
                return 1;
            case "scissors":
                return 2;
        }
    } else if (computerMovement == 'paper') {
        switch (playerMovement) {
            case "rock":
                return 2;
            case "paper":
                return 0;
            case "scissors":
                return 1;
        }
    } else {
        switch (playerMovement) {
            case "rock":
                return 1;
            case "paper":
                return 2;
            case "scissors":
                return 0;
        }
    }
}

function game() {
    let roundsToPlay = '';
    computerGameScore = 0;
    playerGameScore = 0;
    console.log("WELCOME TO ROCK PAPER SCISSORS");
    while (true) {
        roundsToPlay = prompt("Enter the number of rounds you want to play (min 5): ");
        if (parseInt(roundsToPlay)  >= 5) {
            break;
        } else {
            console.log("Please enter a number greater than 5!");
        }
    }     
    for (let i = 0; i < Math.floor(roundsToPlay); ++i) {
        const computer_play = computerPlay();
        const player_move = playerSelection();
        const game_round = gameRound(computer_play, player_move);
        if (game_round == 0)  {
            console.log("Draw");
        } else if (game_round == 1) {
            playerGameScore++;
            console.log(`Point to Player! ${player_move} beats ${computer_play}`);
        } else if (game_round == 2) {
            computerGameScore++;
            console.log(`Point to Computer! ${computer_play} beats ${player_move}`);
        }
    }
    if (computerGameScore == playerGameScore) {
        console.log(`FINAL SCORE = ${computerGameScore} - ${playerGameScore} ITS A DRAW!`);
    }   else if (computerGameScore > playerGameScore) {
        console.log(`FINAL SCORE = ${computerGameScore} - ${playerGameScore} COMPUTER WINS!`);
    } else  {
        console.log(`FINAL SCORE = ${computerGameScore} - ${playerGameScore} PLAYER WINS!`);
    }
}
