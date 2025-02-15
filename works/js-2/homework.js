'use strict';

alert("Welcome, please have a look at the answers to the latest homework");
alert("Be sure to check out the console for the tasks that do not require input");

// 1) Rounding floating points
let num1 = 0.1;
let num2 = 0.2;

let sum = num1 + num2;

console.log();
console.log('Floating point rounded:')
console.log(sum.toPrecision(1));

// 2) Adding strings to numbers 
let numString = '1', numInt = 2;

 function convertToNum(a) {
    if ( typeof a != 'number' ){
         return +a;
     }else{
        return a;
    };
 };

console.log();
console.log('Adding number and a string.');
console.log(convertToNum(numString) + convertToNum(numInt));

// 3) Disk space calculator
let userGb = +(prompt('Enter the size of your disk in Gb:'));
let diskSize =  userGb * 1000;
const fileSize = 820;

let fileNumber = Math.floor(diskSize / fileSize);

console.log();
console.log('Checked for the number of files fitting on the disk.');
console.log(`Your disk can fit ${fileNumber} copies of a 820 Mb file. Idk why you would want it though...`);
alert(`Your disk can fit ${fileNumber} copies of a 820 Mb file. Idk why you would want it though...`);

// 4) How much can you buy

function getUserBudget() {
    let money, price;
    do {
        if (money !== undefined && price !== undefined) { 
            alert("Invalid input! Please enter positive numbers only.");
        }

        money = +(prompt('Enter how much money you have:'));
        price = +(prompt('Enter the item price:'));
    } while (isNaN(money) || isNaN(price) || money <= 0 || price <= 0);
    return { money, price }; 
}

function calculateItemAmount() {
    let { money, price } = getUserBudget(); 
    return Math.floor(money / price);
};

let itemAmount = calculateItemAmount();
console.log(`You can buy ${itemAmount} items.`);
alert(`You can buy ${itemAmount} items.`);



// 5) reverse a number
let straightNum = prompt('Very well, now enter a number and I will reverse it:');
let straightNumArray = straightNum.split('');
let reverseNum = straightNumArray.reverse().join('');

console.log()
console.log(reverseNum);

let a =  0.2 + 0.1;
console.log(a)
