const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => resolve('resolve'), 1000)
    setTimeout(() => reject('reject'), 100)
})

async function print(): Promise<void> {
    try {
        console.log(await promise)
    } catch (error) {
        console.log(error)
    }
}

print()
