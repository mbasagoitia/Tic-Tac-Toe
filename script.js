//select HTML elements
const squares = document.querySelectorAll(".sq");
const gameBoard = document.querySelector("#game-board");

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

const playerTurnMsg = document.querySelector("#player-turn-msg");

const p1Radiox = document.querySelector("#symbol1a");
const p1Radioo = document.querySelector("#symbol2a");

const p2Radiox = document.querySelector("#symbol1b");
const p2Radioo = document.querySelector("#symbol2b");

const radioButtons = document.querySelectorAll(".radio");

const playAgainBtn = document.querySelector("#play-again-btn");


//weird bug where I can't change player 2 radio button, but player one works fine
radioButtons.forEach((button) => {
    button.addEventListener("change", () => {

        if (p1Radiox.checked) {
            p2Radioo.checked = true;
        } 
        if (p1Radioo.checked) {
            p2Radiox.checked = true;
        } 
        if (p2Radiox.checked) {
            p1Radioo.checked = true;
        } 
        if (p2Radioo.checked) {
            p1Radiox.checked = true;
        }
    })
})

startButton.addEventListener("click", () => {
    startGame();
})

function startGame() {
    let p1symbol;
    if (p1Radiox.checked) {
        p1symbol = "X";
    } else if (p1Radioo.checked) {
        p1symbol = "O";
    }

    let p2symbol;
    if (p2Radiox.checked) {
        p2symbol = "X";
    } else if (p2Radioo.checked) {
        p2symbol = "O";
    }
 
    if (!player1Input.value || !player2Input.value) {
        alert("Please enter two valid player names.")
    } else {
        playerInput.classList.add("no-display");
        const Player1 = new Player(player1Input.value, 1, p1symbol, true);
        const Player2 = new Player(player2Input.value, 2, p2symbol, false);
    
        const Tictactoe = new Game(Player1, Player2);
        Tictactoe.playGame();
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


class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    playGame() {
        playerTurnMsg.textContent = `${this.player1.name}'s turn`;
        this.takeTurn();
    }

    takeTurn() {
        //fill square with the appropriate symbol
        let activeSymbol;

        squares.forEach((square) => {
            square.addEventListener("click", () => {
                let activePlayer;

                if (this.player1.isActive) {
                    activeSymbol = this.player1.symbol;
                    activePlayer = this.player2;
                } else {
                    activeSymbol = this.player2.symbol;
                    activePlayer = this.player1;
                }

                //if the square is taken, don't let the player go there
                if (square.textContent) {
                    square.textContent = square.textContent;
                } else {
                    square.textContent = activeSymbol;
                    playerTurnMsg.textContent = `${activePlayer.name}'s turn`;
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

    }

    //need to add logic for cat's game

    checkIfWon() {
        //there has got to be a better way to do this

        if (s1.textContent == this.player1.symbol && s2.textContent == this.player1.symbol && s3.textContent == this.player1.symbol) {
            this.displayWinner(this.player1.name);
        } else if (s4.textContent == this.player1.symbol && s5.textContent == this.player1.symbol && s6.textContent == this.player1.symbol) {
            this.displayWinner(this.player1.name);
        } else if (s7.textContent == this.player1.symbol && s8.textContent == this.player1.symbol && s9.textContent == this.player1.symbol) {
            this.displayWinner(this.player1.name);
        } else if (s1.textContent == this.player1.symbol && s4.textContent == this.player1.symbol && s7.textContent == this.player1.symbol) {
            this.displayWinner(this.player1.name);
        } else if (s2.textContent == this.player1.symbol && s5.textContent == this.player1.symbol && s8.textContent == this.player1.symbol) {
            this.displayWinner(this.player1.name);
        } else if (s3.textContent == this.player1.symbol && s6.textContent == this.player1.symbol && s9.textContent == this.player1.symbol) {
            this.displayWinner(this.player1.name);
        } else if (s1.textContent == this.player1.symbol && s5.textContent == this.player1.symbol && s9.textContent == this.player1.symbol) {
            this.displayWinner(this.player1.name);
        } else if (s3.textContent == this.player1.symbol && s5.textContent == this.player1.symbol && s7.textContent == this.player1.symbol) {
            this.displayWinner(this.player1.name);
        } else if (s1.textContent == this.player2.symbol && s2.textContent == this.player2.symbol && s3.textContent == this.player2.symbol) {
            this.displayWinner(this.player2.name);
        } else if (s4.textContent == this.player2.symbol && s5.textContent == this.player2.symbol && s6.textContent == this.player2.symbol) {
            this.displayWinner(this.player2.name);
        } else if (s7.textContent == this.player2.symbol && s8.textContent == this.player2.symbol && s9.textContent == this.player2.symbol) {
            this.displayWinner(this.player2.name);
        } else if (s1.textContent == this.player2.symbol && s4.textContent == this.player2.symbol && s7.textContent == this.player2.symbol) {
            this.displayWinner(this.player2.name);
        } else if (s2.textContent == this.player2.symbol && s5.textContent == this.player2.symbol && s8.textContent == this.player2.symbol) {
            this.displayWinner(this.player2.name);
        } else if (s3.textContent == this.player2.symbol && s6.textContent == this.player2.symbol && s9.textContent == this.player2.symbol) {
            this.displayWinner(this.player2.name);
        } else if (s1.textContent == this.player2.symbol && s5.textContent == this.player2.symbol && s9.textContent == this.player2.symbol) {
            this.displayWinner(this.player2.name);
        } else if (s3.textContent == this.player2.symbol && s5.textContent == this.player2.symbol && s7.textContent == this.player2.symbol) {
            this.displayWinner(this.player2.name);
        } else if (s1.textContent && s2.textContent && s3.textContent && s4.textContent && s5.textContent && s6.textContent && s7.textContent && s8.textContent && s9.textContent) {
            this.displayWinner("Cat");
        }
        
    } 

    displayWinner(winningPlayer) {
        playerTurnMsg.textContent = `${winningPlayer} wins!`;
        if (winningPlayer == "Cat") {
            const catPic = document.createElement("img");
            catPic.classList.add("cat-pic");
            catPic.setAttribute("src", "img/cat-img.webp");
            catPic.setAttribute("alt", "angry cat");
            playerTurnMsg.appendChild(catPic);
        }
        this.displayPlayAgainBtn();
        gameBoard.classList.add("no-click");
    }

    displayPlayAgainBtn() {
        playAgainBtn.classList.remove("no-display");
        playAgainBtn.addEventListener("click", () => {  
            this.resetGame();
        });
    }

    resetGame() {
        location.reload();
    }

}