let numbers = [1, 2, 3, 4, -5];

function sumUntilNegative(numbers) {
  let total = 0;

  for (const number of numbers) {
    if (number < 0) {
      break;
    }
    total += number;
  }
  return total;
}

let finalSum = sumUntilNegative(numbers);
console.log(finalSum);
