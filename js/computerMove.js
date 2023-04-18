import getCards from './getCards.js';
import cardsData from './cardsData.js';
import cardGenerator from './cardGenerator.js';
import { computerDeck, btn, computerCardsEl } from './domElementsVariables.js';
import updateHpBar from './updateHpBar.js';
import { rndGenerator, rndArrayGenerator } from './rndGenerators.js';
import { elementRemoverFn, addElementFn } from './domElementManipulation.js';
import { player, playerObj, playerObjCopy } from './playerMove.js';

const computerCards = [];
const computerDeckObj = [];
const computerCardsPool = [];
const computerRndArr = [];

rndArrayGenerator(computerRndArr, 15, 12);
getCards(computerRndArr, cardsData, computerCardsPool);

export const computerObj = {
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

export let computerObjCopy = { ...computerObj };

computerObj.generatePoolOfCards();

export const computerMove = () => {
  computerObj.regenerateCards();
  btn.innerText = "Computer's Turn";
  btn.disabled = true;
  btn.setAttribute('class', 'disabled');

  const p = document.createElement('p');
  p.setAttribute('class', 'buff-msg');
  const cardEl = document.getElementById('msg');
  const rnd = rndGenerator(computerCards.length - 1);
  const computerCardsRnd = computerCards[rnd];
  let counter = 0;
  let computerAttack = 0;

  for (let i = 0; i < computerCards.length; i++) {
    const card = document.createElement('div');
    card.setAttribute('id', 'computer-' + i);
    card.style.transform = 'scale(0.7)';
    // addElementFn(computerDeck, card, 2500);
    // addElementFn(computerDeck, cardEl, 2500);

    if (computerCards[i].number > 10 && computerCards[i].number <= 15) {
      cardGenerator(card, computerCards[i]);

      if (computerCards[i].attack > 0) {
        playerObj.health -= computerCards[i].attack;
        counter++;
        if (counter === 0) {
          p.innerText = `Direct hit! -${computerCards[i].attack}`;
        } else {
          computerAttack += computerCards[i].attack;
        }

        setTimeout(() => {
          if (counter > 0) {
            p.innerText = `Barrage of attack! -${computerAttack}`;
          }
          updateHpBar(playerObj.health, playerObjCopy.health, 1);

          computerCards.splice(i, 1);
          computerRndArr.splice(i, 1);
        }, 1600);
        addElementFn(cardEl, p, 200);
        // elementRemoverFn(cardEl, p, 2000);
      } else {
        if (computerObj.health < computerObjCopy.health) {
          computerObj.health += computerCards[i].hp;
          p.innerText = `+${computerCards[i].hp} HP`;
          setTimeout(() => {
            if (computerObj.health > computerObjCopy.health) {
              updateHpBar(computerObj.health, computerObjCopy.health, 0);
            }
          }, 1600);
          addElementFn(cardEl, p, 200);
          elementRemoverFn(cardEl, p, 2000);
          computerCards.splice(i, 1);
          computerRndArr.splice(i, 1);
        } else {
          p.innerText = `Max HP. Card will be discarded`;
          addElementFn(cardEl, p, 200);
          // elementRemoverFn(cardEl, p, 2000);
          computerCards.splice(i, 1);
          computerRndArr.splice(i, 1);
        }
      }
      computerDeck.appendChild(card);
      computerDeck.appendChild(cardEl);
      elementRemoverFn(computerDeck, card, 2000);
    }
  }
  const card = document.createElement('div');
  card.setAttribute('id', 'computer-' + rnd);
  card.style.transform = 'scale(0.7)';

  if (computerCards[rnd].number <= 10 && computerCards[rnd].number > 15) {
    computerDeckObj.push(computerCards[rnd]);
    computerCards.splice(rnd, 1);
  }

  cardGenerator(card, computerCardsRnd);
  addElementFn(computerDeck, card, 2100);
  computerCardsEl.appendChild(card);
  addElementFn(cardEl, p, 2000);
  elementRemoverFn(cardEl, p, 2700);

  setTimeout(() => {
    player();
    playerObj.counter = 1;
  }, 3000);
};
