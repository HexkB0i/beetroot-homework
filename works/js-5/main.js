// 3 methods of creating a function 
//      1) Declaration
//          function name(params) { code to execute };
//      2) Expression
//          let name = function(params){ code to execute };    -- these we can reference by another name like "let name2 = name";
//      3) Arrow function 
//          let mult = (n1, n2) => n1 * n2;



// Function that prints the number of its arguments
function argCount() {
    return arguments.length;
};

console.log(`\n Function that returns the number of arguments passed to it ('arg1', 10, null): ${argCount('arg1', 10, null)}`); // -- returns 3



// If-else function 
function compareNumbs(n1, n2) {
    if (n1 < n2) {
        return -1;
    }else if (n1 > n2){
        return 1;
    }else{
        return 0;
    };
};

console.log(`\n Function comparing numbers (one of the results): ${compareNumbs(10, 15)}`)



// Factorial with recursive function 
function factorial(n) {
    if (n === 1){
        return 1;
    }else{
        return n * factorial(n-1);
    };
};

console.log(`\n Fuction that returns factorial (5 in this case): ${factorial(5)}`)



// Number concatination function 
function concatNumbs(n1, n2, n3) {
    n1 = String(n1);
    n2 = String(n2);
    n3 = String(n3);

    return parseFloat(n1 + n2 + n3);
};

console.log(`\n Function that concatenates three digits passed to it as arguments (returns number type): ${concatNumbs(1, 5, 3)}`)


// Rectangle area calculation function 
function calcRectArea(side1, side2) {
    if (side1 === side2){
        return side1 ** 2;
    }else {
        return side1 * side2;
    };
};

console.log(`\n Functions that calculates rectangle's area by its sides (12, 5): ${calcRectArea(12, 5)}`);


// Perfect number identifying function 
function isPerfectNumb(number) {
    let divisorArr = [];
    for(let i = 1; i < number; i++){
        if (number % i === 0){
            divisorArr.push(i);     
        };
    };  
    let addedDivisors = divisorArr.reduce((acc, cur) => acc + cur, 0);

    if (addedDivisors === number){
        return true;
    }else{
        return false;
    };
};

// Function for findong perfect numbers in range
function findPerfectInRange(min, max) {
    let perfectArr = [];
    for(let i = min; i < max; i++){
        if(isPerfectNumb(i) === true){
            perfectArr.push(i);
        };
    };
    return perfectArr;
};

console.log(findPerfectInRange(1, 30))
