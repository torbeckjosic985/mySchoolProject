export function generateRandomCode(): string {
  const min = 1000;
  const max = 9999;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return `Your random code is ${randomNum}`;
}
