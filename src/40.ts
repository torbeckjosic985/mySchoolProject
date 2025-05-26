// mySchoolProject.ts

function addNumbers(a: number, b: number): number {
    return a + b;
}

function subtractNumbers(a: number, b: number): number {
    return a - b;
}

function multiplyNumbers(a: number, b: number): number {
    return a * b;
}

function divideNumbers(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
