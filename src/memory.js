class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0; 
  }

  shuffleCards(arr) {
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
  }

  checkIfFinished() {
    // ... write your code here
  }
}
