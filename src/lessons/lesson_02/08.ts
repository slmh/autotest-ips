// 8.	Доработать промис из задания 6, добавить опциональный 2-ой аргумент, 
// через который промис перейдет в состояние reject через 100 миллисекунд.

function functionPromise() {
    return new Promise((resolve,reject) => {

        setTimeout(
            () => {resolve('resolve')},
             1000,
        )

        setTimeout(
            () => {reject('reject')},
             100,
        )

    })
}

const t = functionPromise()
    .then((value) => {
        console.log(value)
    }).catch((error) =>  console.log(error))
