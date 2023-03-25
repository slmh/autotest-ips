// 	7.	Написать асинхронную функцию print(), которая будет печатать результат промиса из задания 6.

const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve('resolve'), 1000)
})

async function print(): Promise<void> {
    const data: string = await promise
    console.log(data)
}

print()
