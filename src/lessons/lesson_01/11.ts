type Operation = (a: number, b: number) => number
 
function calc(x: number, y: number, callback: Operation): number {
    return callback(x, y)
}

const sum: Operation = (x, y) => x + y
const sub: Operation = (x, y) => x - y
const mul: Operation = (x, y) => x * y
const divi: Operation = (x, y) => x / y

console.log(calc(1, 2, sum))
console.log(calc(1, 2, sub))
console.log(calc(1, 2, mul))
console.log(calc(1, 2, divi))