class Game {
   constructor(){
    this.players = [new Player(this), new Player(this)];
    this.winningValue = 50;
    this.turnCount = 0;
    this.currentPlayer = this.players[this.turnCount];
    this.Playing = true;
   }

   takeTurn(){
    let previousPlayer = this.currentPlayer;
    this.currentPlayer = this.players[++this.turnCount % 2]; // assuming there are 2 players, alternate.
    this.currentPlayer.toggleTurn();
    previousPlayer.toggleTurn();
   }

   start(){
    this.players[0].toggleTurn();
    this.gameEngine();
   }

   gameEngine(){
       document.getElementById('score-1').textContent = '0';
       document.getElementById('score-2').textContent = '0';
       document.getElementById('current-1').textContent = '0';
       document.getElementById('current-2').textContent = '0';
       
       document.querySelector('.player-1').classList.add('active');
   }

}

let game;

document.querySelector('.btn-new').addEventListener('click',() =>{
    
    game = new Game();
    game.gameEngine();
    Player.score = 0;
    game.start();

});








// setInterval(() => {
//     game.showDice();
// }, 500);