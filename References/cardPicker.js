// function getCard() {
//   const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "K", "G", "J", "A"];
//   const cardsId = Math.floor(Math.random()* cards.length);
//   const card = cards[cardsId];

//   const suits = ['spade','clover','diamond','hearts'];
//   const suitsId = Math.floor(Math.random()*suits.length);
//   const suit = suits[suitsId];

//   return {card : card,suit : suit};
// }

// console.log(getCard());

function random(arr){
    const ran = Math.floor(Math.random()* arr.length);
    return arr[ran];
}


function getCard() {
    const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "K", "G", "J", "A"];
    const suits = ['spade','clover','diamond','hearts'];
  
    return {card : random(cards),suit : random(suits)};
  }
  
  console.log(getCard());
  