function getRandomTsCode(): string {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const length = 20;
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
