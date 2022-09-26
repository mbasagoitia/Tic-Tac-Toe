class Game {
    constructor(gameBoard, players) {
        this.gameBoard = gameBoard;
        this.players = players;
    }

    startGame() {
        //hide player input area
        //display game info (whose turn it is), game won
    }

    displayPlayerTurn () {
        //tell the users which player is currently active
    }

    switchPlayer() {
        //if player1 just played, switch to player 2 and vice versa
    }

    checkIfWon() {
        //if player1 symbol OR player 2 symbol occurs three times in a row, display won message
    }

}


class GameBoard {
    constructor(gameBoard) {
        gameBoard = [];
        this.gameBoard = gameBoard;
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

}

class Player {
    constructor(name, playerNumber, symbol) {
        this.name = name;
        this.playerNumber = playerNumber;
        this.symbol = symbol;
    }
}

