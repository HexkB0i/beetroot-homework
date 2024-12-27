// Select the last accordion item
const accordionItems = document.querySelectorAll('.accordion-item');
const lastAccordionItem = accordionItems[accordionItems.length - 1];

// Get the body text
const lastBody = lastAccordionItem.querySelector('.accordion-body');
const bodyText = lastBody.innerText;

// Log the results
console.log('Body Text:', bodyText);
buttons.forEach((button, index) => {
  console.log(`Button ${index + 1}:`, button.textContent);
});

// Insert it
document.getElementById("latest-assignment__description").innerHTML = bodyText;

// I am ashamed of using AI to help me with this code