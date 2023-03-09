// 	7.	Написать асинхронную функцию print(), которая будет печатать результат промиса из задания 6.

function akaPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolve')
        }, 1000);
    })
}

async function print() {
    const data = await akaPromise()
    console.log(data)
}

async function main() {
    await print()
}

main()
