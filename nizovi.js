// 1. filtrirati samo pozitivne brojeve iz niza
// 2. filtrirati samo brojeve deljive sa 3 iz niza

let niz = [234, 123, -5, 532, - 32, 23]
let isDivisibleBy3 = niz.filter(num => num % 3 === 0)
console.log(isDivisibleBy3)
let positive = niz.filter(num => num > 0)
console.log(positive)
