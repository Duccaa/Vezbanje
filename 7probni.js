//Napisati program koji izracunava cenu artikla u prodavnici, 
// a nakon toga ispisuje koliko kupac treba da plati.
// Ponedeljkom i petkom se odobrava popust od 10 %.
// Ulazni podaci:
// Kolicina u gramima
// cena za 100 gr
// Dan u nedelji od 1 do 7 (1 je ponedeljak)
/*
let kol = 190;
let cena = 80;
let dan = 1;
let novaCena = (cena / 100) * kol;
let popust = novaCena - (novaCena / 10);

if (dan === 1 || dan === 5) {
    console.log(`Iznos Vaseg racuna sa popustom iznosi ${popust}`)
} else if (dan === 2 || dan === 3 || dan === 4 || dan === 6 || dan === 7) { 
    console.log(`Iznos Vaseg racuna iznosi ${novaCena}`);
} else {console.log(`Neispravno uneti parametri! Unesite broj izmedju 1 i 7.`);
};

switch(dan) {
    case 1:
    case 5:
        console.log(`Iznos Vaseg racuna sa popustom iznosi ${popust}`);
        break;
    case 2:    
    case 3:  
    case 4:  
    case 6:  
    case 7:
        console.log(`Iznos Vaseg iznosi ${novaCena}`);     
        break;
    deafault:
    console.log(`Neispravno uneti parametri! Unesite broj izmedju 1 i 7.`);  
}

//  Napisati program koji racuna aritmeticku sredinu brojeva od k do n
let suma = 0;
let k = 5;
let n = 9;
let br = 0;
 for(; k <= n; k++) {
     suma += k;
     br++;
 }
 let as = suma / br;
console.log(as);

// Ispisati prvih 30 prestupnih godina, pocevsi od i ukljucujuci 1234.
let br = 0; 
let n = 30;
let g = 1234;
for(; br < n; g++) {
    if(g % 4 === 0 && (g % 100 !== 0 || g % 400 === 0)) {
    console.log(g);
    br++
    }
}    
*/
//Napisati program koji ispisuje strukturu broja 8, a uneto W i H (width, height)
/*
 #####
#     #  
#     #
#     #
 #####   
#     #
#     #
#     #
#     #
 #####
*/

 let H = 7;
 let W = 8;
 let red1 = ' ' + '*'.repeat(W - 2) + ' ';
 let red2 = '*' + ' '.repeat(W -2) + '*';

 console.log(red1);
 for(let i = 1; i <= Math.floor(W / 2); i++) {
     console.log(red2);
 }
 console.log(red1);
 for(let i = 1; i <= Math.floor(W / 2); i++) {
    console.log(red2);
 }   
 console.log(red1);