function calculateAverage(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("The array is empty.");
  }

  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum / numbers.length;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
console.log(calculateAverage(numbers)); // Output: 3
