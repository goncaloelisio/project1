class Player {
    constructor(game) {
        this.game = game;
        this.currentScore = 0;
        this.score = 0;
        this.activePlayer = false;
        Player.playerCount++;
        this.playerNr = Player.playerCount;
        this.dice = new Dice();
        this.eventBindings();
        this.eventBindings = this.eventBindings.bind(this);
        this.winningScore = 0;
    }
    static currentThrow = 0;
    static playerCount = 0;

    switcher(player) {
        if (player = 1) return 2
        else if (player = 2) return 1
    }


    toggleTurn() {
      
        this.score += this.currentScore;
        this.currentScore = 0;
        this.checkIfWon();
        this.activePlayer = !this.activePlayer;
        document.querySelector(`.player-${this.playerNr}`).classList.toggle('active');
        // document.querySelector(`.player-${this.switcher(this.playerNr)}`).classList.toggle('active');
        document.querySelector(`.player-${this.playerNr} .player-score`).textContent = this.score;
        
    }


    throwDice() {
        if (this.activePlayer) {
            this.currentThrow = this.dice.throwDice();
            this.currentScore += this.currentThrow;
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
            this.game.playing = false;
            
        } 
    }

    eventBindings() {
        document.querySelector(".btn-roll").addEventListener("click", () => {
            if(this.game.playing){
                this.throwDice();
                this.bulletDice();
            }
        
        });
    }

    bulletDice() {
      
        if(this.currentThrow === 3){
           
            alert("BOOM");
            this.currentScore = 0;
            document.querySelector(`.player-${this.playerNr} .current-player-score`).textContent = this.currentScore;
            this.toggleTurn();
        }
    }
}
