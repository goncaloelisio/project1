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

    


    toggleTurn() {
        document.querySelector(`.player-${this.playerNr} .current-player-score`).textContent = this.currentScore;
        this.score += this.currentScore;
        this.currentScore = 0;
        this.checkIfWon();
        this.activePlayer = !this.activePlayer;
        document.querySelector(`.player-${this.playerNr}`).classList.toggle('active');
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
            document.querySelector(".btn-roll").hidden = true;
            document.querySelector(".btn-collect").hidden = true;
            document.querySelector(".btn-new").hidden = true;

            setInterval(() => {
             window.location.href = window.location.href;
            }, 10000);
        } 
    }

    eventBindings() {
        document.querySelector(".btn-roll").addEventListener("click", () => {
                
            if(this.activePlayer){
                this.throwDice();
                this.bulletDice();
            }
        });
    }

    bulletDice() {
      
        if(this.currentThrow === 3){
            alert("BOOM is a 3");
            this.currentScore = 0;
            document.querySelector(`.player-${this.playerNr} .current-player-score`).textContent = this.currentScore;
            this.game.takeTurn();
        }
    }
}
