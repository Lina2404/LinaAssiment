//Write an Arrow Function to Return a Boolean if a number is divisible by 10

const isDivisibleBy10 = (number) => number % 10 === 0;

const number1 = 30;
const number2 = 17;

console.log(`${number1} is divisible by 10: ${isDivisibleBy10(number1)}`);
console.log(`${number2} is divisible by 10: ${isDivisibleBy10(number2)}`);

//(output:30 is divisible by 10: true
//17 is divisible by 10: false)