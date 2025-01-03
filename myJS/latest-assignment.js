// Select the last accordion item
const accordionItems = document.querySelectorAll('.accordion-item');
const lastAccordionItem = accordionItems[accordionItems.length - 1];

// Get the body text
const lastBody = lastAccordionItem.querySelector('.accordion-body');
const bodyText = lastBody.innerText;

// Insert it
document.getElementById("latest-assignment__description").innerHTML = bodyText;

// I am ashamed of using AI to help me with this code

// Select last buttons
const pageButtons = document.querySelectorAll('.work-link__page');
const lastPageButton = pageButtons[pageButtons.length - 1];

const codeButtons = document.querySelectorAll('.work-link__code');
const lastCodeButton = codeButtons[codeButtons.length - 1];

// Get html
const lastPageInsert = lastPageButton.innerHTML;
const lastCodeInsert = lastCodeButton.innerHTML;

//Insert it too
document.getElementById("latest-assignment__page").innerHTML = lastPageInsert;
document.getElementById("latest-assignment__code").innerHTML = lastCodeInsert;
