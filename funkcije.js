
//1. napisati funkciju koja ispisuje da li je br deljiv sa tri

function printDivisibleBy3(num) {
    num % 3 === 0 ?
    console.log(`Broj ${num} je deljiv sa 3`)
    :
    console.log(`Broj ${num} nije deljiv sa 3`)
}
printDivisibleBy3(10)

//2. napisati funkciju koja provereva da li je broj deljiv sa tri

function checkDivisibleBy3(num) {
    return num % 3 === 0
}
console.log(checkDivisibleBy3(10))

//3. napisati funkciju koja vraca sumu brojeva od n do m

function sumRange(n, m) {
    let sum = 0
    for(; n <= m; n++) {
        sum += n
    }
    return sum
}
console.log(sumRange(3, 8))

//4. napisati funkciju koja vraca proizvod brojeva od n do m

function productRange(n, m) {
    let product = 1
    for(; n <= m; n++) {
        product *= n
    }
    return product
}
console.log(productRange(3, 8))

//5. Napisati program koji izracunava sumu brojeva deljivih sa 3, od 1 do N (koristeci funkciju checkDivisibleBy3)

function calculateSum(N) {
    let sum = 0
    for(let i = 1; i <= N; i++) {
        if(checkDivisibleBy3(i)) {
        sum += i;
        }  
    }
    console.log(sum)
}
calculateSum(30)

//6. napisati funkciju koja proverava da li je trougao validan (na osnovu unete 3 stranice)
//trougao je validan ako su sve 3 stranice pozitivne i zbir svake 2 stranice je veci od trece

function checkValidity(a, b, c) {
    if(a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
        return ('Triangle is valid')
    } else {
        return ('Triangle is not valid')
    }
}
console.log(checkValidity(3, 6, 8)) 

//7. napisati funkciju koja proverava da li je uneti string palindrom

function checkPalindrom(izraz) {
    let kontrolIzraz = izraz.toLowerCase(); 
    let count;
    if(kontrolIzraz === '') {
        return ('Morate uneti neki izraz');
    } 
    if (kontrolIzraz.length % 2 === 0) {
        count = kontrolIzraz.length / 2;
    } else if(kontrolIzraz.length === 1) {
        return ('Jeste palindrom');
    } else {
        count = (kontrolIzraz.length - 1) / 2;
    }
    for(let i = 0; i < count; i++) {
        if (kontrolIzraz[i] != kontrolIzraz.slice(-1-i)[0]) {
            return ('Nije palindrom');  
        } else {
            return ('Jeste palindom');
        }
        
    }
}
console.log(checkPalindrom('Ja sam ja'))
console.log(checkPalindrom('Ana voli Milovana'))
console.log(checkPalindrom(''))
console.log(checkPalindrom('a'))
// console.log(checkPalindrom(9))
// console.log(checkPalindrom())

// 8. Deda Mraz ima niz sa imenima dece koja su ucinila dobra dela u prethodnoj godini. 
// Pomozite mu da podeli poklone deci koja to zasluzuju.
// Deca zasluzuju poklone ako se nalaze 2 ili vise puta u tom nizu
// Napusati funkciju koja prima Deda Mrazov niz i vraca niz koji sadzi samo decu koja zasluzuju poklone

santaString = ['Pera', 'Ana', 'Pera', 'Maja', 'Lana', 'Zika', 'Ana', 'Ana'];
function nonNaugthyList(arr) {
    let goodChildren = []
    for(let i = 0; i < arr.length; i++) {
        for (let k = i+ 1; k < arr.length; k++) {
            if(arr[i] == arr[k]) {
                goodChildren.push(arr[i]); 
            }      
        } 
      
    }  
    // return new Set(goodChildren) 
    return goodChildren.filter((item, index) => goodChildren.indexOf(item) === index)
    // return goodChildren.reduce((unique, item) => unique.includes(item) ? unique : [... unique, item], [])
}
console.log(nonNaugthyList(santaString));
// funkcija includes

//9.FB likes
//fbLikes = []
//fbLikes = ['Aleksa']
//fbLikes = ['Aleksa', 'Maksimilijan']
//fbLikes = ['Aleksa', 'Maksimilijan', 'Marko']
fbLikes = ['Aleksa', 'Maksimilijan', 'Marko', 'Jakov']
function likes(people) {
    if(people.length == 0) {
        return 'Nikome se ne svidja' 
    } else if(people.length ===1) {
        return `${people} voli ovo`
    } else if(people.length == 2) {
        return `${people[0]} i ${people[1]} vole ovo`
    } else if (people.length == 3) {
        return `${people[0]}, ${people[1]} i ${people[2]} vole ovo`
    } else {
        return `${people[0]}, ${people[1]} i ${people.length - 2} drugih vole ovo`
    }
}
console.log(likes(fbLikes))