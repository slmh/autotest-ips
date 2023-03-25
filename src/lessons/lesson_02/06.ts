// 6.	Создать промис, который перейдет в состояние fulfilled через 1000 миллисекунд с текстом “resolve”.
// Для ожидания используйте стандартную функцию setTimeout()


const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve('resolve'), 1000)
})

