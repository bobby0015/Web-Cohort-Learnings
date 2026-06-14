function print(fn: () => void) {
    setTimeout(fn, 1000)
}

function sum(a: number, b: number) {
    console.log(`The sum of ${a} and ${b} is ${a+b}`)
}

print(() => sum(2,2))