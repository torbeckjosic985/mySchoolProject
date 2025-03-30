function isPalindrome(str: string): boolean {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("No 'x' in Nixon")); // true
console.log(isPalindrome("Hello, World!")); // false
