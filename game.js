class Game {
    constructor() {
        this.players = [new Player(this), new Player(this)];
        this.winningValue = 50;
        this.turnCount = 0;
        this.currentPlayer = this.players[this.turnCount];
        this.initDomBindings();
    }

    static playing = true;

    takeTurn() {
        let previousPlayer = this.currentPlayer;
        this.currentPlayer = this.players[++this.turnCount % 2]; // assuming there are 2 players, alternate.
        this.currentPlayer.toggleTurn();
        previousPlayer.toggleTurn();
    }

    start() {
        this.playing = true;
        this.players[0].toggleTurn();
        this.gameEngine();

    }

    gameEngine() {
        document.getElementById('score-1').textContent = '0';
        document.getElementById('score-2').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('current-2').textContent = '0';

        document.querySelector('.player-1').classList.add('active');


    }

    initDomBindings() {
        document.querySelector(".btn-collect").addEventListener("click", () => {
            if (Game.playing) {
                this.takeTurn();

            }
        });
     }

    resetGame() {
        // window.location.href = window.location.href; // triggers refresh

        this.gameEngine();
     }
}

let game;

document.querySelector('.btn-new').addEventListener('click', () => {
    document.querySelector(".btn-roll").hidden = false;
    document.querySelector(".btn-collect").hidden = false;
    game = new Game();
    
    game.start();

});








// setInterval(() => {
//     game.showDice();
// }, 500);