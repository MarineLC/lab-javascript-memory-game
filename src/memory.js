class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0; 
  }

  shuffleCards() {
    // ... write your code here
   if (!this.cards) {
      return undefined;
    };

    let i = this.cards.length;
  
    while(--i > 0){
      let temp = this.cards[i];
      let randIndex = Math.floor(Math.random() * i);
     this.cards[i] =  this.cards[randIndex];
     this.cards[randIndex] = temp;
  }
  return this.cards; 

  }

  checkIfPair(card1, card2) {

    // ... write your code here
    this.pairsClicked += 1;
    let pc = document.getElementById('pairs-clicked');
         pc.innerHTML = this.pairsClicked;

         
    if(card1 == card2){
      let pg = document.getElementById('pairs-guessed');
        this.pairsGuessed +=1;
         pg.innerHTML = this.pairsGuessed;
      return true;
    }else{
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    
    if(this.pairsGuessed == (this.cards.length)/2){
      return true;
    }else{
      return false;
    }
  }
}
