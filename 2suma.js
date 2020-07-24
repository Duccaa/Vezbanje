/*
// Suma prvih n prirodnih brojeva.
let n = 3;
let suma = 0;
for(let i = 1; i <= n; i++) {
    suma += i;
}
console.log(suma);

// Suma prirodnih brojeva od k do n.
let k = 6;
let n = 9;
let suma = 0;
for(k; k <= n; k++) {
    suma += k;
}
console.log(suma);

// Izračunati i ispisati sumu kvadrata prvih n prirodnih brojeva.
let n = 3;
let suma = 0;
for(i = 1; i <= n; i++) {
    suma += Math.pow(i,2);
}
console.log(suma);

// Izračunati i ispisati sumu kvadrata prirodnih brojeva od k do n.
let k = 3;
let n = 6;
let suma = 0;
for(k; k <= n; k++) {
    suma += Math.pow(k,2);
}
console.log(suma);

// Napisati program za ispis sume reciprocnih vrednosti prvih n prirodnih brojeva 
// (harmonijski niz: 1 + 1/2 + 1/3 + ... + 1/n)
let n = 5;
let suma = 0;
for(let i = 1; i <= n; i++) {
    suma += (1/i);
}
console.log(suma);

// Izračunati i ispisati sumu reciprocnih vrijednosti prirodnih brojeva od k do n.
let k = 3;
let n = 6;
let suma = 0;
for (k; k <= n; k++) {
    suma += (1/k);
}
console.log(suma);

// Suma neparnih prirodnih brojeva od 1 do n.
let n = 7;
let suma = 0; 
for (i = 1; i <= n; i++) {
    if(i % 2 !== 0) {
        suma += i;
    }
}
 console.log(suma);

// Suma parnih prirodnih brojeva od k do n.
let k = 3;
let n = 9;
let suma = 0;
for (;k <= n; k++) {
    if(k % 2 === 0) {
        suma += k;
    }
}
console.log(suma);

// Naći sumu brojeva u intervalu od a do b djeljivih sa 5.
let a = 3;
let b = 15;
let suma = 0;
for(; a <= b; a++) {
    if(a % 5 === 0) {
        suma += a
    }
}
console.log(suma)

// Izračunati sumu prirodnih brojeva u intervalu od 1 do n koji su djeljivi sa 7.i++
 let n = 22;
 let suma = 0;
 for(let i = 1; i <= n; i++) {
     if(i % 7 === 0) {
         suma += i;
     }
 }
 console.log(suma);

// Izračunati sumu prirodnih brojeva u intervalu od 1 do n koji nisu djeljivi sa 7.
let n = 9;
let suma = 0;
for(let i = 1; i <= n; i++) {
    if(i % 7 !== 0) {
        suma +=i;
    }
}
console.log(suma);

// Izračunati sumu prirodnih brojeva u intervalu od 1 do n koji su djeljivi sa 7 i sa 3.
let n = 50;
let suma = 0;
for(let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 7 === 0) {
        suma += i;
    }
}
console.log(suma);

// Izračunati sumu prirodnih brojeva u intervalu od 1 do n koji su djeljivi sa a.
let n = 6;
let a = 3;
let suma = 0;
for(let i = 1; i <= n; i++) {
    if(i % a === 0) {
        suma += i;
    }
}
console.log(suma);

// Izračunati sumu prirodnih brojeva u intervalu od 1 do n koji nisu djeljivi sa a.
let n = 11;
let a = 4;
let suma = 0;
for(let i = 1; i <= n; i++) {
    if(i % a !== 0)
    suma += i;
}
console.log(suma);

// Izračunati sumu prirodnih brojeva u intervalu od k do n koji su parni.
let suma = 0;
let k = 5;
let n = 13;
for(; k <= n; k++) {
    if(k % 2 === 0) {
        suma += k;
    }
}
console.log(suma);

// Izračunati sumu prirodnih brojeva u intervalu od k do n koji su neparni.
let suma = 0;
let k = 5;
let n = 13;
for(; k <= n; k++) {
    if(k % 2 !== 0) {
        suma += k;
    }
}
console.log(suma);

// Izračunati sumu prirodnih brojeva u intervalu od k do n koji su djeljivi sa a.
let suma = 0;
let k = 2;
let n = 10;
let a = 3;
for(; k <= 10; k++) {
    if (k % a === 0) {
        suma += k;
    }
}
console.log(suma);

// Izračunati sumu prirodnih brojeva u intervalu od k do n koji nisu djeljivi sa a.
let suma = 0;
let k = 3;
let n = 9;
let a = 3;
for(; k <= n; k++) {
    if(k % a !== 0) {
        suma += k;
    }
}
console.log(suma);

// Izračunati sumu prirodnih brojeva u intervalu od 1 do n čija je cifra jedinica 8.
let suma = 0;
let n = 38;
for(let i = 1; i <= n; i++) {
    if(i % 10 === 8) {
        suma += i;
    }
}
console.log(suma);

// Izračunati sumu prirodnih brojeva u intervalu od k do n čija je cifra jedinica 8.
let suma = 0;
let k = 7;
let n = 88;
for(; k <= n; k++) {
    if(k % 10 === 8) {
        suma += k;
    }
}
console.log(suma);
*/
// Napisati program za izračunavanje sume niza: 1 - 1/2 + 1/3 -+ ... -+ 1/n
let suma = 0;
let n = 12; 
let t = 1
for(let i = 1; i <= n; i++) {
    suma += t/i;
    t = -t;
} 
console.log(suma);
