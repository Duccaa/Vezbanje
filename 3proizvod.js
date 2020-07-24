/*
// Proizvod prvih 5 prirodnih brojeva.
let proizvod = 1;
let n = 5;
for(let i = 1; i <= n; i++) {
    proizvod *= i;
}
console.log(proizvod);

// Izračunati proizvod parnih prirodnih brojeva od 1 do 5.
let proizvod = 1;
let k = 1;
let n = 5;
for(; k <= n; k++) {
    if(k % 2 === 0) {
        proizvod *= k;
    }
}
console.log(proizvod);

// Izračunati proizvod neparnih prirodnih brojeva od 1 do 5.
let proizvod = 1;
let n = 1;
let m = 5;
for(; n <= m; n++) {
    if(n % 2 !== 0) {
        proizvod *= n;
    }
}
console.log(proizvod);

// Izračunati proizvod prirodnih brojeva u intervalu od 1 do n koji su djeljivi sa 3.
let proizvod = 1;
let n = 7;
for(let i = 1; i <= n; i++) {
    if(i % 3 === 0) {
        proizvod *= i;
    }
}
console.log(proizvod);

// Izračunati proizvod prirodnih brojeva u intervalu od 1 do n koji nisu djeljivi sa 3.
let proizvod = 1;
let n = 7;
for(let i = 1; i <= n; i++) {
    if(i % 3 !== 0) {
        proizvod *= i;
    }
}
console.log(proizvod);

// Izračunati proizvod brojeva od 1 do n koji su djeljivi sa a.
let proizvod  = 1;
let n = 15;
let a = 4;
for(let i = 1; i <= n; i++) {
    if(i % a === 0) {
        proizvod *= i;
    }
}
console.log(proizvod);

// Izračunati proizvod brojeva od 1 do n koji nisu djeljivi sa a.
let proizvod = 1;
let n = 4;
let a = 3;
for(let i = 1; i <= n; i++) {
    if(i % a !== 0) {
        proizvod *= i;
    }
}
console.log(proizvod);

// Napisati program za ispis proizvoda brojeva od 1 do n koji su djeljivi sa 3 i sa 4.
let proizvod = 1;
let n = 30;
for(let i = 1; i <= n; i++) {
    if(i % 3 === 0 && i % 4 === 0) {
        proizvod *= i;
    }
}
console.log(proizvod);

// Napisati program za ispis proizvoda brojeva od 1 do n čija je cifra jedinica 6.
let pr = 1;
let n = 27;
for(let i = 1; i <= n; i++) {
    if(i % 10 === 6) {
        pr *= i;
    }
}
console.log(pr);

// Napisati program za ispis proizvoda brojeva od 1 do n čija je cifra jedinica 3.
let pr = 1;
let n = 33;
for(let i = 1; i <= n; i++) {
    if(i % 10 === 3) {
        pr *= i;
    }
}
console.log(pr);

// Naći proizvod prirodnih brojeva u intervalu od k do n koji su deljivi sa 2 i sa 3.
let pr = 1;
let k = 2;
let n = 18;
for(; k <= n; k++) {
    if(k % 2 === 0 && k % 3 === 0) {
        pr *= k;
    }
}
console.log(pr);

// Naći proizvod prirodnih brojeva u intervalu od k do n koji su djeljivi sa 2 a nisu djeljivi sa 3.
let pr = 1;
let k = 1;
let n = 12;
for(; k <= n; k++) {
    if(k % 2 === 0 && k % 3 !== 0) {
        pr *= k;
    }
}
console.log(pr);

// Izračunati sumu i proizvod prirodnih brojeva od k do n. Koristiti jednu i dvije petlje. pr
let sum = 0;
let pr = 1;
let k = 3;
let n = 6;
for(; k <= n; k++) {
    sum += k;
    pr *= k;
}
console.log(sum, pr);
for(; k <= n; k++) {
    sum += k;
}
console.log(sum);
for(; k <= n; k++) {
    pr *= k;
}
console.log(pr);
*/
// Saberi i pomnoži prirodne brojeve do N koji su djeljivi sa 3.
let sum = 0;
let pr = 1;
let N = 10;
for(let i = 1; i <= N; i++) {
    if(i % 3 === 0) {
        sum += i;
        pr *= i;
    }
}
console.log(sum, pr);
