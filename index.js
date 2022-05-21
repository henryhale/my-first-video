/**
 * Print Funnction
 */
const print = console.log.bind(console);

/**
 * Convert Any Number into an Integer
 */
const toInteger = function (num) {
    let int = parseInt(num);
    return isNaN(int) ? num : int;
};

/**
 * Factorial Notation
 * 
 *    n! = n * (n-1)!
 *  
 *    but: 0! = 1
 */
const factorialLoop = function (num) {
  
  num = toInteger(num);

  let terms = [];
  let index = 0;
  // generation of list of preceding numbers
  while (index < num) {
    ++index; // increase to the next number
    terms.push(index); // store number in array `terms`
  }

  // now we multiply the numbers

  let product = 1; // minimum is 1

  while (index > 0) { // since now the `index` equals to `num`
    --index; // reduce by one
    // mapping the next term from the list
    // then multipy it
    product *= terms[index];
  }
  return product;
};

// Method two: Recursion
const factorial = function (num) {
  num = toInteger(num);
  if(!num || num === 0) {
    return 1; // minimum result from 0! = 1
  }
  // else
    // implement repeat of n!
      // n! = n * (n-1)!
  return num * factorial(num - 1);
};


/**
 * Multiple of Factorials of items in a list
 * 
 * e.g product of factorials of [1, 2, 3]
 *      = 1! * 2! * 3!
 *      = 1 * 2 * 6
 *      = 12
 * 
 */
const multiplyFactorialsOf = function (terms = []) {
  if (!terms || !terms.length) { // for emptiness or undefined
    // return factorial(terms.length); // 1
    return 1;
  }
  // esle
  return terms.reduce(function(prev, next, index){
    // first term in array
    // or the term is a zero
    if (index === 0 || prev === 0) { 
      return factorial(next); // return next term's factorial
    }
    // else
    // behave normally
    return prev * factorial(next);
    // for [1,2,3];
      // 1 is the first term when 0 === prev;
        // prev is undefined on first term
      // 1! * 2!
        // 1! * 2! * 3!
      // Done!
      //return 1!*2!*3! 
  });
};  
