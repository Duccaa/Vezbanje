// Write a JavaScript function that reverse a number
// Example x = 32243;
// Expected Output : 34223

function reverseNumber(num) {
    num += ''
    return num.split('').reverse().join('');
}
console.log(reverseNumber(6387));

// nacini da se br pretvori u string
// num = num + ""
// num = "" + num + ""
// num = String(num)
// num = num.toString()