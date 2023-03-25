
function functionPromise() {
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve('resolve'), 1000)
        setTimeout(() => reject('reject'), 100)
    })
}

functionPromise()
    .then(value => console.log(value))
    .catch(error => console.log(error))
