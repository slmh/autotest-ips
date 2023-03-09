// 	7.	Написать асинхронную функцию print(), которая будет печатать результат промиса из задания 6.

function promiseForResolve(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve('resolve'), 1000)
    })
}

async function print(): Promise<void> {
    const data: string = await promiseForResolve()
    console.log(data)
}

print()
