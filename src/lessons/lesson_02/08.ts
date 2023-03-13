// 8.	Доработать промис из задания 6, добавить опциональный 2-ой аргумент, 
// через который промис перейдет в состояние reject через 100 миллисекунд.

function akaPromise() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if 
            resolve('resolve')
        }, 100);
    })
}

akaPromise()
    .then((value) => {
        console.log(value)
    })
