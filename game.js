let computerGameScore = 0;
let playerGameScore = 0;
let gameMoves = ["rock","paper","scissors"];

let computerPlay =  () =>  gameMoves[Math.floor((Math.random()*gameMoves.length))];

let playerSelection = function() {
    let playerMoveInput = '';
    while (true) {
        playerMoveInput = prompt("Enter your move (rock, paper, scissors): ");
        if (playerMoveInput === null) {
            while(true){
                let endGame = prompt("Are you sure you want to exit? (Y/N)");
                if (endGame == null || endGame == 'Y' || endGame == 'y') {
                    location.reload();
                } else if (endGame == 'n' || endGame == 'N'){
                    break;
                } else {
                    console.log("Please write Y/y to end the game or N/n to continue playing")
                }
            }
            continue;
        }
        if (gameMoves.includes(playerMoveInput.trim().toLowerCase())) {
            return(playerMoveInput.trim().toLowerCase());
        } else {
            console.log("Error, please enter a valid move!");
        }
    }
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
                playerGameScore++;
                return 1;
            case "scissors":
                computerGameScore++;
                return 2;
        }
    } else if (computerMovement == 'paper') {
        switch (playerMovement) {
            case "rock":
                computerGameScore++;
                return 2;
            case "paper":
                return 0;
            case "scissors":
                playerGameScore++;
                return 1;
        }
    } else {
        switch (playerMovement) {
            case "rock":
                playerGameScore++;
                return 1;
            case "paper":
                computerGameScore++;
                return 2;
            case "scissors":
                return 0;
        }
    }
}

function gameRounds() {
    let roundsToPlay = '';
    while (true) {
        roundsToPlay = prompt("Enter the number of rounds you want to play (min 5): ");
        if (roundsToPlay === null) {
            while(true){
                let endGame = prompt("Are you sure you want to exit? (Y/N)");
                if (endGame == null || endGame == 'Y' || endGame == 'y') {
                    location.reload();
                } else if (endGame == 'n' || endGame == 'N'){
                    break;
                } else {
                    console.log("Please write Y/y to end the game or N/n to continue playing")
                }
            }
            continue;
        }
        if (parseInt(roundsToPlay)  >= 5) {
            break;
        } else {
            console.log("Please enter a number greater than 5!");
        }
    }
    return roundsToPlay;     
}

function game() {
    computerGameScore = 0;
    playerGameScore = 0;
    console.log("WELCOME TO ROCK PAPER SCISSORS");
    console.log("REMEMBER THAT: \nROCK BEATS SCISSORS \nPAPER BEATS ROCK \nSCISSORS BEAT PAPER")
    const game_rounds = gameRounds();
    for (let i = 0; i < Math.floor(game_rounds); ++i) {
        const computer_play = computerPlay();
        const player_move = playerSelection();
        const game_round = gameRound(computer_play, player_move);
        if (game_round == 0)  {
            console.log("Draw");
        } else if (game_round == 1) {
            console.log(`Point to Player! ${player_move} beats ${computer_play}`);
        } else if (game_round == 2) {
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
    let playAgain = prompt("Would you like to play again? Y/N")
    if (playAgain === null || playAgain == 'n' || playAgain =='N') {
        return 0;
    } else if ( playAgain == 'y' || playAgain =='Y') {
        game();
    } else {
        console.log("Please enter Y/Y if you want to play again or N/n if not.")
    }
}

game();
