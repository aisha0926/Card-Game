const playerRndArr = [];
const computerRndArr = [];
const playerCardsPool = [];
const computerCardsPool = [];
const playerCards = [];
const computerCards = [];

/**
    Generates random number
    @param arr Array where the random number will be pushed
    @param length Number that will be multiplied to when generating random number
    @param loop Used in the loop condition. How many times it should iterate 
*/
const rndGenerator = (arr, length, loop) => {
  for (let i = 0; i < loop; i++) {
    arr.push(Math.floor(Math.random() * length) + 1);
  }
};

// While loop that will keep on invoking the rndGenerator() function till the condition renders to be false
rndGenerator(playerRndArr, 15, 12);
rndGenerator(computerRndArr, 15, 12);
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

const deck = document.getElementById('deck');
const playerDeck = document.getElementById('player-deck');
const computerDeck = document.getElementById('computer-deck');

const cards = document.getElementById('cards');
const computerCardsEl = document.getElementById('computer-cards');

const btn = document.querySelector('button');

const elementRemoverFn = (parent, element, time) => {
  setTimeout(() => {
    if (parent.hasChildNodes()) {
      parent.removeChild(element);
    }
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
      if (computerCards.length !== 4) {
        computerCards.push(computerCardsPool[i]);
        computerCardsPool.splice(i, 1);
      }
    }
  },
};

let playerObj = {
  health: 30,

  generatePoolOfCards() {
    for (let i = 0; i < 4; i++) {
      playerCards.push(playerCardsPool[i]);
      playerCardsPool.splice(i, 1);
    }
  },

  regenerateCards() {
    cards.innerHTML = '';
    playerCards.push(playerCardsPool[0]);
    playerCardsPool.splice(0, 1);
    playerCards.forEach((el, index) => {
      const p = document.createElement('p');
      p.setAttribute('class', 'buff-msg');
      p.classList.add('player-msg');
      const cardEl = document.getElementById('msg');
      const card = document.createElement('div');
      cardGenerator(card, el); // Factory
      console.log('PlayerCards', { playerCards, card });
      card.addEventListener('click', function () {
        console.log('EventListener', card);
        cardsHandler(card, cardEl, el, index, p);
      });
      cards.appendChild(card);
    });
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

// currentHp, maxHp, turn
function updateHpBar(currentHp, maxHp, turn) {
  const player = document.getElementById('player-hp');
  const computer = document.getElementById('computer-hp');
  const percentage = (currentHp / maxHp) * 100;

  if (turn === 0) {
    player.style.width = percentage + '%';
    player.innerText = Math.floor(percentage) + '%';
  } else {
    computer.style.width = percentage + '%';
    computer.innerText = Math.floor(percentage) + '%';

    if (percentage > 100) {
      computer.style.width = 100 + '%';
    }
  }
}

const computerMove = () => {
  computerObj.generatePoolOfCards();
  btn.disabled = true;
  btn.setAttribute('class', 'disabled');
  const p = document.createElement('p');
  p.setAttribute('class', 'buff-msg');
  const cardEl = document.getElementById('msg');

  for (let i = 0; i < computerCards.length; i++) {
    const cardEl = document.createElement('div');
    cardEl.setAttribute('id', 'computer-' + i);
    cardEl.style.transform = 'scale(0.7)';
    if (computerCards[i].number > 10) {
      cardGenerator(cardEl, computerCards[i]);
      addElementFn(computerDeck, cardEl, 2000);

      if (computerCards[i].attack > 0) {
        setTimeout(() => {
          playerObj.health -= computerCards[i].attack;

          p.innerText = `Direct hit! -${computerCards[i].attack}`;
          updateHpBar(playerObj.health, playerObjCopy.health, 1);
          elementRemoverFn(computerDeck, cardEl, 2600);
          computerCards.splice(i, 1);
          computerRndArr.splice(i, 1);
        }, 1600);
      } else {
        setTimeout(() => {
          computerObj.health += computerCards[i].hp;

          if (computerObj.health > computerObjCopy.health) {
            p.innerText = `+${computerCards[i].hp} HP`;
            updateHpBar(computerObj.health, computerObjCopy.health, 0);
          }
          elementRemoverFn(computerDeck, cardEl, 2600);
          computerCards.splice(i, 1);
          computerRndArr.splice(i, 1);
        }, 1600);
      }
    } else {
      //NOTE: Find out how to only call one card at a time
      const cardEl = document.createElement('div');
      cardEl.setAttribute('id', 'computer-' + i);
      cardEl.style.transform = 'scale(0.7)';

      cardGenerator(cardEl, computerCards[i]);
      addElementFn(computerDeck, cardEl, 2000);
      break;
    }

    computerCardsEl.appendChild(cardEl);
  }

  cardEl.appendChild(p);
  elementRemoverFn(cardEl, p, 2700);

  // NOTE:
  // Find out if the cards is less than 4 but the hp for both computer and player is > 0
  // Then generate more cards

  // setTimeout(() => {
  //   player();
  // }, 2500);
};

function cardsHandler(card, cardEl, el, index, p) {
  cards.removeChild(card);

  playerDeck.append(card);
  card.style.transform = 'scale(0.7)';

  playerDeck.style.opacity = '1';
  computerDeck.style.opacity = '1';

  // playerMove(playerCardObj);
  if (el.number <= 10) {
    // console.log(this);
  } else {
    if (el.attack > 0) {
      computerObj.health -= el.attack;

      p.innerText = `Direct hit! -${el.attack}`;
      updateHpBar(computerObj.health, computerObjCopy.health, 0);
    } else {
      playerObj.health += el.hp;

      if (playerObj.health > playerObjCopy.health) {
        p.innerText = `+${el.hp} HP`;
        updateHpBar(playerObj.health, playerObjCopy.health, 1);
      }
    }
    elementRemoverFn(playerDeck, card, 2000);
    playerCards.splice(index, 1);
    playerRndArr.splice(index, 1);
  }

  cardEl.appendChild(p);
  elementRemoverFn(cardEl, p, 2000);

  // playerObj.regenerateCards();
}

const player = () => {
  playerObj.generatePoolOfCards();

  playerCards.forEach((el, index) => {
    const p = document.createElement('p');
    p.setAttribute('class', 'buff-msg');
    p.classList.add('player-msg');
    const cardEl = document.getElementById('msg');

    const card = document.createElement('div');

    cardGenerator(card, el, index);
    card.setAttribute('id', 'player-' + index);
    cards.appendChild(card);

    card.addEventListener('click', function () {
      cardsHandler(card, cardEl, el, index, p);
    });

    // card.addEventListener('click', function () {
    //   cards.removeChild(card);

    //   playerDeck.append(card);
    //   card.style.transform = 'scale(0.7)';

    //   playerDeck.style.opacity = '1';
    //   computerDeck.style.opacity = '1';

    //   // playerMove(playerCardObj);
    //   if (el.number <= 10) {
    //     console.log(this);
    //   } else {
    //     if (el.attack > 0) {
    //       computerObj.health -= el.attack;

    //       p.innerText = `Direct hit! -${el.attack}`;
    //       updateHpBar(computerObj.health, computerObjCopy.health, 0);
    //     } else {
    //       playerObj.health += el.hp;

    //       if (playerObj.health > playerObjCopy.health) {
    //         p.innerText = `+${el.hp} HP`;
    //         updateHpBar(playerObj.health, playerObjCopy.health, 1);
    //       }
    //     }
    //     elementRemoverFn(playerDeck, this, 2000);
    //     playerCards.splice(index, 1);
    //     playerRndArr.splice(index, 1);
    //   }

    //   cardEl.appendChild(p);
    //   elementRemoverFn(cardEl, p, 2000);

    //   playerObj.regenerateCards();
    // });
  });
};
player();

btn.addEventListener('click', computerMove);
