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


const playerInput = document.querySelector("#player-input-wrapper");
const startButton = document.querySelector("#start-btn");

const player1Input = document.querySelector("#name1");
const player2Input = document.querySelector("#name2");

const p1Radiox = document.querySelector("#symbol1a");
const p1Radioo = document.querySelector("#symbol2a");

const p2Radiox = document.querySelector("#symbol1b");
const p2Radioo = document.querySelector("#symbol2b");

const radioButtons = document.querySelectorAll(".radio");


//weird bug where I can't change player 2 radio button, but player one works fine
radioButtons.forEach((button) => {
    button.addEventListener("change", () => {
        if (p1Radiox.checked) {
            p2Radioo.checked = true;
        } else if (p2Radioo.checked) {
            p2Radiox.checked = true;
        } else if (p2Radiox.checked) {
            p1Radioo.checked = true;
        } else if (p2Radioo.checked) {
            p1Radiox.checked = true;
        }
    })
})


//need to find out how to read which radio button is checked
startButton.addEventListener("click", () => {
    if (!player1Input.value || !player2Input.value) {
        alert("Please enter two valid player names.")
    } else {
        playerInput.classList.add("no-display");
        const Player1 = new Player(player1Input.value, 1, "x", true);
        const Player2 = new Player(player2Input.value, 2, "o", false);
    
        const Tictactoe = new Game(Player1, Player2);
        Tictactoe.playGame();
    }
})

class Player {
    constructor(name, playerNumber, symbol, isActive) {
        this.name = name;
        this.playerNumber = playerNumber;
        this.symbol = symbol;
        this.isActive = isActive;
    }
}


class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    playGame() {
        this.takeTurn();
        //call switchPlayer
        //when a square is clicked, call fillSquare and then call switchPlayer again
        //call checkIfWon after every click. If false, switchPlayer. If true, display won message and reset game
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
                //if the square is taken, don't let the player go there
                if (square.textContent) {
                    square.textContent = square.textContent;
                } else {
                    square.textContent = activeSymbol;
                    this.checkIfWon();
                    this.switchPlayer();
                }
            })
        })
        
    }

    switchPlayer () {
        //change the players' active status
        if (this.player1.isActive) {
            this.player1.isActive = false;
            this.player2.isActive = true;
            //console.log(`player 2 active`);
        } else {
            this.player1.isActive = true;
            this.player2.isActive = false;
            //console.log(`player 1 active`);
        }

        
        //display which player is currently active
    }

    //need to add logic for cat's game

    checkIfWon() {
        //there has got to be a better way to do this

        if (s1.textContent == "x" && s2.textContent == "x" && s3.textContent == "x") {
            this.displayWinner(this.player1.name);
        } else if (s4.textContent == "x" && s5.textContent == "x" && s6.textContent == "x") {
            this.displayWinner(this.player1.name);
        } else if (s7.textContent == "x" && s8.textContent == "x" && s9.textContent == "x") {
            this.displayWinner(this.player1.name);
        } else if (s1.textContent == "x" && s4.textContent == "x" && s7.textContent == "x") {
            this.displayWinner(this.player1.name);
        } else if (s2.textContent == "x" && s5.textContent == "x" && s8.textContent == "x") {
            this.displayWinner(this.player1.name);
        } else if (s3.textContent == "x" && s6.textContent == "x" && s9.textContent == "x") {
            this.displayWinner(this.player1.name);
        } else if (s1.textContent == "x" && s5.textContent == "x" && s9.textContent == "x") {
            this.displayWinner(this.player1.name);
        } else if (s3.textContent == "x" && s5.textContent == "x" && s7.textContent == "x") {
            this.displayWinner(this.player1.name);
        }

        if (s1.textContent == "o" && s2.textContent == "o" && s3.textContent == "o") {
            this.displayWinner(this.player2.name);
        } else if (s4.textContent == "o" && s5.textContent == "o" && s6.textContent == "o") {
            this.displayWinner(this.player2.name);
        } else if (s7.textContent == "o" && s8.textContent == "o" && s9.textContent == "o") {
            this.displayWinner(this.player2.name);
        } else if (s1.textContent == "o" && s4.textContent == "o" && s7.textContent == "o") {
            this.displayWinner(this.player2.name);
        } else if (s2.textContent == "o" && s5.textContent == "o" && s8.textContent == "o") {
            this.displayWinner(this.player2.name);
        } else if (s3.textContent == "o" && s6.textContent == "o" && s9.textContent == "o") {
            this.displayWinner(this.player2.name);
        } else if (s1.textContent == "o" && s5.textContent == "o" && s9.textContent == "o") {
            this.displayWinner(this.player2.name);
        } else if (s3.textContent == "o" && s5.textContent == "o" && s7.textContent == "o") {
            this.displayWinner(this.player2.name);
        }
        //call resetGame
    } 

    displayWinner(winningPlayer) {
        alert(`${winningPlayer} wins!`);
    }

    resetGame() {
        //reset gameBoard array
        //reset the table squares
    }

}