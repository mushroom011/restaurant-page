import image from "../../img/pizza1.jpg";
import './style.css';

function createCard() {
    const img = document.createElement('img');
    const card = document.createElement('div');
    const cardTitle = document.createElement('h3');
    const cardText = document.createElement('p');

    card.classList.add('card');
    img.src = image;
    img.classList.add('card__image');
    cardTitle.textContent = 'Awesome pizza';
    cardText.textContent = 'An ultimate combination of your favourite ingredients';

    card.appendChild(img);
    card.appendChild(cardTitle);
    card.appendChild(cardText);

    return card;
}

const menuLoad = () => {
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const cardsContainer = document.createElement('div');

    for (let i = 0; i < 6; i++){
        cardsContainer.appendChild(createCard());
    }

    h1.textContent = 'Menu';
    cardsContainer.classList.add('cards');

    content.replaceChildren(h1, cardsContainer);
}

export default menuLoad;
