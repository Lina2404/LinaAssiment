//Calculate the sum of numbers within an array

function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += parseFloat(numbers[i]);
    }
    return sum;
}

let numbersArray = [1, 2, 3, 4, 5];

let sum = calculateSum(numbersArray);

console.log(`The sum of the numbers is: ${sum}`);

//(output:The sum of the numbers is: 15)