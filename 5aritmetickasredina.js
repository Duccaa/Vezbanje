/*
//Izračunati aritmetičku sredinu prirodnih brojeva od k do n.
let suma = 0;
let k = 1;
let n = 11;
let br = 0;
for(; k <= n; k++) {
    suma += k;
    br ++;
}
let as = suma / br;
console.log(as);

//Izračunati aritmetičku sredinu neparnih prirodnih brojeva od k do n.	
let s = 0;
let k = 1;
let n = 11;
let br = 0;
for(; k <= n; k++) {
    if(k % 2 !== 0) {
        s += k;
        br++;
    }
}
let as = s / br;
console.log(as);

//Izračunati aritmetičku sredinu parnih prirodnih brojeva od k do n.
let s = 0;
let k = 1;
let n = 11;
let br = 0;
for(; k <= n; k++) {
    if(k % 2 === 0) {
        s += k;
        br++;
    }
}
let as = s / br;
console.log(as);

//Izračunati aritmetičku sredinu prirodnih brojeva od k do n koji su djeljivi sa a.
let k = 1;
let n = 11;
let a = 3;
let s = 0;
let b = 0;
for(; k <= n; k++) {
    if(k % a === 0) {
        s += k;
        b++;
    }
}
let as = s / b;
console.log(as);
*/
//Izračunati aritmetičku sredinu prirodnih brojeva od k do n koji nisu djeljivi sa a.	
let s = 0;
let b = 0;
let k = 1;
let n = 11;
let a = 3;
for(; k <= n; k++) {
    if (k % a !==0) {
        s += k;
        b++;
    }
}
let as = s / b;
console.log(as);
