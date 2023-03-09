// 6.	Создать промис, который перейдет в состояние fulfilled через 1000 миллисекунд с текстом “resolve”.
// Для ожидания используйте стандартную функцию setTimeout()

function akaPromise() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('resolve')
        }, 1000);
    })
}

akaPromise()
    .then((value) => {
        console.log(value)
    })
