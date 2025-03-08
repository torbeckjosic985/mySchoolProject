function getRandomInt(min: number, max: number): number {
  const minMax = Math.max(min, max);
  const minMin = Math.min(min, max);
  return Math.floor(Math.random() * (minMax - minMin)) + minMin;
}

function generateRandomTsCode(): string {
  const code: string[] = [];
  for (let i = 0; i < getRandomInt(1, 10); i++) {
    code.push(`const ${getRandomInt(1, 26).toLocaleUpperCase()}${getRandomInt(1, 10)}: number = ${getRandomInt(1, 100)};`);
  }
  return code.join('\n');
}
