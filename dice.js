class Dice{
    constructor(){
        if(!Dice.singleton) {
            this.dice1 = new Image();
            this.dice1.src = "Images/dice-1.png";
    
            this.dice2 = new Image();
            this.dice2.src = "Images/dice-2.png";
    
            this.dice3 = new Image();
            this.dice3.src = "Images/dice-3.png";
    
            this.dice4 = new Image();
            this.dice4.src = "Images/dice-4.png";
    
            this.dice5 = new Image();
            this.dice5.src = "Images/dice-5.png";
    
            this.dice6 = new Image();
            this.dice6.src = "Images/dice-6.png";
    
            this.diceImages = [this.dice1, this.dice2, this.dice3, this.dice4, this.dice5,this.dice6];
            Dice.singleton = this;
        }
        return Dice.singleton
    }

    throwDice() {
        var currentThrow = Math.floor(Math.random() * 6);
        var diceImage = this.diceImages[currentThrow];
        var $dice = document.getElementById('dice-container');
        $dice.innerHTML = "";
        $dice.appendChild(diceImage);
        return currentThrow + 1; // index starts at 0, dice dont
    }

    
}