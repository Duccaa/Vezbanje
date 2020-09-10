/*let n = 5;
let br = 0;
for (let i = n; i > 0; i--) {
    if(br < n) {
        let red = '#'.repeat(i);
        console.log(red);
    }
    br++;
}
#####
####
###
##
#
*/
/*let n = 5;
let br = 0;
for (let i = n; i > 0; i--) {
    let j = n - i; 
    let red = ' '.repeat(j) + '#'.repeat(i);
    if(br < n) {
        console.log(red);
    }
    br++;
}
#####
 ####
  ###
   ##
    #
*/
/* 
let n = 5;
let br = 0;
for(let i = 1; i <= n; i++) {
    let red = "#".repeat(i);
    if(br < n) {
     console.log(red)   
    }
    br++;
}
#
##
###
#####
######
*/
/*
let n = 5;
let br = 0;
for(let i = 1; i <= n; i++) {
    if(br < n) {
        let j = n - i;
        let red = ' '.repeat(j) + '#'.repeat(i);
        console.log(red);
    }
    br++;
}
    #
   ##
  ###
 ####
#####
*/
/*
for (let n = 9, j = 1, br = 0; j <= n; j += 2) { 
    if(br < n) {
        let i = Math.floor((n - j) / 2);
        let red = ' '.repeat(i) + '#'.repeat(j); 
        console.log(red);
    }
    br++
} 
let n = 9; 
let br = 0; 
let j = 1;  
while (br < n) {
    if(j <= n) {
        let i = Math.floor((n - j) / 2);
        let red = ' '.repeat(i) + '#'.repeat(j); 
        console.log(red);
        j += 2;  
    } 
    br++;
}
    #    
   ###   
  #####  
 ####### 
#########
*/
/*
let n = 9;
let br = 0;
for(let i = n; i > 0; i-= 2) {
    if(br < n) {
        let j = Math.floor((n -i) / 2);
        let red = ' '.repeat(j) + '#'.repeat(i);
        console.log(red);
    }
    br++;
}
#########
 #######
  #####
   ###
    #
*/
/*
let n = 5;
let br = 0;
for (let i = 1; i <= n; i++)
if (br < n) {
    let j = n - i;
    let red = ' '.repeat(j) + ('*' + ' ').repeat(i)
    console.log(red);
} br++;
    #  
   # #  
  # # # 
 # # # #   
# # # # # 
*/
/*
# # # # # 
 # # # #
  # # # 
   # # 
    #
*/
/*
let n = 5;
let br = 0;
let srednjiRed = '#'.repeat(n);
for(let i = 1; i <= n; i += 2) {
    if(br < Math.floor((n - 1) / 2)) {   
        let j = Math.floor((n - i) / 2);
        let red1 = ' '.repeat(j) + '#'.repeat(i);
        console.log(red1);
    }
    br++;
}
console.log(srednjiRed);
let br2 = 0;
for(let k = n - 2 ; k > 0; k -= 2) {
    if(br2 < Math.floor((n - 1) / 2)) {
        let l = Math.ceil((n - k) / 2);
        let red2 = ' '.repeat(l) + '#'.repeat(k);
        console.log(red2);
    }
    br2++;
}
    #    
   ###   
  #####  
 ####### 
#########
 #######
  #####
   ###
    #      
*/
/*
# 
# #
# # #
# # # #
# # # # #
# # # # 
# # #
# #
#
*/
/*let n = 5;
let br = 0;
for(let i = 1; i <= n; i++) {    
    let j = n - i;
    let red1 = ' '.repeat(j) + '#'.repeat(i);
    console.log(red1);
} br++;
for(let i = n - 1; i > 0;  i--) {
    let j = n - i;
    let red2 = ' '.repeat(j) + '#'.repeat(i);
    console.log(red2);
} br++;
    # 
   ## 
  ###
 ####
#####
 ####
  ###
   ##
    #    
*/
/*
# # # # # 
 # # # #
  # # # 
   # # 
    #
    #  
   # #  
  # # # 
 # # # #   
# # # # # 
*/
/*
    # 
   # #
  #   #
 #     #
#########
*/
let n = 10;
let br = 0;
let b = 2 * n - 1;
let baza = '#'.repeat(b);
let vrh = ' '.repeat(Math.floor(b / 2)) + '#';
console.log(baza);
for(let i = 1; i <= b; i++) {
        if(br < n - 2) {
        let j = b - (2 * (i + 1));
        let red = ' '.repeat(i) + '#' + ' '.repeat(j) + '#';
        console.log(red);
    }
    br++; 
}
console.log(vrh);
/*
#########
 #     # 
  #   #
   # # 
    # 
*/
/*
    # 
   # # 
  #   #
 #     #
#       #
 #     #
  #   #
   # # 
    #
*/