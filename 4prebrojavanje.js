/*
//Prebrojati parne prirodne brojeve od 1 do 5.
let count = 0;
for(let i = 1, j = 5; i <= j; i++) {
    if(i % 2 ===0) {
        count++;
    }
}
console.log(count);

// Prebrojati neparne prirodne brojeve od 1 do 5.
let count = 0;
for(let i = 1; i <= 5; i++) {
    if(i % 2 !== 0) {
        count++;
    }
}
console.log(count);

// Prebrojati prirodne brojeve u intervalu od 1 do n koji su djeljivi sa 3.	
let count = 0;
let = 10;
for(let i = 1; i <= 10; i++) {
    if(i % 3 === 0) {
        count ++;
    }
}
console.log(count);

// Prebrojati prirodne brojeve u intervalu od 1 do n koji nisu djeljivi sa 3.
let br = 0;
let n = 12;
for(let i = 1; i <= n; i++) {
    if(i % 3 !== 0) {
        br++;
    }
}
console.log(br);

// Prebrojati prirodne brojeve u intervalu od 1 do n koji su djeljivi sa a.	
let count = 0;
let n = 16;
let a = 4;
for(let i = 1; i <= n; i++) {
    if(i % a === 0) {
        count ++;
    }
}
console.log(count);

// Prebrojati prirodne brojeve u intervalu od 1 do n koji nisu djeljivi sa a.
let count = 0;
let n = 11;
let a = 3;
for(let i = 1; i <= n; i++) {
    if(i % a !== 0) {
        count++;
    }
}
console.log(count);

// Prebrojati prirodne brojeve u intervalu od k do n.
let br = 0; 
let k = 3;
let n = 8;
for(; k <= n; k++) {
    br++;
}
console.log(br);

// Prebrojati parne prirodne brojeve u intervalu od k do n.
let br = 0;
let k = 4;
let n = 10;
for(; k <= n; k++) {
    if(k % 2 === 0) {
    br++
    }
}
console.log(br);

// Prebrojati neparne prirodne brojeve u intervalu od k do n.	
let count = 0;
let k = 3;
let n = 11;
for(; k <= n; k++) {
    if(k % 2 !== 0) {
        count++;
    }
}
console.log(count);

// Prebrojati prirodne brojeve u intervalu od k do n koji su djeljivi sa a.	
let br = 0;
let k = 2;
let n = 10;
let a = 3;
for(; k <= n; k++) {
    if(k % a === 0) {
        br++
    }
}
console.log(br);

// Prebrojati prirodne brojeve u intervalu od k do n koji nisu djeljivi sa a.
let br = 0;
let k = 5;
let n = 15;
let a = 4;
for(; k <= n; k++) {
    if(k % a !== 0) {
        br++;
    }
}
console.log(br);

// Napisati program da nađe proizvod prirodnih brojeva od a do b i koliko ih ima.
let proizvod = 1;
let a = 3;
let b = 7;
let count = 0;
for(; a <= b; a++) {
    proizvod *= a;
    count++;
}
console.log(`U intervalu od ${a} do ${b} ima ${count} brojeva, a njihov proizvod je: ${proizvod}`);

// Napisati program da nađe proizvod prirodnih brojeva od a do b djeljivih sa l i koliko ih ima.
let pr = 1;
let a = 2;
let b = 6;
let l = 2;
let br = 0;
for(; a <= b; a++) {
    if(a % 2 === 0) {
        pr *= a;
        br++;
    }
}
console.log(`U intervalu od ${a} do ${b} ima ${br} brojeva deljivih sa ${l}, a njihov proizvod iznosi: ${pr}.`)
*/
// Naći sumu brojeva u intervalu od a do b djeljivih sa l i koliko ih ima.
let suma = 0;
let a = 1;
let b = 11;
let l = 2;
let br = 0;
for(; a <= b; a++) {
    if(a % l === 0) {
        suma += a;
        br++;
    }
}
console.log(`U intervalu od ${a} do ${b} ima ${br} brojeva deljivih sa ${l}, a njihov zbir iznosi: ${br}.`)