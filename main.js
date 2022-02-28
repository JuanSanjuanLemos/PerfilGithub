import listDevs from "./objects/profileCard/addCard.js";

const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
    'beforeend',
    `
    ${listDevs}
`)