function getRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// uniq string
function getRandomString(length: number): string {
    let rnd = ''
    while (rnd.length < length) 
        rnd += Math.random().toString(36).substring(2)
    return rnd.substring(0, length)
}

console.log(getRandomString(10))


// uniq 
function getRandomString(length: number): string {
    let rnd = ''
    while (rnd.length < length) 
        rnd += Math.random().toString(36).substring(2)
    return rnd.substring(0, length)
}

console.log(getRandomString(10))