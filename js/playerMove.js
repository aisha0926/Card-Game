import getCards from './getCards.js';
import cardsData from './cardsData.js';
import cardGenerator from './cardGenerator.js';
import { rndArrayGenerator } from './rndGenerators.js';
import {
  playerDeck,
  computerDeck,
  cards,
  btn,
} from './domElementsVariables.js';
import updateHpBar from './updateHpBar.js';
import { elementRemoverFn, addElementFn } from './domElementManipulation.js';
import { computerObj, computerObjCopy } from './computerMove.js';

const playerRndArr = [];
const playerCardsPool = [];
const playerCards = [];
const playerDeckObj = [];

rndArrayGenerator(playerRndArr, 22, 12);
getCards(playerRndArr, cardsData, playerCardsPool);

export const getPlayerDeckObj = () => {
  return playerDeckObj;
};

export let playerObj = {
  health: 30,
  counter: 1,
  move: null,

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

export let playerObjCopy = { ...playerObj };

function cardsHandler(card, cardEl, el, index, p, test) {
  console.log(playerCards);
  if (playerObj.counter === 1) {
    if (el.number <= 10) {
      playerDeckObj.push(el);
    }

    cards.removeChild(card);

    playerDeck.append(card);
    card.style.transform = 'scale(0.7)';

    playerDeck.style.opacity = '1';
    computerDeck.style.opacity = '1';

    if (el.number > 10 && el.number <= 15) {
      // console.log(this);
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
    } else {
      playerObj.move = { this: test, element: el };
    }

    if (el.number <= 10 || el.number > 15) {
      playerObj.counter = 0;
      const cardsDirectChild = cards.querySelectorAll(':scope > *');
      cardsDirectChild.forEach((child) => {
        child.classList.remove('cards-hover');
      });
    }
  }
}

playerObj.generatePoolOfCards();

export const player = () => {
  btn.disabled = false;
  btn.innerText = 'End Turn';
  btn.removeAttribute('class');

  while (cards.firstChild) {
    cards.removeChild(cards.firstChild);
  }

  while (playerCards.length < 4) {
    playerObj.regenerateCards();
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

    card.addEventListener('click', function () {
      cardsHandler(card, cardEl, el, index, p, this);
    });
  });
};
