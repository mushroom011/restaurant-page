import './style.css';

const homeLoad = () => {
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const homeContent = document.createElement('div');
    const homeText = document.createElement('div');

    h1.textContent = 'Awesome pizza';
    p.textContent = 'Here is a really good pizza restaurant';

    homeText.classList.add('text');
    homeContent.classList.add('home-content');
    homeText.append(h1, p);
    homeContent.append(homeText);
    content.replaceChildren(homeContent);
}

export default homeLoad;
