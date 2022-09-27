//select game board rows
const row1 = document.querySelector("#row-1");
const row2 = document.querySelector("#row-2");
const row3 = document.querySelector("#row-3");


//select game board squares
const squares = document.querySelectorAll(".sq");

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
        this.createBoard();
        this.takeTurn();
        //call switchPlayer
        //when a square is clicked, call fillSquare and then call switchPlayer again
        //call checkIfWon after every click. If false, switchPlayer. If true, display won message and reset game
    }

    createBoard() {
        //fills the gameBoard rows with "empty" squares 
        //this will store the data of the player entries

        const row1 = ["empty", "empty", "empty"];
        this.gameBoard.push(row1);
        const row2 = ["empty", "empty", "empty"];
        this.gameBoard.push(row2);
        const row3 = ["empty", "empty", "empty"];
        this.gameBoard.push(row3);
        console.log(this.gameBoard);

    }


    takeTurn() {

        //fill square with the appropriate symbol
        let activeSymbol;

        squares.forEach((square) => {
            square.addEventListener("click", () => {
                if (this.player1.isActive) {
                    activeSymbol = "x";
                } else {
                    activeSymbol = "o";
                }
                square.innerText = activeSymbol;
                //call switchPlayer
                this.switchPlayer();
            })
        })

        //update the gameBoard array with the applicable symbol

        
    }

    switchPlayer () {

        if (this.player1.isActive) {
            this.player1.isActive = false;
            this.player2.isActive = true;
            console.log(`player 2 active`);
        } else if (this.player2.isActive) {
            this.player1.isActive = true;
            this.player2.isActive = false;
            console.log(`player 1 active`);
        }

        //change the players' active status
        //display which player is currently active
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

const Marika = new Player("Marika", 1, "x", true);
const Alex = new Player("Alex", 2, "o", false);

const Tictactoe = new Game([], Marika, Alex);

Tictactoe.playGame();