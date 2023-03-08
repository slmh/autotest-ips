/*
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i)
    }
  }
  
  for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
      console.log(i)
    }
  }
  */

const arrayEvenNumbers: number[] = []
const arrayOddNumbers: number[] = []

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    arrayEvenNumbers.push()
  } else {
    arrayOddNumbers.push()
  }
}

const arrayAllNumbers: number[] =arrayEvenNumbers.concat(arrayOddNumbers)
console.log(arrayAllNumbers)




