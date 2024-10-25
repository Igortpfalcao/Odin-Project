const add = function(n1, n2) {
    return(n1 + n2);
	
};

const subtract = function(n1, n2) {
    return(n1 - n2);
	
};

const sum = function(array) {
	computedTotal = array.reduce((total, currentNumber) => {return total + currentNumber}, 0);
    return(computedTotal);
};

const multiply = function(array) {
    computedTotal = array.reduce((total, currentNumber) => {return total * currentNumber}, 1);
    return(computedTotal);

};

const power = function(n, expoent) {
    let result = n;
	for(let i = 1; i < expoent; i++){
        result = result * n;
    }
    return(result);
};

const factorial = function(n) {
    if(n == 1 || n == 0){
        return 1;
    }
    let current = 1;
    let factorial = n;
    for(current; current < n; current++){
        factorial = factorial * (n - current);
    }
    return(factorial);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};