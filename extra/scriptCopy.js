import { btn } from './domElementsVariables.js';
import { player } from './playerMove.js';
import { computerMove } from './computerMove.js';

const playerRndArr = [];
const computerRndArr = [];
const playerCardsPool = [];
const computerCardsPool = [];
const playerCards = [];
const computerCards = [];
const playerDeckObj = [];
const computerDeckObj = [];

/**
    Generates random number
    @param arr Array where the random number will be pushed
    @param length Number that will be multiplied to when generating random number
    @param loop Used in the loop condition. How many times it should iterate
*/
const rndGenerator = (len) => {
  return Math.floor(Math.random() * len);
};

const rndArrayGenerator = (arr, length, loop) => {
  for (let i = 0; i < loop; i++) {
    arr.push(rndGenerator(length));
  }
};

// While loop that will keep on invoking the rndArrayGenerator() function till the condition renders to be false
rndArrayGenerator(playerRndArr, 15, 12);
rndArrayGenerator(computerRndArr, 15, 12);
/**
 * Function that loops through the randomly generated array, nested inside is the loop that loops through the object passed, after checking if the randomly generated array matches the object number, only then will it push the object in the specified array.
 * @param outerArr Randomly generated array
 * @param object Object that will be iterated through
 * @param arr Array that will contain matched elements (e.g. generated number === object number propert)
 */

const getCards = (outerArr, object, arr) => {
  for (let index of outerArr) {
    if (index <= 10) {
      for (let card of object.attack) {
        if (card.number === index) {
          arr.push(card);
        }
      }
    } else if (index < 16) {
      for (let card of object.buff) {
        if (card.number === index) {
          arr.push(card);
        }
      }
    }
  }
};
getCards(playerRndArr, cardsData, playerCardsPool);
getCards(computerRndArr, cardsData, computerCardsPool);

const elementRemoverFn = (parent, element, time) => {
  setTimeout(() => {
    // if (parent.hasChildNodes()) {
    parent.removeChild(element);
    // }
  }, time);
};
const addElementFn = (parent, element, time) => {
  setTimeout(() => {
    parent?.appendChild(element);
  }, time);
};

let computerObj = {
  health: 30,
  rnd: null,
  move: null,

  moveFn() {
    this.rnd = Math.floor(Math.random() * computerCards.length);
    this.move = computerCards[this.rnd];
    return this.move;
  },

  generatePoolOfCards() {
    for (let i = 0; i < 4; i++) {
      const rnd = rndGenerator(computerCardsPool.length - 1);
      computerCards.push(computerCardsPool[rnd]);
      computerCardsPool.splice(rnd, 1);
    }
  },

  regenerateCards() {
    const rnd = rndGenerator(computerCardsPool.length - 1);
    computerCards.push(computerCardsPool[rnd]);
    computerCardsPool.splice(rnd, 1);
  },
};

let playerObj = {
  health: 30,
  counter: 1,

  generatePoolOfCards() {
    for (let i = 0; i < 4; i++) {
      playerCards.push(playerCardsPool[i]);
      playerCardsPool.splice(i, 1);
    }
  },

  regenerateCards() {
    playerCards.push(playerCardsPool[0]);
    playerCardsPool.splice(0, 1);
  },
};

let playerObjCopy = { ...playerObj };
let computerObjCopy = { ...computerObj };

/**
 * Function that re-assigns the newly calculated object values
 * @param arrSpread Array that you want to copy/alter
 * @param index Element index that you want to copy/alter
 * @param operation Operations you want to perform e.g. "+=", "-=" etc
 * @param calc Calculation to be performed
 */
const reAssignNewCardsFn = (arrSpread, index, operation, calc) => {
  const operator = operation === '+=' ? (a, b) => (a += b) : (a, b) => (a -= b);
  const newCard = {
    ...arrSpread[index],
    hp: operator(arrSpread[index].hp, calc),
  };
  arrSpread[index] = newCard;
};

computerObj.generatePoolOfCards();
const computerMove = () => {
  computerObj.regenerateCards();
  btn.innerText = "Computer's Turn";
  btn.disabled = true;
  btn.setAttribute('class', 'disabled');

  const p = document.createElement('p');
  p.setAttribute('class', 'buff-msg');
  const cardEl = document.getElementById('msg');
  const rnd = rndGenerator(computerCards.length - 1);
  const computerCardsRnd = computerCards[rnd];

  for (let i = 0; i < computerCards.length; i++) {
    const card = document.createElement('div');
    card.setAttribute('id', 'computer-' + i);
    card.style.transform = 'scale(0.7)';
    // addElementFn(computerDeck, card, 2500);
    // addElementFn(computerDeck, cardEl, 2500);

    computerDeck.appendChild(card);
    computerDeck.appendChild(cardEl);

    if (computerCards[i].number > 10) {
      cardGenerator(card, computerCards[i]);

      if (computerCards[i].attack > 0) {
        playerObj.health -= computerCards[i].attack;
        p.innerText = `Direct hit! -${computerCards[i].attack}`;
        setTimeout(() => {
          updateHpBar(playerObj.health, playerObjCopy.health, 1);

          computerCards.splice(i, 1);
          computerRndArr.splice(i, 1);
        }, 1600);
      } else {
        if (computerObj.health < computerObjCopy.health) {
          computerObj.health += computerCards[i].hp;
          p.innerText = `+${computerCards[i].hp} HP`;
          setTimeout(() => {
            if (computerObj.health > computerObjCopy.health) {
              updateHpBar(computerObj.health, computerObjCopy.health, 0);
            }
            computerCards.splice(i, 1);
            computerRndArr.splice(i, 1);
          }, 1600);
          addElementFn(cardEl, p, 200);
          elementRemoverFn(cardEl, p, 2000);
        } else {
          p.innerText = `Max HP. Card will be discarded`;
          computerCards.splice(i, 1);
          computerRndArr.splice(i, 1);
          addElementFn(cardEl, p, 200);
          elementRemoverFn(cardEl, p, 2000);
        }
      }
      elementRemoverFn(computerDeck, card, 2000);
    }
  }
  const card = document.createElement('div');
  card.setAttribute('id', 'computer-' + rnd);
  card.style.transform = 'scale(0.7)';

  if (computerCards[rnd].number <= 10) {
    computerDeckObj.push(computerCards[rnd]);
    computerCards.splice(rnd, 1);
  }

  cardGenerator(card, computerCardsRnd);
  addElementFn(computerDeck, card, 2100);
  computerCardsEl.appendChild(card);
  addElementFn(cardEl, p, 2000);
  // elementRemoverFn(cardEl, p, 2700);

  // NOTE:
  // Find out if the cards is less than 4 but the hp for both computer and player is > 0
  // Then generate more cards

  setTimeout(() => {
    player();
    playerObj.counter = 1;
  }, 3000);
};

function cardsHandler(card, cardEl, el, index, p) {
  if (playerObj.counter === 1) {
    if (el.number <= 10) {
      playerDeckObj.push(el);
    }

    cards.removeChild(card);

    playerDeck.append(card);
    card.style.transform = 'scale(0.7)';

    playerDeck.style.opacity = '1';
    computerDeck.style.opacity = '1';

    if (el.number <= 10) {
      // console.log(this);
    } else {
      if (el.attack > 0) {
        computerObj.health -= el.attack;

        p.innerText = `Direct hit! -${el.attack}`;
        updateHpBar(computerObj.health, computerObjCopy.health, 0);
        addElementFn(cardEl, p, 200);
        elementRemoverFn(cardEl, p, 2000);
      } else {
        if (playerObj.health < playerObjCopy.health) {
          playerObj.health += el.hp;

          if (playerObj.health > playerObjCopy.health) {
            p.innerText = `+${el.hp} HP`;
            updateHpBar(playerObj.health, playerObjCopy.health, 1);
          }
          addElementFn(cardEl, p, 200);
          elementRemoverFn(cardEl, p, 2000);
        } else {
          p.innerText = `Max HP. Card will be discarded`;
          addElementFn(cardEl, p, 200);
          elementRemoverFn(cardEl, p, 2000);

          playerCards.splice(index, 1);
          playerRndArr.splice(index, 1);
        }
      }
      elementRemoverFn(playerDeck, card, 2000);
      playerCards.splice(index, 1);
      playerRndArr.splice(index, 1);
    }

    if (el.number <= 10) {
      playerObj.counter = 0;
      const cardsDirectChild = cards.querySelectorAll(':scope > *');
      cardsDirectChild.forEach((child) => {
        child.classList.remove('cards-hover');
      });
    }
  }
}

playerObj.generatePoolOfCards();
const player = () => {
  if (playerCards.length < 4) {
    playerObj.regenerateCards();
  }
  btn.disabled = false;
  btn.innerText = 'End Turn';
  btn.removeAttribute('class');

  while (cards.firstChild) {
    cards.removeChild(cards.firstChild);
  }

  playerCards.forEach((el, index) => {
    const p = document.createElement('p');
    p.setAttribute('class', 'buff-msg');
    p.classList.add('player-msg');
    const cardEl = document.getElementById('msg');

    const card = document.createElement('div');

    cardGenerator(card, el);
    card.setAttribute('id', 'player-' + index);
    cards.appendChild(card);

    card.addEventListener('click', () => {
      cardsHandler(card, cardEl, el, index, p);
    });
  });
};
player();

btn.addEventListener('click', computerMove);
