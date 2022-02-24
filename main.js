import createCard from "./objects/profileCard/index.js";

const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
    'beforeend',
    `
    ${createCard()}
`)