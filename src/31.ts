function addTenToNumber(num: number): number {
  if (num < 0) {
    num = -num;
  }
  
  return num + 10;
}

// Example usage:
let result = addTenToNumber(-5);
console.log(result); // Output: -4
