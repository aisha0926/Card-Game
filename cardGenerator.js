const cardGenerator = (card, el) => {
  const cardWrapper = document.createElement('div');

  const imgContent = document.createElement('div');
  const overlay = document.createElement('span');
  const cardImage = document.createElement('div');
  const img = new Image();
  const cardContent = document.createElement('div');
  const name = document.createElement('h2');
  const description = document.createElement('p');
  const attackCircle = document.createElement('div');
  const defenseCircle = document.createElement('div');

  cardWrapper.appendChild(card);
  card.appendChild(imgContent);
  imgContent.appendChild(overlay);
  imgContent.appendChild(cardImage);
  cardImage.appendChild(img);
  card.appendChild(cardContent);
  name.classList.add('name');
  cardContent.appendChild(name);
  cardContent.appendChild(description);
  card.appendChild(attackCircle);
  card.appendChild(defenseCircle);

  name.innerText = el.name;
  description.innerText = el.description;
  img.setAttribute('src', el.img);
  card.setAttribute('class', 'card');

  cardContent.classList.add('card-content');
  cardWrapper.classList.add('card-wrapper');
  imgContent.classList.add('image-content');
  cardImage.classList.add('card-image');
  img.classList.add('card-img');
  overlay.classList.add('overlay');
  description.classList.add('description');
  cardImage.classList.add('card-image');
  attackCircle.innerHTML = `<p>${el.attack}</p>`;
  attackCircle.classList.add('attack-background');
  attackCircle.classList.add('attack-circle');
  defenseCircle.innerHTML = `<p>${el.hp}</p>`;
  defenseCircle.classList.add('defense-background');
  defenseCircle.classList.add('defense-circle');

  if (el.type <= 5) {
    card.classList.add('cards-attack');
    overlay.classList.add('attack-background');
    overlay.style.setProperty('--before-bg-color', '#c31432');
  } else if (el.number <= 10) {
    card.classList.add('cards-defense');
    overlay.classList.add('defense-background');
    overlay.style.setProperty('--before-bg-color', '#00d2ff');
  } else {
    card.classList.add('cards-buff');
    overlay.classList.add('buff-background');
    overlay.style.setProperty('--before-bg-color', '#11998e');
  }
};
