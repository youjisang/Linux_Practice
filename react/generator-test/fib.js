function* getFibonacci() {
    let a = 0
    let b = 1
    while (true) {
        [a, b] = [b, a + b]
        yield a
    }
}


const fib = getFibonacci()
for (const num of fib) {
    if (num > 50) break
    console.log(num)
}