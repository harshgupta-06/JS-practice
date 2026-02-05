// for loop practice questions 

// Count digits in a number
// Example: 45678 → Output: 5

// let num = 450;
// let count = 0;

// for(; num > 0 ; num = Math.floor(num / 10)){
    
//     count ++;
// }

//  console.log("count = " ,count);

// let num = 84923;
// let evenCount = 0 ,  oddCount = 0;

// for( ; num > 0; num = Math.floor(num / 10)){
//     if( num % 2 === 0){
//         evenCount++;
//     } else {
//         oddCount++;
//     }
// }

// console.log("evenCount : " , evenCount);
// console.log("oddCount : " , oddCount);

// Print all prime numbers between 1 and 100
// let num;

//  for( let num = 2; num <= 100; num ++){
//     let isPrime = true;

//     for( let i = 2; i < num; i++){
//         if(num % i === 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(" prime num = " , num);
//     }
//  }


// let num = 59347;
// let max = 0;

// for(; num > 0; num = Math.floor(num / 10)){
//     let digit = num % 10 

//     if(digit > max){
//         max = digit;
//     }
// }

// console.log(max);

// to print second largest of the number 
// let num = 59347;
// let largest = -1;
// let secondLargest = -1;

// for( ; num > 0; num = Math.floor(num / 10)){
//     let d = num % 10;


//     if ( d > largest){
//         secondLargest = largest;
//         largest = d;
//     }

//     else if ( d > secondLargest && d !== largest){
//         secondLargest = d;
//     }

// }

// if( secondLargest === -1){
//     console.log("Second largest digit not found");
// } else {
//     console.log(secondLargest);
// }

// count digits in a number 
// let num = 123456;
// let count = 0;

// for(; num > 0; num = Math.floor(num / 10)){
//     if( num % 2 === 0){
//         count++;
//     }
// }

// console.log("count = " , count);

// print all the factors of 12


// for( i = 1 ; i <= 12; i++){
//     if( 12 % i === 0){
//         console.log(i);
//     }
// }

// sum of digits at even positions 


// let num = 12345;
// let position = 1;
// let evenSum = 0;

// for(; num > 0; num = Math.floor(num/10)){
//     let digit = num % 10;

//     if( position % 2 !== 0){
//         evenSum += digit;
//     }
//     position ++;
// }

// console.log(evenSum);

// let num = "123456";
// let revOdd = "";

// for(; num > 0; num = Math.floor(num / 10)){
//     let digit = num % 10;


//     if( digit % 2 !== 0){
//         revOdd += digit;
//     }
// }

// console.log(revOdd);

// practice again 
// print sum of first 10 natural numbers

// let sum = 0;
// for( let i = 1; i <= 10; i++){
//     sum += i;
// }
  
// console.log("sum = " , sum);

// for(let i = 1; i <= 10; i++){
//     console.log(" 5 * " + i + " = " + (5 * i));
// }

// let n = Number(prompt("enter a number"));
// let fact = 1;

// for( let i = 1; i <= n; i++){
//     fact *= i;
// }

// console.log("Factorial of " + n + " = " + fact);

// reverse a number 

// let num = 5152;
// let rev = 0;

// for(; num > 0; num = Math.floor(num / 10)) {
//     let d = num % 10;
//     rev = rev * 10 + d;
// }

//    console.log("Reverse = " , rev);

//    let num = 5152;
//    let rev = 0;

//    while ( num > 0)
//  {
//     let d = num % 10;
//     rev = rev * 10 + d;
//     num = Math.floor(num / 10);
//    }


//    console.log("reverse = " , rev);


// print numbers from 1 to 5 using do while loop 


// let i = 1;
//  do { 

//     console.log("i = " , i);
//     i++;
//  } while( i <= 5);

// let i = 1;
// do{
//     console.log("5 * " + i  + " = " + ( 5 * i));
//     i++
// } while( i <= 10);

// find the sum of the digits of the number 

// let num = 123;
// let sum = 0;
//  for ( ; num > 0; num = Math.floor(num/10)){
//       let d = num % 10;
//       sum += d;  
//  }

//    console.log(" Sum of digits : " , sum);
// do{
//     let d = num % 10;
//     sum += d;
//     num = Math.floor(num/10);
// } while ( num > 0);

// console.log("sum  of digits : " , sum);



// let num  = 5445;
// let rev = 0;

//  for (; num > 0; num = Math.floor(num / 10)){
//     let d = num % 10;
//     rev = rev * 10 + d;
//  }

//  console.log(" reverse : " , rev);
// do{
//     let d = num % 10;
//     rev = rev * 10 + d;
//     num = Math.floor( num / 10);
// } while( num > 0);

// console.log("Reverse : " , rev);

// count digits in a number

// let num = 654321;
// let count = 0;

// do{
//     count++;
//      num = Math.floor(num / 10);
// } while( num > 0);

// console.log("Digits : " , count );


// let num = 123456;
// let sum = 0;

// for( ; num > 0; num = Math.floor(num / 10) ) {

//     let d = num % 10;
//     if( d % 2 === 0) sum += d;
// }

// console.log(sum);

// let n = Number(prompt("Enter a number "));

// for(let i = 1; i <= n; i++){
//     if ( n % i === 0) console.log(i);
// }

// let n = 54;
// let isPrime =  false ;

// for( let i = 2; i < n; i++){
//     if( n % i === 0){
//         isPrime = false;
//         break;
//     }
// }

// console.log(isPrime ? "prime" : "not Prime");


// let num = 12345;
// let count = 0;

// for( ; num > 0; num = Math.floor(num / 10)){
//     count++;
// }

// console.log("count = " , count);


// sum of digits of a number 

// let num = 12345;
// let sum  = 0;

// for(; num > 0; num = Math.floor(num /10)) {
//     let d = num % 10;
//     sum += d; 
// }

// console.log(" sum = " , sum);


// let num = 123456;
// let rev = 0;

// for ( ; num > 0; num = Math.floor(num /10)){
//     let d = num % 10;
//     rev = rev * 10 + d; 
// }

// console.log("reverse = " , rev);


// let n = Number(prompt(" Enter a number"));
// let fact = 1 ;

// for ( i = 1; i <= n; i++){
//     fact *= i ;
// }

// console.log(" Fact = : " , fact );

// let n = Number(prompt(" Enter a number"));
// for( let i = 1 ; i <= n; i++){
//     if( n % i === 0){
//     console.log("factors of " + n + " are : " , i);
//     }
// }


// let num = 569325;
// let max = 6;

// for(; num > 0; num = Math.floor(num / 10)){
//     let d = num % 10;
//     if ( d > max ){
//      max = d;
//     }
// }
// console.log("Max = " , max);

// count digits in a number 

// let num = 456789;
// let count = 0;

// for( ; num > 0; num = Math.floor(num/10)){
//    let d = num % 10;
//    count++; 
// }

// console.log(" count = " , count);


// questions based on strings 


// let str = "hello"

// for( let i = 0; i < str.length; i++){
//    console.log(str[i]);
// }

// let str = "educationaa";
// let count = 0;

// for ( let ch of str ){
//    if( " aeiou AEIOU" .includes(ch)){
//       count++;
//    }
// }

// console.log(count);


// let str = "helloKKK AAAA";
// let count = 0;

// for( let ch of str ){
//    if (
//   ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) &&
//   !"aeiouAEIOU".includes(ch)
// )
// {
//       count++;
//    }
// }

// console.log(count);


// let str = "hello";
// let rev = "";

// for( let i = str.length-1; i >= 0; i--){
//    rev += str[i];
// }

// console.log(rev);

// let str = "hello   world";
// let emtySpaces = 0;
  

// for( let ch of str ){
//   if( ch === " ") emtySpaces++;
// }
//   console.log(emtySpaces);

// let str = " educationaa";
// let count = 0;

// for ( let ch of str ){
//   if ("aeiouAEIOU".includes(ch)){
//     count++;
//   }
// }

// console.log(count);


// let str = "hellovvv";
// // let count = 0;

// for( let ch of str){
//   if(
//     (( ch >= 'a' && ch <= 'z') ||( ch >= 'A' && ch <= 'Z')) && !"aeiou" .includes(ch))
//     {
//     console.log( " ch = " , ch);
// }
// }


// let str = " Harsh GUpta ";
// let reversed = " ";

// for( let i = str.length-1; i > 0; i--){
//   reversed += str[i];
// }


// console.log( " reversed string = " ,  reversed);

// let str = " java script";
// let count = 0;

// for( let ch of str){
//   count ++;
// }

// console.log(" total characters are = " , count );

// checking whether the string is palindrome or not

// let str = "madam";
// let rev = "";

// for ( let i = str.length-1; i >= 0; i--){
//   rev += str[i];
// }

// console.log( str === rev ? "palimdrome" : "not palimdrome");


// let str = "banana";
// let target = "a";
// let count = 0;


// for( let ch of str ){
//   if( ch === target ){
//     count ++;
//   }
// }

// console.log("Frequency of a is = " ,count);


// let str  = "education";
// let count = 0;

// for( let i = 0; i < str.length; i++){
//     if("aeiouAEIOU".includes(str[i])) {
//         count++;
//     }
// }

// console.log(count);


// let str = "hello";
// let rev = " ";

// for( let i = str.length-1; i >= 0; i--){
//     rev += str[i];
// }

// console.log(rev);

// let str = "madam";
// let rev = "";

// for( let i = str.length - 1; i >= 0; i--){
//     rev += str[i];
// }

// console.log( str === rev ? "palimdrome":"not Palimdrome");


// let str = "HelloWorld";
// let isAlpha = true;

//  for(let ch of str){
//     if(!(( ch >= 'a' && ch <= 'z') || ( ch >= 'A' && ch <= 'Z'))) {
//         isAlpha = false;
//         break;
//     }
//  }

//  console.log(isAlpha);

// count frequwency of a number 

// let str = "banana";
// let freq = {};

// for( let ch of str){
//     freq[ch] = ( freq[ch] || 0) + 1;

// }

// console.log(freq);


// let str = "madam";
// let rev = "";

// for( let i = str.length-1; i >= 0; i--){
//     rev += str[i];
// }

// console.log( str === rev ? "palimdrome" : "not Palimdrome");


// function countVowels(str) {
//    let count = 0;
//    for( let ch of str ){
//     if("aeiouAEIOU" .includes(ch)){
//         count++;
//     }
//    }

//    console.log( count);
// }


// let nums = [ 2,3,4,5,6];

// nums.forEach(( num) => {
//     console.log(num * num );
// })


// let nums = [67,52,39];

// let newArr = nums.map((val) => {
//     return val * val;
// });

// console.log(newArr);

// let arr = [ 1,2,3,4,5,6,7];

//  let newArr = arr.filter((val) =>{
//     return val > 3 ;
// });

// console.log(newArr);

// let arr = [5,6,2,1,3];
// const output = arr.reduce(( prev , curr) => {
//     return prev > curr ? prev : curr;
// });

// console.log(output);


// let marks = [ 99,88,95,68,96,78];

// let toppers = marks.filter((val) => {
//     return val > 90;
// });

// console.log( toppers);

// let n = prompt(" enter a number : ");

// let arr = [];

// for( let i = 1; i<= n; i++){
//     arr[i-1] = i;
// }

// console.log(arr);

//  let sum = arr.reduce((prev,curr) => {
//     return prev+curr;

    
// });

// console.log( " Sum = ",sum);


// let mul = arr.reduce((prev,curr) => {
//     return prev*curr;

    
// });

// console.log( " Factorial = ",mul);


// questions based on functions 

// function sum ( a, b){
//     return a + b;
// }


// function isEven(num){
//     return num % 2 === 0 ? "even" : "odd" ;
// }

// const square = n => n*n;

// function lengthOfString(str) {
//     return str.length;
// }

// let  result = lengthOfString("harsh gupta");
// console.log(result);

// Reverse a string 

// function reverseString(str){
//     let rev = "";

//     for( let i = str.length-1; i >= 0; i--){
//         rev += str[i];
//     }

//     return rev;

    
// }

// let result = reverseString("harshgupta");
// console.log(result);


// function isPalindrome(str){
//      let rev = "";


//      for( let i = str.length-1; i >= 0; i--){
//         rev += str[i];
//      }

//      if( str === rev){
//         return true;
//      } else {
//         return false;
//      }
// }

// console.log(isPalindrome("madam"));  // true
// console.log(isPalindrome("hello"));  // false


// count vowels in a string 

// function countVowels (str) {

//     let count = 0;

//     for( let ch of str){
//         if("aeiouAEIOU" .includes(ch)){
//             count++;
//         }
//     }
//     return count;
// }

// let result = countVowels("education");
// console.log(result);


function findMax(arr){
    let max = arr[0];
    for( let n of arr ){
        if( n > max){
            max = n;
        }
    }

    return max;
}

let result = findMax([ 55,8,99]);
console.log(result);