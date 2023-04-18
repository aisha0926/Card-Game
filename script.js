import { btn } from './js/domElementsVariables.js';
import { player } from './js/playerMove.js';
import { computerMove } from './js/computerMove.js';
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

player();

btn.addEventListener('click', computerMove);
