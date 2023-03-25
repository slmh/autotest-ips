let a: number = 2
let b: number = 3
console.log(a + b)


const age: number = 19

if (age < 18) {
    console.log('Страница не доступна')
} else {
    console.log('Страница доступна')
}




const age: number = Number(prompt('Совершеннолетний?', ''))

if (age < 18) {
    console.log('Страница не доступна')
} else {
    console.log('Страница доступна')
}

const temperature: number = Number(prompt('Что на градуснике?', ''))

if (temperature >= -10 && temperature < 10) {
    console.log('Холодно')
} else if (temperature >= 10 && temperature < 18) {
    console.log('Прохладно')
} else if (temperature >= 18 && temperature < 25) {
    console.log('Тепло')
} else if (temperature >= 25) {
    console.log('Жарко')
} else {
    console.log('Очень холодно')
}

let age: number = Number(prompt('Совершеннолетний?', ''))

let legalAge = age >= 18
    ? console.log('Страница доступна')
    : console.log('Страница не доступна');


let number: number = 0

while (number <= 2) {
    console.log(number++)
}


let number: number = 0

do {
    console.log(number++)
} while (number <= 2)


for (let i = 0; i <= 2; i++) {
    console.log(i)
}



function printSum(a: number) {
    console.log(a + a + a)
}

printSum(3)


let access = function () {
    let age: number = Number(prompt('Совершеннолетний?', ''))
    let legalAge = age >= 18
        ? console.log('Страница доступна')
        : console.log('Страница не доступна');
}
access()



