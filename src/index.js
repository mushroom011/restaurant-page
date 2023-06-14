import homeLoad from "./pages/home";
import menuLoad from "./pages/menu";
import contactLoad from "./pages/contact";
import './style.css';

const MAP_BUTTON_TEXT_CALLBACK = new Map([
    ['Home', homeLoad], ['Menu', menuLoad], ['Contacts', contactLoad]]);

const createButton = (text, callback) => {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.addEventListener('click', callback);
    return btn;
}

const createFooter = () => {
    const footer = document.createElement('footer');
    const footerText = document.createElement('p');

    footerText.textContent = 'Copyright © Mushroom011';
    footer.append(footerText);
    return footer;
}

const header = document.createElement('header');
const body = document.querySelector('body');

body.append(createFooter());

MAP_BUTTON_TEXT_CALLBACK.forEach((callback, text) => {
    header.appendChild(createButton(text, callback));
});

body.prepend(header);
homeLoad();
