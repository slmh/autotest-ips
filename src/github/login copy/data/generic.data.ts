export function randomLine(i: number) {
    let rnd = ''
    while (rnd.length < i) 
        rnd += Math.random().toString(36).substring(2)
    return rnd.substring(0, i)
}