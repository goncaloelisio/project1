class Player {
    constructor(game) {
        this.currentScore = 0;
        this.score = 0;
        this.activePlayer = false;
        this.game = game;
        Player.playerCount++;
        this.playerNr = Player.playerCount;
        this.dice = new Dice();
        this.eventBindings();
        this.eventBindings = this.eventBindings.bind(this);
        this.winningScore = 0;
        this.playing = true;
    }

    toggleTurn() {
        this.activePlayer = !this.activePlayer;
        document.querySelector(`.player-${this.playerNr}`).classList.toggle('active');
    }

    passOnTurn() {
        this.currentScore = 0;
        this.game.takeTurn();
    }

    throwDice() {
        if (this.activePlayer) {
            var currentThrow = this.dice.throwDice();
            this.currentScore += currentThrow;
            document.querySelector(`.player-${this.playerNr} .current-player-score`).textContent = this.currentScore;
        }
    }

    checkIfWon() {
        var input = document.querySelector('.final-score').value;
        
        if(input && input >= 0) {
            this.winningScore = input;
        } else {
            this.winningScore = 100;
        }
        
        // Check if player won the game
        if (this.score >= this.winningScore) {
            document.querySelector(`#name-${this.playerNr}`).textContent = 'Winner!';
            document.querySelector(`.player-${this.playerNr}`).classList.add('winner');
            document.querySelector(`.player-${this.playerNr}`).classList.remove('active');
            this.playing = false;
        
        } else {
        
            this.passOnTurn();
        }
    }

    eventBindings() {
        document.querySelector(".btn-roll").addEventListener("click", () => {
            if(this.playing){
                this.throwDice();
            }
        });

        document.querySelector(".btn-collect").addEventpmListener("click", () => {
            this.score += this.currentScore;
            this.currentScore = 0;
            document.querySelector(`.player-${this.playerNr} .player-score`).textContent = this.score;
            this.checkIfWon();
            this.passOnTurn();
        });

    }
}

Player.playerCount = 0;