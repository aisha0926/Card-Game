const playerRndArr = [];
const computerRndArr = [];
const playerCards = [];
const computerCards = [];
const playerHealth = 100;
const computerHealth = 100;

// number, card name, description, attack and defence
const cardsData = {
  attack: [
    {
      number: 4,
      name: 'Chronos',
      description:
        'Summon Chronos, the god of time which has the ability to revert time.',
      attack: 5,
      defense: 1,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPxD8hQz2CqS8tMmWd4yE7IkbPwb6WwbKsZQ&usqp=CAU',
    },
    {
      number: 2,
      name: 'Chaos',
      description:
        'The god of the void. He was the beginning of all life. Chaor pre-existed all in Greek myths. Cause chaos upon your enemies and distort their mind.',
      attack: 6,
      defense: 3,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Lotto_Capoferri_Magnum_Chaos.jpg/220px-Lotto_Capoferri_Magnum_Chaos.jpg',
    },
    {
      number: 0,
      name: 'Aether',
      description:
        'The god of light. The spark of life for every creature. An attack made out of the highest and purest layer of air',
      attack: 10,
      defense: 10,
      img: 'http://3.bp.blogspot.com/-XgM7BEvpcTc/U6fBtdByr5I/AAAAAAAABOc/FOG91Q7kBJM/s1600/maleangel.jpg',
    },
    {
      number: 1,
      name: 'Eros',
      description: 'The god of love and procreation. ',
      attack: 2,
      defense: 1,
      img: 'https://i.pinimg.com/originals/01/78/81/0178818c1858b35096c557393e626ee5.jpg',
    },
    {
      number: 3,
      name: 'Nemesis',
      description:
        'Goddess of retribution has descended to deliver justice upon your foes.',
      attack: 3,
      defense: 3,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAucTzXCET5JTSHiNGJdMXdrhGpj_PsLndQ&usqp=CAU',
    },
  ],
  defense: [
    {
      number: 10,
      name: 'Pontus',
      description:
        'The god of the sea and father of the sea creatures. You received its blessing and can cast a water shield.',
      attack: 1,
      defense: 6,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYNBSnBKsDSzearwZSFn9Z_vN29EU7g60BOg21IZooghf7fb6hPcdqmDhNYRoNAEmk3g&usqp=CAU',
    },
    {
      number: 7,
      name: 'Zeus',
      description:
        'Behold! For a hero from another universe has been summoned.',
      attack: 2,
      defense: 4,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOecbB8-_Otnp4qOqBsGmkpSw69I5Rpf8YHN_SflEGstIjYMtSPrjKsi_7Diy74oc_UE&usqp=CAU',
    },
    {
      number: 8,
      name: 'Uranus',
      description:
        'The god of the heavens. He soon became ruler of the world and father of the Titans. You now have the ability to cast a defensive shield',
      attack: 3,
      defense: 8,
      img: 'https://i.pinimg.com/736x/da/fc/97/dafc97ebb275b2fd99cbf7ac14956835.jpg',
    },
    {
      number: 9,
      name: 'Ourea',
      description:
        'The gods of mountains has taken a liking to you, casting an ounce of its strength. You can now cast skin hardening skills',
      attack: 1,
      defense: 7,
      img: 'https://godsofgreekmythology.files.wordpress.com/2016/04/ourea1.jpg',
    },
    {
      number: 6,
      name: 'Hyperion',
      description:
        'Behold! For a hero from another universe has been summoned.',
      attack: 1,
      defense: 2,
      img: 'https://i1.sndcdn.com/artworks-xcSOOSPX8nqqOpqf-iC0AmA-t500x500.jpg',
    },
  ],
  buff: [
    {
      number: 11,
      name: 'The Beginning After The End',
      description:
        'King Grey, a king in a martial world became a sword in this world. You have been chosen to wield its power. Attack + 5',
      attack: 5,
      defense: 0,
      img: 'https://d30womf5coomej.cloudfront.net/sa/60/c43a00da-a369-45cf-ad75-7c6aa92e1600.jpg',
    },
    {
      number: 12,
      name: 'Noblesse',
      description:
        'Cadis Etrama Di Raizel the distant, mysterious yet charismatic vampire guardian sent his most loyal serval, Frankenstein to aid you. Attack + 10',
      attack: 10,
      defense: 0,
      img: 'https://pbs.twimg.com/profile_images/1293956725356126209/9DBV9Zr5_400x400.jpg',
    },
    {
      number: 13,
      name: 'Hive',
      description:
        "When the world teeters on the edge of an apocalypse brought in the form of giant, oxygen-doped killer bees who are seeking to reverse the food-chain. You've been chosen to be its defender. Defense + 10",
      attack: 0,
      defense: 10,
      img: 'https://i.pinimg.com/474x/7d/1a/56/7d1a5672d75588ee6c6c82a76ab9ef5f.jpg',
    },
    {
      number: 14,
      name: 'The Strongest Florist',
      description:
        'You have a fearsome presence to say the least; with a body built like a tank and an intimidating scowl. Defense + 8',
      attack: 0,
      defense: 8,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThpgXDC5LQnHr3Zyxw3LUhDp-6EtwDGXvxmw&usqp=CAU',
    },
    {
      number: 15,
      name: 'The Legend of the Northern Blade',
      description: 'Be one with the wind and gain its support. Defense + 4',
      attack: 0,
      defense: 4,
      img: 'https://static1.personality-database.com/profile_images/ae267a0e1ac541e6849182466d7794aa.png',
    },
  ],
};

// const rndGenerator = (arr, length, loop) => {
//   for (let i = 0; i < loop; i++) {
//     arr.push(Math.floor(Math.random() * length) + 1);
//   }
// };

// while (playerRndArr.length !== 4 && computerRndArr.length !== 4) {
//   rndGenerator(playerRndArr, 15, 4);
//   rndGenerator(computerRndArr, 15, 4);
// }

// const getCards = (outerArr, innerArr, arr) => {
//   for (let index of outerArr) {
//     if (index <= 5) {
//       for (let card of innerArr.attack) {
//         if (card.number === index) {
//           arr.push(card);
//         }
//       }
//     } else if (index <= 10) {
//       for (let card of innerArr.defense) {
//         if (card.number === index) {
//           arr.push(card);
//         }
//       }
//     } else if (index <= 15) {
//       for (let card of innerArr.buff) {
//         if (card.number === index) {
//           arr.push(card);
//         }
//       }
//     }
//   }
// };

playerRndArr.length === 4 && getCards(playerRndArr, cardsData, playerCards);
computerRndArr.length === 4 &&
  getCards(computerRndArr, cardsData, computerCards);

// const cards = document.getElementById('cards');
// const rightArrow = document.getElementById('righ');

playerCards.forEach((el, index) => {
  // const slideContent = document.createElement('div');
  const cardWrapper = document.createElement('div');
  const card = document.createElement('div');
  // card.setAttribute('id', 'card' + index);
  const imgContent = document.createElement('div');
  const overlay = document.createElement('span');
  const cardImage = document.createElement('div');
  const img = new Image();
  const cardContent = document.createElement('div');
  const name = document.createElement('h2');
  const description = document.createElement('p');
  const attackCircle = document.createElement('div');
  const defenseCircle = document.createElement('div');
  // const circleContainer = document.createElement('div');

  // cards.appendChild(slideContent);
  // slideContent.classList.add('slide-content');
  // slideContent.appendChild(cardWrapper);

  // card.classList.add('card');
  cardWrapper.appendChild(card);
  card.appendChild(imgContent);

  imgContent.appendChild(overlay);
  imgContent.appendChild(cardImage);
  cardImage.appendChild(img);

  card.appendChild(cardContent);
  name.classList.add('name');
  cardContent.appendChild(name);
  cardContent.appendChild(description);

  // card.appendChild(circleContainer);
  // attackCircle.innerHTML = `<img src="./assets/sword.png"/>`;

  card.appendChild(attackCircle);
  // defenseCircle.innerHTML = `<img src="./assets/shield.png"/>`;

  card.appendChild(defenseCircle);

  // console.log(card);
  // console.log(el);
  // console.log(el.number);
  // console.log(card.classList.add('cards-attack'));

  name.innerText = el.name;
  description.innerText = el.description;
  img.setAttribute('src', el.img);
  card.setAttribute('class', 'card');
  if (el.number <= 5) {
    console.log(1);
    card.classList.add('cards-attack');
  } else if (el.number <= 10) {
    card.classList.add('cards-defense');
    console.log(2);
  } else if (el.number <= 15) {
    card.classList.add('cards-buff');
    console.log(3);
  }

  cardContent.classList.add('card-content');
  cardContent.classList.add('card-content');
  cardWrapper.classList.add('card-wrapper');
  imgContent.classList.add('image-content');
  cardImage.classList.add('card-image');
  img.classList.add('card-img');
  overlay.classList.add('overlay');
  description.classList.add('description');
  cardImage.classList.add('card-image');
  attackCircle.innerHTML = `<p>${el.attack}</p>`;
  attackCircle.classList.add('attack-circle');
  defenseCircle.innerHTML = `<p>${el.defense}</p>`;
  defenseCircle.classList.add('defense-circle');

  cards.appendChild(card);

  card.addEventListener('click', () => {
    console.log(this);
  });
});

// console.log('playerCard---', playerRndArr);
// console.log('computerCard---', computerRndArr);
// playerCards.length !== 4 && getCards(playerRndArr, cardsData, playerCards);
// computerCards.length !== 4 &&
//   getCards(computerRndArr, cardsData, computerCards);
// getCards(computerRndArr, cardsData, computerCards);

// while (playerCards.length !== 4) {}

// console.log(playerCards.length);

// console.log(playerCards.length);
// console.log(computerCards.length);

// while (playerCards.length !== 4 && computerCards.length !== 4) {
//   getCards(playerRndArr, cardsData, playerCards);
//   getCards(computerRndArr, cardsData, computerCards);

//   if (playerCards.length === 4 && computerCards.length === 4) {
//     break;
//   }
// }
// for (let i = 0; i < playerRndArr.length; i++) {
//   if (playerCards.length !== 4 && computerCards.length !== 4) {
//     getCards(playerRndArr, cardsData, playerCards);
//     getCards(computerRndArr, cardsData, computerCards);
//   }
// }

// !Computer move
if (computerCards && computerCards.length > 0) {
  let rnd = Math.floor(Math.random() * computerCards.length);

  if (computerCards[rnd].number <= 5) {
    if (computerCards[rnd].defense > 0) {
      const playerMoveAttackCalc =
        playerMove.attack - computerCards[rnd].defense;
      const playerMoveDefCalc = playerMove.defense - computerCards[rnd].attack;

      if (playerMoveAttackCalc > 0) {
        computerStats.health -= playerMoveAttackCalc;
        console.log(playerMoveAttackCalc);
        console.log(playerMoveDefCalc);
        if (playerMoveDefCalc === 0) {
          computerCards.splice(rnd, 1);
          playerCards.splice(playerCardID, 1);
          cards.removeChild(playerCardEl);
        } else {
          console.log('Do something');
          if (playerMoveAttackCalc > 0 && playerMoveDefCalc > 0) {
            console.log(playerMove);
            // computerCards.splice(rnd, 1);
          }
        }
        // I'll need to remove the stats that's been used
      } else if (playerMoveAttackCalc === 0) {
        console.log('draw -- remove both cards');
        computerCards.splice(rnd, 1);
        playerCards.splice(playerCardID, 1);
        console.log('computerCards-----', computerCards);
        console.log('playerCards-----', playerCards);
        cards.removeChild(playerCardEl);
      } else {
        // If card still has defense left then card stays on the deck
        // The player attack card is destroyed
        console.log('ELSE', playerMove);
        if (playerMoveDefCalc === 0) {
          computerCards.splice(rnd, 1);
          playerCards.splice(playerCardID, 1);
          cards.removeChild(playerCardEl);
        } else {
          console.log('Do something');
          if (playerMoveAttackCalc > 0 && playerMoveDefCalc > 0) {
            console.log(playerMove);
            // computerCards.splice(rnd, 1);
          }
        }
      }
    } else if (computerCards[rnd].defense === 0) {
      computerStats.health =
        playerMove.attack -
        computerCards[rnd].attack -
        computerCards[rnd].health;
    }
  } else if (computerCards[rnd].number > 5 && computerCards[rnd].number <= 10) {
    let computerDefCalc = computerCards[rnd].defense - playerMove.attack;
    console.log(
      'elseif----',
      (computerStats.defense = computerCards[rnd].defense - playerMove.attack)
    );
    if (computerDefCalc < 0) {
      if (computerStats.defense <= 0) {
        computerStats.health += computerDefCalc;
      } else {
        console.log('computerStats-- else');
      }
    } else {
      cards.removeChild(playerCardEl);
    }
  } else {
    console.log('computer buff');
    computerStats.defense += computerCards[rnd].defense;
  }

  console.log('player move-----', playerMove);
  console.log('computer move ----', computerCards[rnd]);
  console.log('computer stats ------', computerStats);
  console.log('player stats stats ------', playerStats);
  console.log('computerCards-----', computerCards);
  console.log('playerCards-----', playerCards);
} else {
  console.log('computerCards is undefined or empty.');
}
/* ## BACKUP #### */
// const playerRndArr = [];
// const computerRndArr = [];
// const playerCards = [];
// const computerCards = [];

let playerStats = {
  health: 30,
};

let computerStats = {
  health: 30,
};

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
while (playerRndArr.length !== 4 && computerRndArr.length !== 4) {
  rndGenerator(playerRndArr, 15, 4);
  rndGenerator(computerRndArr, 15, 4);
}

/**
 * Function that loops through the randomly generated array, nested inside is the loop that loops through the object passed, after checking if the randomly generated array matches the object number, only then will it push the object in the specified array.
 * @param outerArr Randomly generated array
 * @param object Object that will be iterated through
 * @param arr Array that will contain matched elements (e.g. generated number === object number propert)
 */
const getCards = (outerArr, object, arr) => {
  for (let index of outerArr) {
    if (index < 6) {
      for (let card of object.attack) {
        if (card.number === index) {
          arr.push(card);
        }
      }
    } else if (index < 11) {
      for (let card of object.defense) {
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
getCards(playerRndArr, cardsData, playerCards);
getCards(computerRndArr, cardsData, computerCards);

const deck = document.getElementById('deck');

const cards = document.getElementById('cards');

const rightArrow = document.getElementById('righ');

const triggerTimeout = (parent, element, time) => {
  setTimeout(() => {
    parent.removeChild(element);
  }, time);
};

playerCards.forEach((el, index) => {
  const card = document.createElement('div');

  cardGenerator(card, el, index);
  card.setAttribute('id', 'player-' + index);
  cards.appendChild(card);

  card.addEventListener('click', playerMoveFn);
});

const computerMove = (playerMove, playerCardID, playerCardEl) => {
  let rnd = Math.floor(Math.random() * computerCards.length);
  const computerMove = computerCards[rnd];
  const playerAttCalc = playerMove.attack - computerMove.hp;
  const playerDefCalc = playerMove.hp - computerMove.attack;

  const card = document.createElement('div');
  card.setAttribute('class', 'computer-card');
  card.setAttribute('id', 'comp-' + rnd);
  cardGenerator(card, computerCards[rnd], rnd);
  deck.appendChild(card);

  const getAttribute = card.getAttribute('id');
  const cardElement = document.getElementById(getAttribute);

  console.log(rnd);
  console.log(playerAttCalc);
  console.log(computerMove);
  console.log(playerMove.attack);
  console.log(computerMove.hp);
  if (rnd <= 5) {
    if (computerMove.hp > 0) {
      if (playerAttCalc > 0) {
        computerStats.health -= playerAttCalc;
        computerCards.splice(rnd, 1);

        // triggerTimeout(deck, cardElement, 2000);
      } else if (playerAttCalc < 0) {
        // computer has more HP than player attack
        console.log('player att < 0');
        console.log((computerCards[rnd].hp += playerAttCalc));

        // triggerTimeout(cards, playerCardEl, 2000);
      } else {
        console.log('ELSE');

        if (playerAttCalc === 0) {
          triggerTimeout(cards, playerCardEl, 2000);
          triggerTimeout(deck, cardElement, 2000);
        }
      }
    }
  } else if (rnd <= 10) {
  } else if (rnd <= 15) {
    if (computerCards[rnd].attack > 0) {
      playerStats.health -= computerCards[rnd].attack;
      triggerTimeout(cards, playerCardEl, 2000);
    } else {
      computerStats.health += computerCards[rnd].hp;
      triggerTimeout(deck, cardElement, 2000);
    }
  }

  console.log('computermovenornd ---', computerCards);
  console.log('player move-----', playerMove);
  console.log('computer move ----', computerCards[rnd]);
  console.log('computer stats ------', computerStats);
  console.log('player stats stats ------', playerStats);
  console.log('computerCards-----', computerCards);
  console.log('playerCards-----', playerCards);
};

function playerMoveFn() {
  const idSplitter = +this.id.split('-')[1];

  if (this.classList[1] === 'cards-attack') {
    computerMove(playerCards[idSplitter], idSplitter, this);

    // console.log('attack');
  } else if (this.classList[1] === 'cards-defense') {
    computerMove(playerCards[idSplitter]);
    // console.log('defense');
  } else if (this.classList[1] === 'cards-buff') {
    computerMove(playerCards[idSplitter]);
    // console.log('buff');
    if (playerCards[idSplitter].attack > 0) {
      computerStats.health -= this.attack;
    } else {
      playerStats.health += this.hp;
    }
  }
}

/* 
const playerRndArr = [];
const computerRndArr = [];
const playerCards = [];
const computerCards = [];
let turnChecker = 0;

let playerStats = {
  health: 30,
};

let computerStats = {
  health: 30,
};

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
while (playerRndArr.length !== 4 && computerRndArr.length !== 4) {
  rndGenerator(playerRndArr, 15, 4);
  rndGenerator(computerRndArr, 15, 4);
}

/**
 * Function that loops through the randomly generated array, nested inside is the loop that loops through the object passed, after checking if the randomly generated array matches the object number, only then will it push the object in the specified array.
 * @param outerArr Randomly generated array
 * @param object Object that will be iterated through
 * @param arr Array that will contain matched elements (e.g. generated number === object number propert)
 */
const getCards = (outerArr, object, arr) => {
  for (let index of outerArr) {
    if (index < 6) {
      for (let card of object.attack) {
        if (card.number === index) {
          arr.push(card);
        }
      }
    } else if (index < 11) {
      for (let card of object.defense) {
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
getCards(playerRndArr, cardsData, playerCards);
getCards(computerRndArr, cardsData, computerCards);

const deck = document.getElementById('deck');

const cards = document.getElementById('cards');

const rightArrow = document.getElementById('righ');

const elementRemoverFn = (parent, element, time) => {
  setTimeout(() => {
    parent.removeChild(element);
  }, time);
};

const moveChecker = (playerMove, computerMove) => {
  // const computerMove = computerMoveObj.moveFn();
  // const playerMove = playerMoveFn();
  console.log(playerMove);
  console.log(computerMove);
};

const computerMoveObj = {
  rnd: null,
  move: null,
  setCardMove() {
    this.rnd = Math.floor(Math.random() * computerCards.length);
    this.move = computerCards[this.rnd];
  },
  moveFn() {
    return this.move;
  },
};

const playerMoveObj = {
  move: null,
  setCardMove(arg) {
    return;
  },
};

playerCards.forEach((el, index) => {
  const card = document.createElement('div');

  cardGenerator(card, el, index);
  card.setAttribute('id', 'player-' + index);
  cards.appendChild(card);

  card.addEventListener('click', playerMoveFn);
});

// const computerMoveFn = (playerMove, playerCardID, playerCardEl) => {
//   let rnd = Math.floor(Math.random() * computerCards.length);
//   const computerMove = computerCards[rnd];
//   const playerAttCalc = playerMove.attack - computerMove.hp;
//   const playerDefCalc = playerMove.hp - computerMove.attack;

//   const card = document.createElement('div');
//   card.setAttribute('class', 'computer-card');
//   card.setAttribute('id', 'comp-' + rnd);
//   cardGenerator(card, computerCards[rnd], rnd);
//   deck.appendChild(card);

//   const getAttribute = card.getAttribute('id');
//   const cardElement = document.getElementById(getAttribute);

//   console.log(rnd);
//   console.log(playerAttCalc);
//   console.log(computerMove);
//   console.log(playerMove.attack);
//   console.log(computerMove.hp);

//   if (computerMove.number <= 5) {
//     if (computerMove.hp > 0) {
//       if (playerAttCalc > 0) {
//         //   computerStats.health -= playerAttCalc;
//         //   computerCards.splice(rnd, 1);
//         //   // elementRemoverFn(deck, cardElement, 2000);
//         // } else if (playerAttCalc < 0) {
//         //   // computer has more HP than player attack
//         //   console.log('player att < 0');
//         //   console.log((computerCards[rnd].hp += playerAttCalc));
//         //   // elementRemoverFn(cards, playerCardEl, 2000);
//         // } else {
//         //   console.log('ELSE');
//         //   if (playerAttCalc === 0) {
//         //     elementRemoverFn(cards, playerCardEl, 2000);
//         //     elementRemoverFn(deck, cardElement, 2000);
//         //   }
//       } else if (playerAttCalc < 0) {
//         console.log('<0');
//       }
//     }
//   } else if (computerMove.number <= 10) {
//   } else if (computerMove.number <= 15) {
//     if (computerCards[rnd].attack > 0) {
//       playerStats.health -= computerCards[rnd].attack;
//       elementRemoverFn(deck, cardElement, 2000);
//     } else {
//       computerStats.health += computerCards[rnd].hp;
//       elementRemoverFn(deck, cardElement, 2000);
//     }
//   }

//   console.log('computermovenornd ---', computerCards);
//   console.log('player move-----', playerMove);
//   console.log('computer move ----', computerCards[rnd]);
//   console.log('computer stats ------', computerStats);
//   console.log('player stats stats ------', playerStats);
//   console.log('computerCards-----', computerCards);
//   console.log('playerCards-----', playerCards);
// };

/*
function playerMoveFn() {
  const idSplitter = +this.id.split('-')[1];

  if (this.classList[1] === 'cards-attack') {
    // console.log(this);

    // computerMoveObj.moveFn();
    // computerMoveFn(playerCards[idSplitter], idSplitter, this);

    // console.log('attack');

    moveChecker(this, null);
  } else if (this.classList[1] === 'cards-defense') {
    // computerMoveFn(playerCards[idSplitter]);
    // console.log('defense');
  } else if (this.classList[1] === 'cards-buff') {
    // computerMoveFn(playerCards[idSplitter]);
    // console.log('buff');
    if (playerCards[idSplitter].attack > 0) {
      computerStats.health -= this.attack;
    } else {
      playerStats.health += this.hp;
    }
  }
}


*/

// !NEW
const playerRndArr = [];
const computerRndArr = [];
const playerCards = [];
const computerCards = [];
let turnChecker = 0;

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
while (playerRndArr.length !== 4 && computerRndArr.length !== 4) {
  rndGenerator(playerRndArr, 15, 4);
  rndGenerator(computerRndArr, 15, 4);
}

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
getCards(playerRndArr, cardsData, playerCards);
getCards(computerRndArr, cardsData, computerCards);

const deck = document.getElementById('deck');
const playerDeck = document.getElementById('player-deck');
const computerDeck = document.getElementById('computer-deck');

const cards = document.getElementById('cards');

const btn = document.querySelector('button');

const elementRemoverFn = (parent, element, time) => {
  setTimeout(() => {
    parent.removeChild(element);
  }, time);
};
const addElementFn = (parent, element, time) => {
  setTimeout(() => {
    parent.appendChild(element);
  }, time);
};

let computerObj = {
  health: 30,
  rnd: null,
  move: null,
  element: null,
  setTurnChecker() {
    turnChecker = 1;
  },

  moveFn() {
    this.rnd = Math.floor(Math.random() * computerCards.length);
    this.move = computerCards[this.rnd];
    return this.move;
  },

  createCard() {
    const card = document.createElement('div');
    card.setAttribute('id', 'computer-' + this.rnd);
    card.style.transform = 'scale(0.7)';

    cardGenerator(card, this.move, this.rnd);
    addElementFn(computerDeck, card, 2000);

    this.element = card;
  },
};

let playerObj = {
  health: 30,

  setTurnChecker() {
    turnChecker = 0;
  },
};

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

// function updateHpBar(currentHp, maxHp, turn) {
//   const hpBarInner = document.querySelectorAll('.hp-bar-inner');
//   const percentage = (currentHp / maxHp) * 100;

//   console.log(hpBarInner);

//   turn === 0 && (hpBarInner[0].style.width = percentage + '%');
//   turn === 1 && (hpBarInner[1].style.width = percentage + '%');
// }

const playerMove = (arg) => {
  const p = document.createElement('p');
  p.setAttribute('class', 'buff-msg');

  if (arg.el.number <= 10) {
    console.log(arg);
    console.log(arg.this);
  } else {
    if (arg.el.attack > 0) {
      p.innerText = `Direct hit! -${arg.el.attack}`;
      computerObj.health -= arg.el.attack;
      // elementRemoverFn(playerDeck, arg.this, 2000);
    } else {
      p.innerText = `+${arg.el.health}`;
      playerObj.health += arg.el.health;
      // elementRemoverFn(playerDeck, arg.this, 1000);
    }
  }
  cardGenerator(arg.this, p, arg.index);
};
const computerMove = (arg) => {
  console.log(arg);
};

// const gameMoveFn = (playerMove, computerMove) => {
//   console.log(playerMove);
//   console.log(computerMove);

//   console.log('playerMove.el.attack----', playerMove.el.attack);
//   console.log('computerMove.el.hp----', computerMove.el.hp);

//   // console.log('computerMove.el.attack', computerMove.el.attack);
//   // console.log('playerMove.el.hp'), playerMove.el.hp;
//   const playerMoveCalc = playerMove.el.attack - computerMove.el.hp;
//   const computerMoveCalc = computerMove.el.attack - playerMove.el.hp;

//   console.log(computerObj.element);
//   // check if both placed an attack card
//   // => playerAtt - computerCardHP, if playerAttk > computerCardHP => remainingPlayerAttk - computerHP
//   if (playerMove.el.number <= 10 && computerMove.el.number <= 10) {
//     if (turnChecker === 0) {
//       console.log('playerMoveCalc---', playerMoveCalc);
//       console.log('computerMoveCalc---', computerMoveCalc);

//       if (playerMoveCalc === 0) {
//         console.log('Test');
//         // Remove comp card
//         if (computerMoveCalc === 0) {
//           elementRemoverFn(playerDeck, playerMove.this, 2000);

//           // elementRemoverFn(computerDeck, computerObj.element, 2000);
//         } else if (computerMoveCalc > 0) {
//         } else if (computerMoveCalc < 0) {
//         }
//       }

//       if (playerMoveCalc > 0) {
//         // player has more attack than computer hp
//         computerObj.health -= playerMoveCalc;

//         if (computerMoveCalc === 0) {
//         } else if (computerMoveCalc > 0) {
//           // player has more attk than computer hp
//           playerObj.health -= computerMoveCalc;
//           updateHpBar(15, 30, 0);
//           // destroy comp card
//           // elementRemoverFn(computerDeck, );
//         } else if (computerMoveCalc < 0) {
//           // player has more hp then computer attack
//           reAssignNewCardsFn(
//             playerCards,
//             playerMove.index,
//             '+=',
//             computerMoveCalc
//           );
//         }
//       } else if (playerMoveCalc < 0) {
//         // computer has more hp than the attack
//         // get the obj index in the array and assign it a new value

//         reAssignNewCardsFn(
//           computerCards,
//           computerMove.index,
//           '+=',
//           playerMoveCalc
//         );

//         if (computerMoveCalc === 0) {
//           // playerCards.splice(playerMove.index, 1);
//           console.log(playerMove.this);
//         } else if (computerMoveCalc > 0) {
//           // computer has more attack
//           playerObj.health -= computerMoveCalc;

//           playerCards.splice(playerMove.index, 1);
//           playerDeck.removeChild(playerMove.this);

//           // elementRemoverFn( );
//         } else if (computerMoveCalc < 0) {
//           // player has more hp than computer attk
//         }
//         // console.log((computerCards[computerMove.index].hp += playerMoveCalc));
//       } else {
//         console.log('Player attack and computer card HP are equal.');
//         console.log(playerMoveCalc);
//       }
//     }
//   } else {
//     console.log('test');
//     // check which one has a buff card
//   }
// };

// const gameMoveFn = (playerMove, computerMove) => {
//   return { playerMove: playerMove, computerMove: computerMove };
// };

playerCards.forEach((el, index) => {
  const card = document.createElement('div');

  card.setAttribute('id', 'player-' + index);
  cardGenerator(card, el, index);
  cards.appendChild(card);

  card.addEventListener('click', function () {
    const playerCardObj = {
      el: el,
      index: index,
      this: this,
    };
    // const computerCardObj = {
    //   el: computerObj.moveFn(),
    //   index: computerObj.rnd,
    //   this: computerObj.element,
    // };
    // console.log('computerCardObj --------', computerCardObj);
    // gameMoveFn(playerCardObj, computerCardObj);
    console.log(this);
    playerMove(playerCardObj);
    cards.removeChild(this);

    playerDeck.append(this);
    card.style.transform = 'scale(0.7)';

    playerDeck.style.opacity = '1';
    computerDeck.style.opacity = '1';
  });
});

const testFn = () => {
  const computerCardObj = {
    el: computerObj.moveFn(),
    index: computerObj.rnd,
    this: computerObj.element,
  };
  console.log('BTN CLICKED');
  computerObj.createCard();

  computerMove(computerCardObj);
};

btn.addEventListener('click', testFn);

/* 

if (computerMoveCalc > 0) {
  console.log(computerMoveCalc);
  const newCard = {
    ...playerCards[playerMove.index],
    hp: (playerCards[playerMove.index].hp -= computerMoveCalc),
          };
          playerCards[playerMove.index] = newCard;
          // console.log(newCard);
        } else {
          const newCard = {
            ...playerCards[playerMove.index],
            hp: (playerCards[playerMove.index].hp += computerMoveCalc),
          };
          playerCards[playerMove.index] = newCard;
          // console.log(newCard);
          // console.log(playerCards);
        }
        */

// Check if both moved a def card
// check if both moved buff card
// check if player moved attack and computer moved def
// check if player moved attack and computer moved buff
// check if player moved def and computer moved att
// check if player moved def and computer moved buff
// check if player moved buff and computer moved att
// check if player moved buff and computer moved def

// !WORKING COPY

const playerRndArr = [];
const computerRndArr = [];
const playerCards = [];
const computerCards = [];
let turnChecker = 0;

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
while (playerRndArr.length !== 4 && computerRndArr.length !== 4) {
  rndGenerator(playerRndArr, 15, 4);
  rndGenerator(computerRndArr, 15, 4);
}

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
getCards(playerRndArr, cardsData, playerCards);
getCards(computerRndArr, cardsData, computerCards);

const deck = document.getElementById('deck');
const playerDeck = document.getElementById('player-deck');
const computerDeck = document.getElementById('computer-deck');

const cards = document.getElementById('cards');

const btn = document.querySelector('button');

const elementRemoverFn = (parent, element, time) => {
  setTimeout(() => {
    parent.removeChild(element);
  }, time);
};
const addElementFn = (parent, element, time) => {
  setTimeout(() => {
    parent.appendChild(element);
  }, time);
};

let computerObj = {
  health: 30,
  rnd: null,
  move: null,
  element: null,
  setTurnChecker() {
    turnChecker = 1;
  },

  moveFn() {
    this.rnd = Math.floor(Math.random() * computerCards.length);
    this.move = computerCards[this.rnd];
    return this.move;
  },

  createCard() {
    const card = document.createElement('div');
    card.setAttribute('id', 'computer-' + this.rnd);
    card.style.transform = 'scale(0.7)';

    cardGenerator(card, this.move, this.rnd);
    addElementFn(computerDeck, card, 2000);

    this.element = card;
  },
};

let playerObj = {
  health: 30,

  setTurnChecker() {
    turnChecker = 0;
  },
};

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

// function updateHpBar(currentHp, maxHp, turn) {
//   const hpBarInner = document.querySelectorAll('.hp-bar-inner');
//   const percentage = (currentHp / maxHp) * 100;

//   console.log(hpBarInner);

//   turn === 0 && (hpBarInner[0].style.width = percentage + '%');
//   turn === 1 && (hpBarInner[1].style.width = percentage + '%');
// }

const playerMove = () => {};
const computerMove = () => {};

const gameMoveFn = (playerMove, computerMove) => {
  console.log(playerMove);
  console.log(computerMove);

  console.log('playerMove.el.attack----', playerMove.el.attack);
  console.log('computerMove.el.hp----', computerMove.el.hp);

  // console.log('computerMove.el.attack', computerMove.el.attack);
  // console.log('playerMove.el.hp'), playerMove.el.hp;
  const playerMoveCalc = playerMove.el.attack - computerMove.el.hp;
  const computerMoveCalc = computerMove.el.attack - playerMove.el.hp;

  console.log(computerObj.element);
  // check if both placed an attack card
  // => playerAtt - computerCardHP, if playerAttk > computerCardHP => remainingPlayerAttk - computerHP
  if (playerMove.el.number <= 10 && computerMove.el.number <= 10) {
    if (turnChecker === 0) {
      console.log('playerMoveCalc---', playerMoveCalc);
      console.log('computerMoveCalc---', computerMoveCalc);

      if (playerMoveCalc === 0) {
        console.log('Test');
        // Remove comp card
        if (computerMoveCalc === 0) {
          elementRemoverFn(playerDeck, playerMove.this, 2000);

          // elementRemoverFn(computerDeck, computerObj.element, 2000);
        } else if (computerMoveCalc > 0) {
        } else if (computerMoveCalc < 0) {
        }
      }

      if (playerMoveCalc > 0) {
        // player has more attack than computer hp
        computerObj.health -= playerMoveCalc;

        if (computerMoveCalc === 0) {
        } else if (computerMoveCalc > 0) {
          // player has more attk than computer hp
          playerObj.health -= computerMoveCalc;
          updateHpBar(15, 30, 0);
          // destroy comp card
          // elementRemoverFn(computerDeck, );
        } else if (computerMoveCalc < 0) {
          // player has more hp then computer attack
          reAssignNewCardsFn(
            playerCards,
            playerMove.index,
            '+=',
            computerMoveCalc
          );
        }
      } else if (playerMoveCalc < 0) {
        // computer has more hp than the attack
        // get the obj index in the array and assign it a new value

        reAssignNewCardsFn(
          computerCards,
          computerMove.index,
          '+=',
          playerMoveCalc
        );

        if (computerMoveCalc === 0) {
          // playerCards.splice(playerMove.index, 1);
          console.log(playerMove.this);
        } else if (computerMoveCalc > 0) {
          // computer has more attack
          playerObj.health -= computerMoveCalc;

          playerCards.splice(playerMove.index, 1);
          playerDeck.removeChild(playerMove.this);

          // elementRemoverFn( );
        } else if (computerMoveCalc < 0) {
          // player has more hp than computer attk
        }
        // console.log((computerCards[computerMove.index].hp += playerMoveCalc));
      } else {
        console.log('Player attack and computer card HP are equal.');
        console.log(playerMoveCalc);
      }
    }
  } else {
    console.log('test');
    // check which one has a buff card
  }
};

playerCards.forEach((el, index) => {
  const card = document.createElement('div');

  cardGenerator(card, el, index);
  card.setAttribute('id', 'player-' + index);
  cards.appendChild(card);

  card.addEventListener('click', function () {
    const playerCardObj = {
      el: el,
      index: index,
      this: this,
    };
    // const computerCardObj = {
    //   el: computerObj.moveFn(),
    //   index: computerObj.rnd,
    //   this: computerObj.element,
    // };
    // // console.log('computerCardObj --------', computerCardObj);
    // gameMoveFn(playerCardObj, computerCardObj);

    cards.removeChild(card);

    playerDeck.append(card);
    card.style.transform = 'scale(0.7)';

    playerDeck.style.opacity = '1';
    computerDeck.style.opacity = '1';
  });
});

const testFn = () => {
  console.log('BTN CLICKED');
  computerObj.createCard();
};

btn.addEventListener('click', testFn);


// !NEWEST CODE

const playerRndArr = [];
const computerRndArr = [];
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
while (playerRndArr.length !== 4 && computerRndArr.length !== 4) {
  rndGenerator(playerRndArr, 15, 4);
  rndGenerator(computerRndArr, 15, 4);
}

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
getCards(playerRndArr, cardsData, playerCards);
getCards(computerRndArr, cardsData, computerCards);

const deck = document.getElementById('deck');
const playerDeck = document.getElementById('player-deck');
const computerDeck = document.getElementById('computer-deck');

const cards = document.getElementById('cards');

const btn = document.querySelector('button');

const elementRemoverFn = (parent, element, time) => {
  setTimeout(() => {
    parent.removeChild(element);
  }, time);
};
const addElementFn = (parent, element, time) => {
  setTimeout(() => {
    parent.appendChild(element);
  }, time);
};

let computerObj = {
  health: 30,
  rnd: null,
  move: null,
  cardsPlaced: 4,

  moveFn() {
    this.rnd = Math.floor(Math.random() * computerCards.length);
    this.move = computerCards[this.rnd];
    return this.move;
  },
};

let playerObj = {
  health: 30,
  cardsPlaced: 4,
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

const generateCards = () => {
  const playerCardCount = cards.childElementCount;
  // const computerCardCount =
  // Ensure that RND elements are removed as well
  // Check how many elements in the RND arrays
  if (playerObj.health > 0 || computerObj.health > 0) {
    let counter = 0;
    while (playerCardCount !== 4) {
      counter++;

      if (playerCardCount === 4) {
        break;
      }
    }

    console.log(counter);
    console.log(playerCardCount);

    // setTimeout(() => {
    //   rndGenerator(playerRndArr, 15, counter);
    //   rndGenerator(computerRndArr, 15, counter);
    // }, 500);

    // getCards(playerRndArr, cardsData, playerCards);
    // getCards(computerRndArr, cardsData, computerCards);
  }
  console.log('--------GENERATE CARDS---------');
  console.log('PLAYER RND : ', playerRndArr);
  console.log('COMP RND : ', computerRndArr);
};

// const playerMove = (arg) => {
//   const p = document.createElement('p');
//   p.setAttribute('class', 'buff-msg');
//   p.classList.add('player-msg');
//   const cardEl = document.getElementById('msg');

//   if (arg.el.number <= 10) {
//     console.log(arg);
//     console.log(arg.this);
//   } else {
//     if (arg.el.attack > 0) {
//       computerObj.health -= arg.el.attack;

//       p.innerText = `Direct hit! -${arg.el.attack}`;
//       updateHpBar(computerObj.health, computerObjCopy.health, 0);
//     } else {
//       playerObj.health += arg.el.hp;

//       if (playerObj.health > playerObjCopy.health) {
//         p.innerText = `+${arg.el.hp} HP`;
//         updateHpBar(playerObj.health, playerObjCopy.health, 1);
//       }
//     }
//     elementRemoverFn(playerDeck, arg.this, 2000);
//     playerCards.splice(arg.index, 1);
//     playerRndArr.splice(arg.index, 1);
//   }

//   cardEl.appendChild(p);
//   elementRemoverFn(cardEl, p, 2000);
//   // generateCards();
// };

const computerMove = () => {
  btn.disabled = true;
  btn.setAttribute('class', 'disabled');
  const p = document.createElement('p');
  p.setAttribute('class', 'buff-msg');
  const cardEl = document.getElementById('msg');

  for (let i = 0; i < computerCards.length; i++) {
    if (computerCards[i].number > 10) {
      const cardEl = document.createElement('div');
      cardEl.setAttribute('id', 'computer-' + i);
      cardEl.style.transform = 'scale(0.7)';

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

const player = () => {
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
      const playerCardObj = {
        el: el,
        index: index,
        this: this,
        id: 'player-' + index,
      };

      playerObj.cardsPlaced -= 1;

      cards.removeChild(card);

      playerDeck.append(card);
      card.style.transform = 'scale(0.7)';

      playerDeck.style.opacity = '1';
      computerDeck.style.opacity = '1';

      // playerMove(playerCardObj);
      if (el.number <= 10) {
        console.log(this);
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
        elementRemoverFn(playerDeck, this, 2000);
        playerCards.splice(index, 1);
        playerRndArr.splice(index, 1);
      }

      cardEl.appendChild(p);
      elementRemoverFn(cardEl, p, 2000);
    });
  });

  if () {
    
  }
};
player();

// console.log('---------COMPUTER-------');
// console.log('RND : ', computerRndArr);
// console.log('CARDS : ', computerCards);
// console.log('---------PLAYER-------');
// console.log('RND : ', playerRndArr);
// console.log('CARDS : ', playerCards);

btn.addEventListener('click', computerMove);
