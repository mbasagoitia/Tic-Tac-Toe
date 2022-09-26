//select game board rows
const row1 = document.querySelector("#row-1");
const row2 = document.querySelector("#row-2");
const row3 = document.querySelector("#row-3");

//select game board squares
const s1 = document.querySelector("#s1");
const s2 = document.querySelector("#s2");
const s3 = document.querySelector("#s3");
const s4 = document.querySelector("#s4");
const s5 = document.querySelector("#s5");
const s6 = document.querySelector("#s6");
const s7 = document.querySelector("#s7");
const s8 = document.querySelector("#s8");
const s9 = document.querySelector("#s9");


class Game {
    constructor(gameBoard, player1, player2) {
        gameBoard = [];
        this.gameBoard = gameBoard;
        this.player1 = player1;
        this.player2 = player2;
    }

    playGame() {
        //hide player input area
        //call create board method
        //when a square is clicked, call fillSquare with player 1 as first active player
        //call switchPlayer
        //when a square is clicked, call fillSquare
        //call checkIfWon. If false, switchPlayer. If true, display won message and reset game
    }

    createBoard() {
        //this will store the data of the player entries

        const row1 = ["empty", "empty", "empty"];
        this.gameBoard.push(row1);
        const row2 = ["empty", "empty", "empty"];
        this.gameBoard.push(row2);
        const row3 = ["empty", "empty", "empty"];
        this.gameBoard.push(row3);

    }

    switchPlayer () {
        //change the players' active status, if applicable
        //display which player is currently active
    }

    fillSquare() {
        //update the gameBoard array with the symbols
        //fill square with the appropriate symbol
    }

    checkIfWon() {
        //if player1 symbol OR player 2 symbol occurs three times in a row, display won message
        //call resetGame
    }

    resetGame() {
        //reset gameBoard array
        //reset the table squares
    }

}


class Player {
    constructor(name, playerNumber, symbol, isActive) {
        this.name = name;
        this.playerNumber = playerNumber;
        this.symbol = symbol;
        this.isActive = isActive;
    }
}


//add event listener to the start game button that calls Game.playGame()