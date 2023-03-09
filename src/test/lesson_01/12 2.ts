const arrayEvenNumbers: number[] = []
const arrayOddNumbers: number[] = []

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    arrayEvenNumbers.push(i)
  } else {
    arrayOddNumbers.push(i)
  }
}

const arrayAllNumbers: number[] = [
  ...arrayEvenNumbers, 
  ...arrayOddNumbers,
]

console.log(arrayAllNumbers)
