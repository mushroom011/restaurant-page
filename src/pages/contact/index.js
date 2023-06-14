import './style.css'

const contactLoad = () => {
    const content = document.querySelector('#content');
    const h1 = document.createElement('h1');
    const emailP = document.createElement('p');
    const poneP = document.createElement('p');
    const contactText = document.createElement('div');
    const contactContainer = document.createElement('div');

    h1.textContent = 'Contact us';
    poneP.textContent = '8-800-800-900-000';
    emailP.textContent = 'Awesome@pizza.com';

    contactContainer.classList.add('contact');
    contactText.classList.add('text');
    contactText.append(h1);
    contactText.append(poneP);
    contactText.append(emailP);
    contactContainer.append(contactText);
    content.replaceChildren(contactContainer);
}

export default contactLoad;
