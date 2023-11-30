const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);


function toggle(element, classes) {
  classes.forEach(className => 
    element.classList.toggle(className));
}

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      console.log(`Card clicked: ${card}`);
      //add the card to the pickedCards array
      memoryGame.pickedCards.push(card);
      
      toggle(card.children[0],["back", "front"]);
      toggle(card.children[1],["back", "front"]);
      

      if(memoryGame.pickedCards.length == 2){

      const card1 = memoryGame.pickedCards[0];
      const card2 = memoryGame.pickedCards[1];

      const cardName1 = card1.getAttribute('data-card-name');
      const cardName2 = card2.getAttribute('data-card-name');

      memoryGame.pickedCards=[];

      // check if the cards are paired
        if(memoryGame.checkIfPair(cardName1, cardName2)){
          //nothing to do
        }else {
          setTimeout(() => {
           toggle(card1.children[0],["front", "back"]);
           toggle(card1.children[1],["front", "back"]);
           toggle(card2.children[0],["front", "back"]);
           toggle(card2.children[1],["front", "back"]);
           
        }, 1000);
      }
    }
      if(memoryGame.checkIfFinished()){

      }
    });
  });
});
