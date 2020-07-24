/*
// ispisati prirodne brojeve od 1 do 5

let n = 5;
for(let i = 1; i <= n; i++){
        console.log(i);
}

// ispisati prirodne brojeve od 5 do 20 unazad

let m = 5;
let v = 20;
for (m, v; m <= v; v--) {
    console.log(v);
}

// ispisati prirodne brojeve od 1 do 20 u obliku 1 2 3 4 5 ....20

let p = 1;
let d = 20;
let string = ' '
for(p, d; p <= d; p++) {
 string += p
}
console.log(string)

//napisati program za ispis dvostruke vrednosti prvih 5 prirodnih brojeva

let pr = 5;
for(let i = 1; i <= pr; i++) {
    console.log(2 * i);
}

//napisati program za ispis kvadrata prvih 5 prirodnih brojeva

let M = 5;
for(let i = 1; i <= M; i++) {
    console.log(Math.pow(i,2));
}

//napisati program za ispis kvadratnog korena prirodnih brojeva do 10

let N = 10;
for(let i = 1; i <= N; i++) {
    console.log(Math.sqrt(i));
}

//ispisati parne prirodne brojeve od 1 do 17

let i = 1;
let j = 17;
for(i, j; i <= j; i++) {
    if(i % 2 === 0)
    console.log(i)
}

//ispisati neparne prirodne brojeve od 1 do 17

let I = 1
let J = 17
for(I, J; I <= J; I += 2) {
    console.log (I)
}

//ispisati prirodne brojeve od 1 do 17 koji su deljivi sa 3

let i = 1;
let x = 17;
for(i, x; i <= x; i++) {
    if(i % 3 === 0) {
        console.log(i)   
    }
} 

//ispisati prirodne brojeve od 1 do 17 koji nisu deljivi sa 3

let I = 1;
let X = 17;
for(I, X; I <= X; I++) {
    if(I % 3 !== 0) {
        console.log(I)   
    }
} 

// Ispisati prirodne brojeve od 1 do 17 koji nisu djeljivi sa a.

let a = 5;
let m = 1;
let n = 17;
for(m, n; m <= n; m++) {
    if(m % a === 0) {
        console.log(m)
    }
}

// Napisati program za ispis recipročnih vrednosti prvih n prirodnih brojeva.

let n = 17;
for(let i = 1; i <= n; i++) {
    console.log(1/i)
}
*/
// Ispis paranih i neparnih prirodnih brojeva od 1 do n (test parnosti i neparnosti).

let n = 17;
for(let i = 1; i <= n; i++) {
    if(i % 2 === 0) {
        console.log(`Broj ${i} je paran`);
    } else {
        console.log(`Broj ${i} je neparan` )
    }
}
