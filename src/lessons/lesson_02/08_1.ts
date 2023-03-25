// 8.	Доработать промис из задания 6, добавить опциональный 2-ой аргумент, 
// через который промис перейдет в состояние reject через 100 миллисекунд.

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => resolve('resolve'), 1000)
    setTimeout(() => reject('reject'), 100)
})