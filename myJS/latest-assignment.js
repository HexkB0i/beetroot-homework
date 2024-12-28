// Select the last accordion item
const accordionItems = document.querySelectorAll('.accordion-item');
const lastAccordionItem = accordionItems[accordionItems.length - 1];

// Get the body text
const lastBody = lastAccordionItem.querySelector('.accordion-body');
const bodyText = lastBody.innerText;

// Insert it
document.getElementById("latest-assignment__description").innerHTML = bodyText;

// I am ashamed of using AI to help me with this code