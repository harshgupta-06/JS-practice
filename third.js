// // for loop practice questions 

// // Count digits in a number
// // Example: 45678 → Output: 5

// // let num = 450;
// // let count = 0;

// // for(; num > 0 ; num = Math.floor(num / 10)){

// //     count ++;
// // }

// //  console.log("count = " ,count);

// // let num = 84923;
// // let evenCount = 0 ,  oddCount = 0;

// // for( ; num > 0; num = Math.floor(num / 10)){
// //     if( num % 2 === 0){
// //         evenCount++;
// //     } else {
// //         oddCount++;
// //     }
// // }

// // console.log("evenCount : " , evenCount);
// // console.log("oddCount : " , oddCount);

// // Print all prime numbers between 1 and 100
// // let num;

// //  for( let num = 2; num <= 100; num ++){
// //     let isPrime = true;

// //     for( let i = 2; i < num; i++){
// //         if(num % i === 0){
// //             isPrime = false;
// //             break;
// //         }
// //     }
// //     if(isPrime){
// //         console.log(" prime num = " , num);
// //     }
// //  }


// // let num = 59347;
// // let max = 0;

// // for(; num > 0; num = Math.floor(num / 10)){
// //     let digit = num % 10 

// //     if(digit > max){
// //         max = digit;
// //     }
// // }

// // console.log(max);

// // to print second largest of the number 
// // let num = 59347;
// // let largest = -1;
// // let secondLargest = -1;

// // for( ; num > 0; num = Math.floor(num / 10)){
// //     let d = num % 10;


// //     if ( d > largest){
// //         secondLargest = largest;
// //         largest = d;
// //     }

// //     else if ( d > secondLargest && d !== largest){
// //         secondLargest = d;
// //     }

// // }

// // if( secondLargest === -1){
// //     console.log("Second largest digit not found");
// // } else {
// //     console.log(secondLargest);
// // }

// // count digits in a number 
// // let num = 123456;
// // let count = 0;

// // for(; num > 0; num = Math.floor(num / 10)){
// //     if( num % 2 === 0){
// //         count++;
// //     }
// // }

// // console.log("count = " , count);

// // print all the factors of 12


// // for( i = 1 ; i <= 12; i++){
// //     if( 12 % i === 0){
// //         console.log(i);
// //     }
// // }

// // sum of digits at even positions 


// // let num = 12345;
// // let position = 1;
// // let evenSum = 0;

// // for(; num > 0; num = Math.floor(num/10)){
// //     let digit = num % 10;

// //     if( position % 2 !== 0){
// //         evenSum += digit;
// //     }
// //     position ++;
// // }

// // console.log(evenSum);

// // let num = "123456";
// // let revOdd = "";

// // for(; num > 0; num = Math.floor(num / 10)){
// //     let digit = num % 10;


// //     if( digit % 2 !== 0){
// //         revOdd += digit;
// //     }
// // }

// // console.log(revOdd);

// // practice again 
// // print sum of first 10 natural numbers

// // let sum = 0;
// // for( let i = 1; i <= 10; i++){
// //     sum += i;
// // }

// // console.log("sum = " , sum);

// // for(let i = 1; i <= 10; i++){
// //     console.log(" 5 * " + i + " = " + (5 * i));
// // }

// // let n = Number(prompt("enter a number"));
// // let fact = 1;

// // for( let i = 1; i <= n; i++){
// //     fact *= i;
// // }

// // console.log("Factorial of " + n + " = " + fact);

// // reverse a number 

// // let num = 5152;
// // let rev = 0;

// // for(; num > 0; num = Math.floor(num / 10)) {
// //     let d = num % 10;
// //     rev = rev * 10 + d;
// // }

// //    console.log("Reverse = " , rev);

// //    let num = 5152;
// //    let rev = 0;

// //    while ( num > 0)
// //  {
// //     let d = num % 10;
// //     rev = rev * 10 + d;
// //     num = Math.floor(num / 10);
// //    }


// //    console.log("reverse = " , rev);


// // print numbers from 1 to 5 using do while loop 


// // let i = 1;
// //  do { 

// //     console.log("i = " , i);
// //     i++;
// //  } while( i <= 5);

// // let i = 1;
// // do{
// //     console.log("5 * " + i  + " = " + ( 5 * i));
// //     i++
// // } while( i <= 10);

// // find the sum of the digits of the number 

// // let num = 123;
// // let sum = 0;
// //  for ( ; num > 0; num = Math.floor(num/10)){
// //       let d = num % 10;
// //       sum += d;  
// //  }

// //    console.log(" Sum of digits : " , sum);
// // do{
// //     let d = num % 10;
// //     sum += d;
// //     num = Math.floor(num/10);
// // } while ( num > 0);

// // console.log("sum  of digits : " , sum);



// // let num  = 5445;
// // let rev = 0;

// //  for (; num > 0; num = Math.floor(num / 10)){
// //     let d = num % 10;
// //     rev = rev * 10 + d;
// //  }

// //  console.log(" reverse : " , rev);
// // do{
// //     let d = num % 10;
// //     rev = rev * 10 + d;
// //     num = Math.floor( num / 10);
// // } while( num > 0);

// // console.log("Reverse : " , rev);

// // count digits in a number

// // let num = 654321;
// // let count = 0;

// // do{
// //     count++;
// //      num = Math.floor(num / 10);
// // } while( num > 0);

// // console.log("Digits : " , count );


// // let num = 123456;
// // let sum = 0;

// // for( ; num > 0; num = Math.floor(num / 10) ) {

// //     let d = num % 10;
// //     if( d % 2 === 0) sum += d;
// // }

// // console.log(sum);

// // let n = Number(prompt("Enter a number "));

// // for(let i = 1; i <= n; i++){
// //     if ( n % i === 0) console.log(i);
// // }

// // let n = 54;
// // let isPrime =  false ;

// // for( let i = 2; i < n; i++){
// //     if( n % i === 0){
// //         isPrime = false;
// //         break;
// //     }
// // }

// // console.log(isPrime ? "prime" : "not Prime");


// // let num = 12345;
// // let count = 0;

// // for( ; num > 0; num = Math.floor(num / 10)){
// //     count++;
// // }

// // console.log("count = " , count);


// // sum of digits of a number 

// // let num = 12345;
// // let sum  = 0;

// // for(; num > 0; num = Math.floor(num /10)) {
// //     let d = num % 10;
// //     sum += d; 
// // }

// // console.log(" sum = " , sum);


// // let num = 123456;
// // let rev = 0;

// // for ( ; num > 0; num = Math.floor(num /10)){
// //     let d = num % 10;
// //     rev = rev * 10 + d; 
// // }

// // console.log("reverse = " , rev);


// // let n = Number(prompt(" Enter a number"));
// // let fact = 1 ;

// // for ( i = 1; i <= n; i++){
// //     fact *= i ;
// // }

// // console.log(" Fact = : " , fact );

// // let n = Number(prompt(" Enter a number"));
// // for( let i = 1 ; i <= n; i++){
// //     if( n % i === 0){
// //     console.log("factors of " + n + " are : " , i);
// //     }
// // }


// // let num = 569325;
// // let max = 6;

// // for(; num > 0; num = Math.floor(num / 10)){
// //     let d = num % 10;
// //     if ( d > max ){
// //      max = d;
// //     }
// // }
// // console.log("Max = " , max);

// // count digits in a number 

// // let num = 456789;
// // let count = 0;

// // for( ; num > 0; num = Math.floor(num/10)){
// //    let d = num % 10;
// //    count++; 
// // }

// // console.log(" count = " , count);


// // questions based on strings 


// // let str = "hello"

// // for( let i = 0; i < str.length; i++){
// //    console.log(str[i]);
// // }

// // let str = "educationaa";
// // let count = 0;

// // for ( let ch of str ){
// //    if( " aeiou AEIOU" .includes(ch)){
// //       count++;
// //    }
// // }

// // console.log(count);


// // let str = "helloKKK AAAA";
// // let count = 0;

// // for( let ch of str ){
// //    if (
// //   ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) &&
// //   !"aeiouAEIOU".includes(ch)
// // )
// // {
// //       count++;
// //    }
// // }

// // console.log(count);


// // let str = "hello";
// // let rev = "";

// // for( let i = str.length-1; i >= 0; i--){
// //    rev += str[i];
// // }

// // console.log(rev);

// // let str = "hello   world";
// // let emtySpaces = 0;


// // for( let ch of str ){
// //   if( ch === " ") emtySpaces++;
// // }
// //   console.log(emtySpaces);

// // let str = " educationaa";
// // let count = 0;

// // for ( let ch of str ){
// //   if ("aeiouAEIOU".includes(ch)){
// //     count++;
// //   }
// // }

// // console.log(count);


// // let str = "hellovvv";
// // // let count = 0;

// // for( let ch of str){
// //   if(
// //     (( ch >= 'a' && ch <= 'z') ||( ch >= 'A' && ch <= 'Z')) && !"aeiou" .includes(ch))
// //     {
// //     console.log( " ch = " , ch);
// // }
// // }


// // let str = " Harsh GUpta ";
// // let reversed = " ";

// // for( let i = str.length-1; i > 0; i--){
// //   reversed += str[i];
// // }


// // console.log( " reversed string = " ,  reversed);

// // let str = " java script";
// // let count = 0;

// // for( let ch of str){
// //   count ++;
// // }

// // console.log(" total characters are = " , count );

// // checking whether the string is palindrome or not

// // let str = "madam";
// // let rev = "";

// // for ( let i = str.length-1; i >= 0; i--){
// //   rev += str[i];
// // }

// // console.log( str === rev ? "palimdrome" : "not palimdrome");


// // let str = "banana";
// // let target = "a";
// // let count = 0;


// // for( let ch of str ){
// //   if( ch === target ){
// //     count ++;
// //   }
// // }

// // console.log("Frequency of a is = " ,count);


// // let str  = "education";
// // let count = 0;

// // for( let i = 0; i < str.length; i++){
// //     if("aeiouAEIOU".includes(str[i])) {
// //         count++;
// //     }
// // }

// // console.log(count);


// // let str = "hello";
// // let rev = " ";

// // for( let i = str.length-1; i >= 0; i--){
// //     rev += str[i];
// // }

// // console.log(rev);

// // let str = "madam";
// // let rev = "";

// // for( let i = str.length - 1; i >= 0; i--){
// //     rev += str[i];
// // }

// // console.log( str === rev ? "palimdrome":"not Palimdrome");


// // let str = "HelloWorld";
// // let isAlpha = true;

// //  for(let ch of str){
// //     if(!(( ch >= 'a' && ch <= 'z') || ( ch >= 'A' && ch <= 'Z'))) {
// //         isAlpha = false;
// //         break;
// //     }
// //  }

// //  console.log(isAlpha);

// // count frequwency of a number 

// // let str = "banana";
// // let freq = {};

// // for( let ch of str){
// //     freq[ch] = ( freq[ch] || 0) + 1;

// // }

// // console.log(freq);


// // let str = "madam";
// // let rev = "";

// // for( let i = str.length-1; i >= 0; i--){
// //     rev += str[i];
// // }

// // console.log( str === rev ? "palimdrome" : "not Palimdrome");


// // function countVowels(str) {
// //    let count = 0;
// //    for( let ch of str ){
// //     if("aeiouAEIOU" .includes(ch)){
// //         count++;
// //     }
// //    }

// //    console.log( count);
// // }


// // let nums = [ 2,3,4,5,6];

// // nums.forEach(( num) => {
// //     console.log(num * num );
// // })


// // let nums = [67,52,39];

// // let newArr = nums.map((val) => {
// //     return val * val;
// // });

// // console.log(newArr);

// // let arr = [ 1,2,3,4,5,6,7];

// //  let newArr = arr.filter((val) =>{
// //     return val > 3 ;
// // });

// // console.log(newArr);

// // let arr = [5,6,2,1,3];
// // const output = arr.reduce(( prev , curr) => {
// //     return prev > curr ? prev : curr;
// // });

// // console.log(output);


// // let marks = [ 99,88,95,68,96,78];

// // let toppers = marks.filter((val) => {
// //     return val > 90;
// // });

// // console.log( toppers);

// // let n = prompt(" enter a number : ");

// // let arr = [];

// // for( let i = 1; i<= n; i++){
// //     arr[i-1] = i;
// // }

// // console.log(arr);

// //  let sum = arr.reduce((prev,curr) => {
// //     return prev+curr;


// // });

// // console.log( " Sum = ",sum);


// // let mul = arr.reduce((prev,curr) => {
// //     return prev*curr;


// // });

// // console.log( " Factorial = ",mul);


// // questions based on functions 

// // function sum ( a, b){
// //     return a + b;
// // }


// // function isEven(num){
// //     return num % 2 === 0 ? "even" : "odd" ;
// // }

// // const square = n => n*n;

// // function lengthOfString(str) {
// //     return str.length;
// // }

// // let  result = lengthOfString("harsh gupta");
// // console.log(result);

// // Reverse a string 

// // function reverseString(str){
// //     let rev = "";

// //     for( let i = str.length-1; i >= 0; i--){
// //         rev += str[i];
// //     }

// //     return rev;


// // }

// // let result = reverseString("harshgupta");
// // console.log(result);


// // function isPalindrome(str){
// //      let rev = "";


// //      for( let i = str.length-1; i >= 0; i--){
// //         rev += str[i];
// //      }

// //      if( str === rev){
// //         return true;
// //      } else {
// //         return false;
// //      }
// // }

// // console.log(isPalindrome("madam"));  // true
// // console.log(isPalindrome("hello"));  // false


// // count vowels in a string 

// // function countVowels (str) {

// //     let count = 0;

// //     for( let ch of str){
// //         if("aeiouAEIOU" .includes(ch)){
// //             count++;
// //         }
// //     }
// //     return count;
// // }

// // let result = countVowels("education");
// // console.log(result);


// // function findMax(arr){
// //     let max = arr[0];
// //     for( let n of arr ){
// //         if( n > max){
// //             max = n;
// //         }
// //     }

// //     return max;
// // }

// // let result = findMax([ 55,8,99]);
// // console.log(result);


// // function sayHello() {
// //     console.log(" Hello Java Script");
// // }

// // sayHello();


// // function square ( a , b ) {
// //     return a * b ;
// // }


// // console.log(square(5 , 4));

// // function checkEvenOdd(num){
// //     if( num % 2 === 0){
// //         return "even";
// //     } else {
// //         return "odd";
// //     }
// // }

// // console.log(checkEvenOdd(7));

// // function greet (name) {
// //     console.log(" Hello " + name  + " Gupta ");
// // }

// // greet ("Riya");

// // function findMax ( a, b ) {
// //     if( a > b) {
// //         return a;
// //     } else {
// //         return b;
// //     }
// // }

// // console.log(findMax(8,3));

// // function countVowels (str) {

// //     let count = 0;

// //     for( let ch of str ){
// //         if("aeiouAEIOU" .includes(ch)){
// //         count++;
// //     }

// //     }
// //      return count;
// // }


// // console.log(countVowels("education"));

// // function reverseString (str) {
// //     rev = "";

// //     for ( let i = str.length-1; i >= 0; i--){
// //         rev += str[i];
// //     }

// //     return rev;
// // }

// // console.log(reverseString("hello"));


// // function sumArray (arr) {
// //   let sum  = 0;

// //   for( let num of arr ){
// //     sum += num;
// //   }

// //   return sum;
// // }

// // console.log(sumArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]));


// // const add = ( a, b ) => {
// //     return a + b; 
// // };


// // console.log(add(5,6));

// // print each character of str 

// // let str = "hello world ";

// // for ( let i = 0; i < str.length; i++){
// //     console.log(str[i]);
// // }


// // let sum = 0;
// // for( let i = 0; i <= 10; i++) {
// //     sum += i;
// // }

// // console.log(" sum = " , sum );


// // count vowels in a str

// // let str = " HarshGupta"
// // let count = 0;

// // for( let i = 0; i < str.length; i++){
// //     if("aeiouAEIOU" .includes(str[i])){
// //         count++;
// //     }
// // }


// // console.log(" vowels in the str are = " , count);

// // reverse  a string 

// // let str = "hello";

// // let rev = "";

// // for ( let i = str.length - 1; i >= 0; i--){

// //     rev += str[i];
// // }

// // console.log(rev);


// // let arr = [6,88,7,63];

// // let max = arr[0];

// // for( let i = 1; i < arr.length; i++){
// //     if ( arr[i] > max){
// //         max = arr[i];
// //     }
// // }

// // console.log(" Maximum number in the array is = " , max);


// // Print multiplication of 5


// // for( let i = 1; i <= 10; i++){
// // console.log( " 5 * " + i + " = " + (5 * i));
// // }



// // printing numbers from 1 to 20

// // for ( let i = 0; i <= 10; i++){
// //     sq = i * i ;
// //     console.log(sq);
// // }


// // let str = " java script"

// // for( let  ch of str){
// //     console.log(ch);
// // }


// // printing sum of numbers 

// // let sum = 0;
// // for( let i = 0; i <= 100; i++){
// //    sum += i ;

// // }

// //  console.log( sum );


// // count vowels 

// // let str = " programmingaaaa";
// // let count = 0;
// // for( let i = 0; i <= str.length; i++){
// //     if("aeiouAEIOU" .includes(str[i])){
// //         count++;
// //     }
// // }

// // console.log(count);

// // let str = "java script";
// // let rev = "";

// // for( let i = str.length-1; i >=0; i--){
// //     rev += str[i];
// // }

// // console.log(rev);


// // finding largest number in the array 

// // let arr = [56,52,77,84,59,85,101];
// // let Max = arr[0];

// // for( let i = 0; i <= arr.length; i++){
// //     if( arr[i] > Max){
// //         Max = arr[i];
// //     }
// // }

// // console.log(Max);


// // let arr = [56,52,77,84,59,85,101,2];
// // let Min = arr[0];

// // for( let i = 0; i <= arr.length; i++){
// //     if( arr[i] < Min){
// //         Min = arr[i];
// //     }
// // }

// // console.log(Min);


// // let num = 5656;
// // let count = 0;

// // for( ; num > 0;  num = Math.floor(num / 10)){
// //     count++; 
// // }

// // console.log(count);

// // checking whether the number is plaimdrome or not 

// // let str = "madam";
// // let rev = "" ;

// // for ( let i = str.length-1; i >= 0; i--){

// //     rev += str[i];

// //     }

// //     if( str === rev){
// //         console.log("Palimdrome");
// //     } else {
// //         console.log("Not Palimdrome");
// //     }


// // sum of square of digits 

// // let num = 236;

// // let sum = 0;

// // for(; num > 0; num = Math.floor(num/10)){

// //     let d = num % 10;
// //     sum += d * d;
// // }

// // console.log(sum);


// // let num = 9;
// // let sq = num * num;

// // let sum = 0;

// // for( ; sq > 0; sq = Math.floor(sq/10)){
// //     sum += sq % 10 ;
// // }

// // console.log( sum === num ? "Neon" : " not neon");


// // count prime digits in a number

// // let num = 23579;
// // let count = 0;

// // for( ; num > 0; num = Math.floor(num/10)){
// //     let d = num % 10;

// //     if( d === 2 || d === 3 || d === 5 || d === 7){
// //         count++;
// //     }
// // }

// // console.log(count);


// // let num = 123;
// // let result = " ";

// // for( ; num > 0; num = Math.floor(num/10)){
// //     let d = num % 10;

// //     result = (d * d) + result;
// // }

// //  console.log(result);

// // let num = 1023;
// // let temp = num;
// // let duck = false;

// // for( ; temp > 0; temp = Math.floor(temp/10) ){
// //         if(temp % 10 === 0) duck = true;
// //     }

// //     console.log( duck ? "Duck number" : "not a duck number");


// //  printing first and last digit 

// // let num = 45678930;

// // let last = num % 10;
// // let first = num;

// // for( ; first >= 10; first = Math.floor(first/10));

// // console.log(first , last );


// // questions based on conditional statements 

// // let a = 10 , b = 25 , c = 4 , d = 18;

// // let max = a;

// // if ( b > max) max = b;
// // if ( c > max) max = c;
// // if ( d > max) max = d;

// // console.log(max);

// // let year = 2024;

// // if( year % 400 === 0 )


// // let num = -5;

// // if ( num > 0) console.log("Positive");
// // if ( num < 0) console.log("negative");
// // if ( num === 0) console.log("zero");


// // divisible by 3 and 5 but not 10

// // let num = 15;


// // if ( num % 3 === 0 && num % 5 === 0 && num % 10 !== 0 ){
// //     console.log("valid number");

// // } else {
// //     console.log("invalid number");
// // }


// // electricity bill 

// // let units = 250;

// // let bill = 0;

// // if( units <= 100){
// //     bill = units * 1;
// // } else if ( units <= 200){
// //     bill = 100 * 1 + ( units - 100) * 2;
// // } else {
// //     bill = 100 * 1 + 100 * 2 + ( units - 200) * 3;
// // }

// // console.log(bill);

// // types of triangles e

// // let a = 5, b = 5 , c = 5;

// // if( a == b && b == c ){
// //     console.log("equilateral");
// // } else if ( a == b || b == c || c == a){
// //     console.log("isoscles Triangle")
// // } else {
// //     console.log("scalence")
// // }


// // Grade calculator

// // let marks = 82;

// // if( marks >= 90) console.log("A");
// // else if ( marks >= 75) console.log("B");
// // else if ( marks >= 60) console.log("C");
// // else if ( marks >= 40) console.log("D");

// // else console.log("Fail");


// // let num = 121;
// // let temp = num;

// // let rev = 0;

// // while ( temp > 0){
// //     rev = rev * 10 + ( temp % 10);
// //     temp = Math.floor(temp / 10);
// // }


// // if ( num === rev) console.log("palimdrome");
// // else console.log("Not Palindrome");


// // Login system 

// // let username = "admin";
// // let password = "1234"

// // if(username === "admin" && password === "1234"){
// //     console.log("login successfull");
// // } else if (username === "admin"){
// //     console.log("wrong Password");
// // } else {
// //     console.log("user not found");
// // }


// // let num = 1221;
// // let temp = num;

// // let rev = 0;

// // while ( temp > 0) {
// //     rev = rev * 10 + ( temp  % 10);
// //     temp = Math.floor(temp / 10);
// // }

// // if ( num === rev ) console.log("Palimdrome");

// // else console.log("not Palimdrome");

// // print numbers from 1 - 50


// //  for ( let i = 2; i <= 50; i++ ){
// //     let Prime = true;

// //     for ( let j = 2; j <= i/2; j++){
// //         if ( i % j === 0){
// //             Prime = false;
// //             break;
// //         }
// //     }

// //     if( Prime ) console.log(i);
// //  }

// // let num = 28;
// // let sum = 0;

// // for( let i = 1; i <= num / 2; i++){
// //     if( num % i === 0) sum += i;
// // }

// // if ( sum === num ) console.log("perfect number ");
// // else console.log("Not perfect")



// // Password strength checker 

// // let password = "Hello123";
// // let hasUpper = false , hasDigit = false;

// // for( let ch of password ){
// //     if( ch >= 'A' && ch <= 'Z') hasUpper = true;
// //     if( ch >= '0' && ch <= '9') hasDigit = true;

// // }

// // if( password.length >= 8 && hasUpper && hasDigit){
// //     console.log("Strong password");
// // } else {
// //     console.log("weak password");
// // }

// // reverse a string 

// // let str = "Hello";
// // let rev = " ";

// // for ( let i = str.length - 1; i >= 0; i--){
// //     rev += str [i];
// // }

// // console.log(rev);


// // let str = "aaiihh"

// // let count = 0;

// // for( let ch of str){
// //     if("aeiouAEIOU" .includes(ch)) count++
// // }

// // console.log(count);


// // let str = "madam" 
// //  let rev = "";


// //  for ( let i = str.length-1; i >= 0; i--){
// //     rev += str[i];
// //  }

// //  if( str === rev) console.log("Palimdrome");
// //  else console.log("Not Palimdrome");


// // let arr = [ 65,98,99,74,25,89,63] ;

// // let max = arr[0];

// // for( let num of arr){
// //     if ( num > max ) max = num;
// // }

// // console.log(max);

// // let arr = [ 65,98,99,74,25,89,63] ;
// // let even = 0 , odd = 0; 

// // for ( let num of arr){
// //     if( num % 2 === 0) even++;
// //     else odd++;
// // }


// // console.log("evem: ", even, "  odd: " , odd);

// // Remove duplictes 

// // let arr = [ 1,2,2,2,3,6,5,5];
// // let unique = [];

// // for ( let num of arr){
// //     if(!unique.includes(num)){
// //         unique.push(num);
// //     }
// // }

// // console.log(unique);

// // sum of array 

// // let arr = [5,10,15];
// // let sum = 0;

// // for( let num of arr){
// //     sum += num;
// // }

// // console.log(sum);

// // printing longest word 

// // let str = " I love javascript programming";
// // let words = str.split (" ");
// // let longest = " ";

// // for( let word of words ){
// //     if( word.length > longest.length){
// //         longest = word;
// //     }
// // }

// // console.log(longest);


// // let arr = [0,1,0,2,0];
// // let result = [];

// // for( let num of arr){
// //     if( num !== 0) result.push(num);
// // }

// // while ( result.length < arr.length){
// //     result.push(0);
// // }

// // console.log(result);


// // Intersection of two arays 

// // let arr1 = [ 1,2,3,4];
// // let arr2 = [ 3,4 ,5,6];
// // let arr3 = [ 3,4 ,50,60];
// // let arr4 = [ 3,4 ,54,63];



// // let result = [];

// // for( let num of arr1){
// //     if(
// //         arr2.includes(num) &&
// //          arr3.includes(num) &&
// //           arr4.includes(num)
// //     ) {
// //         result.push(num);
// //     }
// // }

// // console.log(result);

// // let arr = [1,2,3,4,5];
// // let sorted = true ;

// // for( let i = 0; i < arr.length - 1; i++ ){
// //     if( arr[i] > arr[ i + 1 ]) {
// //         sorted = false ;
// //         break;
// //     }
// // }

// // console.log(sorted);

// // month Name 

// // let month = 1;

// // switch (month) {
// //     case 1:
// //         console.log("january");
// //         break;

// //          case 1:
// //         console.log("january");
// //         break;

// //          case 2:
// //         console.log("feburary");
// //         break;

// //          case 3:
// //         console.log("March");
// //         break;

// //         case 4:
// //         console.log("April");
// //         break;

// //         case 5:
// //         console.log("May");
// //         break;

// //         default : 
// //         console.log("Invalid Month");



// // }

// // traffic signal 

// // let signal = "red";

// // switch(signal){
// //     case "red":
// //     console.log("stop");
// //     break;

// //      case "Yellow":
// //     console.log("Get Ready");
// //     break;

// //      case "Green":
// //     console.log("Go");
// //     break;

// //     default:
// //          console.log("invalid signal");
// // }


// // let a = 10;
// //  b = 5;

// //  let operator = "+";

// //  switch(operator){
// //     case "+":
// //         console.log(a+b);
// //         break;

// //         case "+":
// //         console.log(a+b);
// //         break;

// //         case "-":
// //         console.log(a-b);
// //         break;

// //         case "*":
// //         console.log(a*b);
// //         break;

// //         case "/":
// //         console.log(a/b);
// //         break;

// //         default:
// //             console.log("invalid operator")
// //  }


// // let grade = "A";

// // switch (grade) {
// //      case "A":
// //         console.log("excellent");
// //         break;

// //         case "B":
// //         console.log("Very Good");
// //         break;

// //         case "C":
// //         console.log("Good");
// //         break;

// //         case "D":
// //         console.log("Pass");
// //         break;

// //         case "E":
// //         console.log("Fail");
// //         break;

// //         default:
// //             console.log("invalid Grade");
// // }


// // let ch = "a";

// // switch (ch) {
// //     case "a":
// //     case "e":
// //     case "i":
// //     case "u":
// //     case "o":
// //         console.log("vowel");
// //         break;
// //         default:
// //             console.log("Constant");

// // }


// // let num = 7;

// // switch ( num % 2){
// //     case 0:
// //     console.log("even");
// //     break;

// //     case 1:
// //         console.log("odd");
// //         break;
// // }


// // let num1 = 20;
// // let num2 = 4;
// // let operator = "/" ;
// // let result ;


// // switch ( operator){
// //     case "+":
// //     result = num1 + num2;
// //     break;

// //     case "-":
// //     result = num1 - num2;
// //     break;

// //     case "*":
// //     result = num1 * num2;
// //     break;

// //      case "/":
// //         if(num2 === 0){
// //             result = ("cannot divide by zero");
// //         } else {
// //         result = num1 / num2;
// //     }
// //     break;

// //     default:
// //         result = "invalid operator ";
// // }


// // console.log(result);

// // let ch = "E";

// // switch (ch) {
// //     case "a":
// //     case "e":
// //     case "i":
// //     case "o":
// //     case "u":
// //     case "A":
// //     case "E":
// //     case "I":
// //     case "O":
// //     case "U":
// //         console.log("Vowel");
// //         break;

// //         default:
// //             console.log("constant");


// // }

// //  let choice = 2;
// //  let balance = 1000;

// //  switch(choice){
// //     case 1:
// //         console.log("Your Balance is :" , balance);
// //         break;

// //  case 2:
// //     let withdraw = 3000;
// //     if( withdraw <= balance){
// //         balance -= withdraw;

// //         console.log("Withdraw successful . New balance :" , balance);

// //     } else {
// //         console.log("Insufficient Balance");
// //     }
// //     break;

// //     case 3: 
// //     console.log("Thankuu for using ATM");
// //     break;

// //     default:
// //         console.log("invalid choice");
// //  }

// //  count vowels in the areray of strings 

// // let arr = ["applea" , "skya" , "orangea" , "whya"]

// // function countVowels(arr){
// //     let count = 0;

// //     for(let word of arr){
// //         for(let ch of word){
// //             if("aeiouAEIOU" .includes(ch)){
// //                 count++;
// //             }
// //         }
// //     }
// //     return count;
// // }

// // console.log(countVowels(arr));


// // largets word in the array 

// // function longestWord(arr) {
// //     let longest = arr[0];

// //     for(let word of arr){
// //         if(word.length > longest.length){
// //             longest = word;
// //         }
// //     }

// //     return longest;
// // }


// // function countVowelWords(sentence){
// //     let words = sentence.split(" ");
// //     let count = 0;

// //   for( let word of words){
// //     let first = word[0].toLowerCase();
// //     if("aeiou" .includes(first)){
// //         count++;
// //     }
// //   }
// //   return count;
// // }

// // console.log(countVowelWords("apple is orange and umbrella"));


// // function longestWord(arr){
// //     let longest = arr[0];

// //     for( let word of arr){
// //         if(word.length > longest.length){
// //             longest = word;
// //         }
// //     }

// //     return longest; 
// // }

// // console.log(longestWord(["cat" , "elephant" , "dog" , "tiger"]));

// // Seperate Even and Odd numbers 

// // function separateEvenOdd(arr){
// //     let even = [];
// //     let odd = [];

// //     for(let num of arr){
// //         if(num % 2 === 0){
// //             even.push(num);
// //         } else {
// //             odd.push(num);
// //         }
// //     }

// //     return { even , odd };
// // }

// // console.log(separateEvenOdd([1,2,3,4,5,6,7,8,9]));


// // function charFrquency(str){
// //      let freq = {};

// //      for (let ch of str){
// //         if(freq[ch]){
// //             freq[ch]++;
// //         } else {
// //             freq[ch] = 1;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
// //         }

// //      }
// // }

// // for( let i = 1; i <= 20; i++){
// //     if( i % 3 === 0 && i % 5 === 0){
// //         console.log("FizzBuzz");
// //     }

// //      else if( i % 5 === 0){
// //         console.log("Buzz");
// //     }

// //     else if( i % 3 === 0){
// //         console.log("Fizz");
// //     } else {
// //         console.log(i);
// //     }
// // }


// // let num = 121;
// // let orginal = num;
// // let rev = 0;

// // for( ; num > 0; num = Math.floor(num/10)){
// //     let digit = num % 10;
// //     rev = rev * 10 + digit;
// // }


// // console.log(orginal === rev ? "Palimdrome" : "Not Palimdrome");


// // let num = 12345;
// // let count = 0;

// // for(; num > 0; num = Math.floor(num / 10)){
// //     count++;
// // }

// // console.log("count = " , count);

// // let arr = [ 10,20,30,40,50];
// // let sum = 0;

// // for( let i = 0; i < arr.length; i++){
// //     sum += arr[i];
// // }

// // console.log(sum);

// // let arr = [5,12,8,20,23];
// // let max = arr[0];

// // for( let i = 1; i < arr.length; i++){
// //     if( arr[i] > max){
// //         max = arr[i];
// //     }
// // }

// // console.log(max);

// // let arr = [12,22,54,48,78,96,33];
// // let even = 0;
// // let odd = 0;

// // for( let i = 0; i < arr.length; i++){
// //     if(arr[i] % 2 === 0){
// //         even++;
// //     }else{
// //         odd++;
// //     }
// // }

// // console.log("even " , even);
// // console.log("odd" , odd);


// // let arr = [1,2,3,4];
// // let reversed = [];

// // for( let i = arr.length - 1; i >= 0; i--){
// //     reversed.push(arr[i]);
// // }

// // console.log(reversed);

// // let arr = [1,2,3,4];
// // arr.reverse();

// // console.log(arr);


// // let arr = [ 10,5,8,15];

// // let largest = arr[0];
// // let secondLargest = arr[0];

// // for( let i = 1; i < arr.length; i++){

// //     if( arr[i] > largest){
// //         secondLargest = largest;
// //         largest = arr[i];
// //     }
// // }

// // console.log("secondLargest = " , secondLargest);
// // console.log("Largest = " , largest);


// // let arr = [1,2,3,8,5,6,7,7,7,1,1];
// // let duplicates = [];

// // for( let i = 0; i < arr.length; i++){
// //     for( let j = i + 1; j < arr.length; j++){
// //         if(arr[i] === arr[j] && !duplicates.includes(arr[i])){
// //             duplicates.push(arr[i]);
// //         }
// //     }
// // }

// // console.log(duplicates);

// // let arr = [ 0,1,0,12,0,6,0];
// // let result = [];
// // let zeroCount = 0;

// // for(let i = 0; i < arr.length; i++){
// //     if( arr[i] === 0){
// //         zeroCount++;
// //     } else {
// //         result.push(arr[i]);
// //     }
// // }

// // for( let i = 0; i < zeroCount; i++){
// //     result.push(0);
// // }

// // console.log(result);


// // questions based on strings 


// // let str = "Harsh Gupta ";
// // let count = 0;

// // for( let ch of str ){
// //     if("aeiouAEIOU" .includes(ch)){
// //         count++;
// //     }
// // }

// // console.log(count);


// // let str = "hello";
// // let rev = "";

// // for ( let i = str.length-1; i >= 0; i--){
// //     rev += str[i];
// // }


// // console.log(rev);

// // let str = "hello";
// // let rev = "";

// // for ( let i = str.length-1; i >= 0; i--){
// //     rev += str[i];
// // }


// // console.log(rev);


// // largest number in the array 

// // let arr = [ 10,20,55,87,96,30,24,100];
// // let Max = arr[0];

// // for( let i = 1; i < arr.length; i++){
// //     if(arr[i] > Max){
// //         Max = arr[i];
// //     }
// // }

// // console.log("Max = " , Max);

// // count even and odd


// // let arr = [1,2,3,4,5,6,7,8,9,10,22,55,45,65,88,78];
// // let even = 0;
// // let odd = 0;

// // for(let i = 0; i < arr.length; i++){
// //     if( i % 2 === 0 ){
// //         even ++;
// //     } else {
// //         odd++;
// //     }
// // }

// // console.log(" Odd = " , odd);
// // console.log(" Even = " , even);


// // let arr = [1,2,3,4,5,6,7,8,9,10,22,55,45,65,88,78];
// // let even = [];
// // let odd = [];

// // for(let i = 0; i < arr.length; i++){
// //     if( arr[i] % 2 === 0 ){
// //         even.push(arr[i]);
// //     } else {
// //         odd.push(arr[i]);
// //     }
// // }

// // console.log(" Odd array  = " , odd);
// // console.log(" Even array = " , even);



// // let arr = [1,2,33,33,55,55,55];
// // let result = [];

// // for( let i = 0 ; i < arr.length; i++){
// //     if(!result.includes(arr[i])){
// //         result.push(arr[i]);
// //     }
// // }

// // console.log(result);


// // let str = "aabbc";
// // let freq = {};

// // for( let i = 0; i < str.length; i++){
// //     let char = str[i];

// //     if(freq[char]){
// //         freq[char]++;
// //     } else {
// //         freq[char] = 1;
// //     }
// // }

// // console.log(freq);

// // let arr = [ 10,5,8,20];
// // let largest = -Infinity;
// // let secondLargest = -Infinity;

// // for( let i = 0; i < arr.length; i++){
// //     if(arr[i] > largest){
// //         secondLargest = largest;
// //         largest = arr[i];
// //     } else if ( arr[i] > secondLargest && arr[i] !== largest) {
// //         secondLargest = arr[i];
// //     }
// // }

// // console.log(secondLargest , largest );

// // let str = "hello world";
// // let words = str.split(" ");
// // let result = "";

// // for (let i = 0; i < words.length; i++) {
// //   result += words[i][0].toUpperCase() + words[i].slice(1) + " ";
// // }

// // console.log(result.trim());


// // let str = "hello";
// // let freq = {};

// // for( let i = 0; i < str.length; i++){
// //   let char = str[i];

// //   if(freq[char]){
// //     freq[char]++;
// //   } else {
// //     freq[char] = 1;
// //   }
// // }

// // console.log(freq);


// // let arr = ["apple" , "banana" , "kiwi" , " strawberry"];
// // let longest = "";

// // for( let i = 0; i < arr.length; i++){
// //   if(arr[i].length > longest.length){
// //     longest = arr[i];
// //   }
// // }

// // console.log(longest);


// // to Remove duplicates

// // let arr = [1,2,2,2,5,6,6,6,8,7,9];
// // let result = [];

// // for(let i = 0; i < arr.length; i++){
// //   if(!result.includes(arr[i])){
// //     result.push(arr[i]);
// //   }
// // }

// // console.log(result);


// // let str1 = "listen";
// // let str2 = "silent";

// // if(str1.length !== str2.length){
// //   console.log(false);
// // } else {
// //   let sorted1 = str1.split("").sort().join("");
// //   let soretd2 = str2.split("").sort().join("");

// //   console.log(sorted1 === soretd2);
// // }


// // let arr = [10,20,30,40,50,60];
// // let sum = 0;

// // for(let i = 0; i < arr.length; i++){
// //   sum += arr[i];
// // }


// // let average = sum / arr.length;
// // let result = [];

// // for( let i = 0; i < arr.length; i++){
// //   if(arr[i] > average){
// //     result.push(arr[i]);
// //   }
// // }

// // console.log(result);

// // character frequency 

// // let str = " hello";
// // let freq = {};


// // for( let i = 0; i < str.length; i++){
// //   let char = str[i];

// //   if(freq[char]){
// //     freq[char]++;

// //   } else {
// //     freq[char] = 1;
// //   }


// // }

// // console.log(freq);

// // let arr = [ 1,2,2,2,5,6,8,9];
// // let result = [];

// // for(let i = 0; i < arr.length; i++){
// //   if(!result.includes(arr[i])) {
// //     result.push(arr[i]);
// //   }
// // }
// //   console.log(result);


// // let arr = [ 10,20,30,40,50,60];
// // let sum = 0;

// // for ( let i = 0; i < arr.length; i++){
// //   sum += arr[i];
// // }

// // let average = sum / arr.length;
// // let result = [];

// // for( let i = 0; i < arr.length; i++){
// //   if(arr[i] > average ){
// //     result.push(arr[i]);
// //   }
// // }

// // console.log(result);


// // function 

// // function greet(name){
// //     return "Hello  " + name + "!";
// // }
// //  console.log(greet("Riya"));

// // function isEven(num){
// //     return num % 2 === 0;
// // }

// // console.log(isEven(4));


// // square

// // function square(num){
// //     return num * num ;
// // }

// // console.log(square(5));


// // function getLength(str){
// //     let count = 0;

// //     for( let i = 0; str[i] !== undefined; i++){
// //         count++;
// //     }
// //     return count;
// // }

// // console.log(getLength("hello"));


// // function reverseString(str){
// //     let reversed = "";

// //     for( let i = str.length-1; i >= 0; i--){
// //         reversed += str[i];
// //     }

// //     return reversed;
// // }

// // console.log(reverseString("hello"));

// // function countVowels(str){

// //     let count = 0;
// //     let vowels = "aeiouAEIOU";

// //     for( let i = 0; i < str.length; i++){
// //         if(vowels.includes(str[i])){
// //             count++;
// //         }
// //     }

// //     return count;
// // }

// // console.log(countVowels("hello"));

// // let arr = [10,20,55,66,30];
// // function largestArr(arr){
// //     let largest = -Infinity;

// //     for( let i = 0; i < arr.length; i++){
// //         if(arr[i] > largest){
// //             largest = arr[i];
// //         }
// //     }

// //     return largest;
// // }

// // console.log(largestArr(arr));

// // function sumArr(arr){
// //     let sum = 0;

// //     for( let i = 0; i < arr.length; i++){
// //         sum += arr[i];

// //     }

// //     return sum;
// // }

// // console.log(sumArr([10,20,30]));


// // function isPalimdrome(str){
// //     let reversed = "";

// //     for(let i = str.length-1; i >= 0; i--){
// //         reversed += str[i];
// //     }

// //     return str === reversed;
// // }

// // console.log(isPalimdrome("madam"));


// // function isPalimdrome (str) {
// //     let reversed = "";

// //     for( let i = str.length-1; i >= 0; i--){
// //         reversed += str[i];
// //     }

// //     return str === reversed;
// // }

// // console.log(isPalimdrome("madam"));


// // function factorial(n) {
// //     let result = 1;

// //     for(let i = 1; i <= n; i++){
// //         result *= i;
// //     }

// //     return result;
// // }

// // console.log(factorial(5));

// // remove Duplocates (arr)

// function removeDuplicates(arr) {
//     let result = [];

//     for(let i = 0; i < arr.length; i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i]);
//         }
//     }
//     return result;

// }
// console.log(removeDuplicates([1,2,3,3,3,3,4,5,6,7,8,9,10,20,30]));


// function countFrequency (str , char){
//     let count = 0;

//     for( let i = 0; i < str.length; i++){
//         if(str[i] === char){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countFrequency("hello" , "1"));

// function secondLargest (arr){
//     let largest = -Infinity;
//     let secondLargest = -Infinity;

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             secondLargest = largest;
//             largest = arr[i];
//         } else if ( arr[i] > second && arr[i] !== largest){
//             second = arr[i];
//         }
//     }

//     return second;
// }

// console.log(secondLargest([10,5,20,8]));


// function capitalizeWords(str) {
//     let words = str.split(" ");
//     let result = [];

//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         result.push(word[0].toUpperCase() + word.slice(1));
//     }

//     return result.join(" ");
// }

// console.log(capitalizeWords("hello world"));


// function capitalizeWords(str){
//     let words = str.split(" ");
//     let result = [];

//     for( let i = 0; i < words.length; i++){
//         let word = words[i];
//         result.push(word[0].toUpperCase() + word.slice(1));
//     }

//     return result.join (" ");
// }

// console.log(capitalizeWords("hello world"));

// find common elements 

// function findCommonElements(arr1, arr2) {
//     let result = [];

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
//             result.push(arr1[i]);
//         }
//     }

//     return result;
// }

// console.log(findCommonElements([1, 2, 3], [2, 3, 4]));


// function without arguments 

// function greet () {
//     console.log("hello riya ");
// }

// greet();
// greet();
// greet();

// function greet (name){
//     console.log("Hello" + name);
// }

// greet(" Riya");
// greet(" Ankit");


// function print () {
//     console.log(" I am learning java script ");
// }

// print();
// print();


// function square (num){
//   console.log(" square is " , num * num);
// }

// square(5);
// square(50);

// let str = "Harsh";
// function lengthOfString(str){
//     let count = 0;
//     for( let i = 0; i < str.length; i++){
//         count ++;
//     }

//     return count;
// }

// console.log(lengthOfString(str));



// function addNumbers ( num1,num2){
//     return num1 + num2;
// }

// console.log(addNumbers(5,3));


// function addNumbers(num1 , num2){
//     return num1 + num2;
// }

// let num1 = Number( prompt("Enter first number : "));
// let num2 = Number(prompt("Enter Second number : "));



// console.log("Sum is : " , num1 + num2 );

// function checkEvenOddArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i] + " is Even");
//         } else {
//             console.log(arr[i] + " is Odd");
//         }
//     }
// }

// checkEvenOddArray([1, 2, 3, 45, 66, 54, 55]);


// let str = "Harsh Gupta";

//  function countVowels (str) {

//     let count = 0;
//     for( let i = 0; i < str.length; i++){
//         if("aeiouAEIOU" .includes(str[i])){
//             count++;
//         }
//     }

//     return count;
//  }

//  console.log(" count = " , countVowels(str));

// let arr = [ 12,22,56,66];

// function largestNumber (arr){

//     let largest = arr[0];

//     for( let i = 0; i < arr.length; i++){
//         if( arr[i] > largest){
//             largest = arr[i];
//         }
//     }

//     return largest;
// }

// console.log(largestNumber(arr));


// function toUpperCaseString(str){
//     return str.toUpperCase();
// }

// console.log(toUpperCaseString("harsh"));


// Write a function that checks if a string is a palindrome.

// let str = "madam";

// function isPalindrome(str) {
//     let rev = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         rev += str[i];
//     }

//     if (str === rev) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isPalindrome(str));



// Write a function to Couint vowels 

// let str = "Harsh Gupta";

// function countVowels (str) {

//     let count = 0;
//     for( let ch of str) {
//         if("aeiouAEIOU" .includes(ch)){
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels(str));


// let str = "Harsh GUptaaaa";
//  function countVowels (str) {
//      let count = 0;
//      for( let ch of str ){
//         if("aeiouAEIOU" .includes(ch)){
//             count++;
//         }
//      }

//      return count;
//  }

//  console.log(countVowels(str));


// function that return the sum of all the numbers in the array 

// let arr = [12,52,62];

// function sumOfArray(arr){
//     let sum = 0;

//     for( let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//       return sum;
// }

// console.log(sumOfArray(arr));



// function that returns a largest number in the array

// let arr = [ 12,52,54,8,88];

// function largestNumber(arr) {

//     let largest = arr[0];
//     for( let i = 0; i < arr.length; i++){
//         if ( arr[i] > largest ){
//             largest = arr [i];
//         }
//     }

//     return largest ;
// }

// console.log( largestNumber(arr));


// isPalimdrome


// let str = "madam";

// function isPalindrome(str){

//     let rev = "";

//     for(let i = str.length-1; i >= 0; i--){
//         rev += str[i];
//     }

//     return  str === rev;
// }
//  console.log(isPalindrome(str));

// let n = 3; 

// function factorial(n){
//     let result = 1;

//     for( let i = 1; i <= n; i++){
//         result *= i;
//     }

//     return result;
// }

// console.log(factorial(n));


// Count occurance 
// function countOccurance ( str , char){
//     let count = 0;

//     for( let ch of str ){
//         if(ch === char){
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countOccurance("programming" , "g"));


// remove duplicates

// let arr = [1,2,2,5,3,9];

// function removeDuplicates(arr){
//     let result = [];

//     for(let num of arr){
//         if(!result.includes(num)){
//             result.push(num);
//         }
//     }

//     return result;
// }


// console.log(removeDuplicates(arr));

//  let arr = [20,52,55,69];
// function secondLargest (arr) {
//     let largest = -Infinity;
//     let secondLargest = -Infinity;

//     for( let num of arr){
//         if ( num > largest){
//             second = largest;
//             largest = num;
//         } else if ( num > second && num !== largest){
//             second = num;
//         }
//     }

//   return second;
// }

// console.log(secondLargest(arr));

// function longestWord (sentence) {
//     let words = sentence.split(" ");
//     let longest = "";

//     for(let word of words){
//         if(word.length > longest.length){
//             longest = word;
//         }
//     }

//     return longest;
// }
//  console.log(longestWord(" i love java script"));


// function sumOfDigits(num){
//     let sum = 0;
//     for ( ; num > 0; num = Math.floor(num / 10)){
//         sum += num % 10;
//     }

//     return sum;
// }

// console.log(sumOfDigits(123));

// function sumOfDigits(num) {
//     let sum = 0;

//     while ( num > 0) {
//         sum += num % 10;
//         num = Math.floor(num/10);
//     }

//     return sum;
// }

// console.log(sumOfDigits(1234));


// function isAnagram( str1 , str2){
//     if( str1.length !== str2.length) return false;

//     let sorted1 = str1.split("").sort().join("");
//      let sorted2 = str2.split("").sort().join("");

//      return sorted1 === sorted2;
// }
// console.log(isAnagram("listen" , "silent"));


// function FrequencyCounter(str){
//     let obj = {};

//     for(let char of str){
//         if(obj[char]){
//             obj[char]++;
//         } else {
//             obj[char] = 1;
//         }
//     }

//     return obj;
// }

// console.log(FrequencyCounter("aabbc"));

// function countOccurance(str , char){
//     let count = 0;

//     for(let ch of str){
//         if(ch === char){
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countOccurance("programming" , "g"));


// function calculator ( num1, num2, operator){
//     switch (operator){
//         case "+":
//             return num1 + num2;

//             case "-":
//             return num1 - num2;

//             case "*":
//             return num1 * num2;

//             case "/":
//             return num2 !== 0 ? num1 / num2: " cannot divide by zero";


//             default:
//                 return "Invalid Operator";

//     }
// }

// console.log(calculator(10,5,"+"));


// function getDay(dayNumber) {
//     switch (dayNumber) {
//         case 1:
//             return Monday;

//         case 2:
//             return Tuesday;

//         case 3:
//             return Wednesday;
//         case 4:
//             return Thursday;
//         case 5:
//             return Friday;
//         case 6:
//             return Saturday;
//         case 7:
//             return Sunday;
//         default:
//             return "invalid day number";







//     }
// }

// console.log(getDay(3));


// function getGrade(marks) {
//     switch(true){
//         case ( marks >= 90):
//             return "A";

//             case ( marks >= 75):
//                 return "B";
//                 case ( marks >= 50):
//                     return "C";
//                     default:
//                         return "Fail";

//     }
// }

// console.log(getGrade(82));

// function trafficSignal(color){
//     switch (color.toLowerCase()) {
//         case "red":
//             return "Stop";
//         case "yellow":
//             return "Get Ready";
//         case "Green":
//             return "Go";
//             default:
//                 return "Invalid Signal";

//     }
// }

// console.log(trafficSignal("red"));


// function monthName(month){
//     switch(month){
//              case 1:
//             return "January";
//              case 2:
//             return "feburary";
//              case 3:
//             return "March";
//              case 4:
//             return "April";
//              case 5:
//             return "May";
//              case 6:
//             return "June";
//              case 7:
//             return "July";
//              case 8:
//             return "August";
//              case 9:
//             return "September";
//              case 10:
//             return "October";
//              case 11:
//             return "November";
//              case 12:
//             return "December";
//              default:
//             return "Invalid Month Number";

//     }
// }

// console.log(monthName(6));

// function checkCharacter(char) {
//     switch (char.toLowerCase()) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//             return "Vowel";

//             default:
//                 if(char.match(/[a-z]/i)){
//                     return "consonant";
//                 } else {
//                     return " not an alphabet";
//                 }
//     }
// }


// console.log(checkCharacter("E"));

// function calculate(num1 , num2 , operator){
//     switch(operator){
//         case "+":
//             return num1 + num2;
//             case "-":
//                 return num1 - num2;
//                 case"*":
//                 return num1 * num2;
//                 case "/":
//                     return num2 !== 0 ? num1/num2 : "cannot divide by zero";
//                     default:
//                         return "invalid operator";
//     }
// }

// console.log(calculate(5,3,"+"));


// function checkGrade(marks){
//     switch(true){
//         case (marks >= 90):
//             return "A";
//             case (marks >= 75):
//                 return "B";
//                 case ( marks >= 50):
//                     return "C";
//                     default:
//                         return "Fail";
//     }
// }

// console.log(checkGrade(85));


// function browserMessage(browser){
//     switch(browser.toLowerCase()){
//         case "chrome":
//             return "You are Using Google Chrome";
//             case "Firefox":
//                 return "you are using MOzilla Firefox";
//                 case "edge":
//                     return "you are using Microsoft edge";
//                     default:
//                         return "Unknown Browser";

//     }
// }
// console.log(browserMessage("chrome"));


// function atmMenu(choice){
//     switch(choice){
//         case 1:
//             return "Checking Balance...";
//             case 2:
//                 return "Withdrwal Money..";
//                 case 3:
//                     return "Deposit MOney..";
//                     case 4:
//                         return "Exit..";
//                         default:
//                             return "Invalid Option";
            
//     }
// }

// console.log(atmMenu(2));

// function reverseNumber(num){
//     let reversed = 0;
//    while ( num > 0){
       
//         let digit = num % 10;
//          reversed = reversed * 10 + digit;
//           num = Math.floor(num / 10);
         
//     }

//     return reversed;
// }

// console.log(reverseNumber(1234));

// function countCharacter(str, char){
//     let count = 0;

//     for( let ch of str){
//         if(ch === char){
//             count ++;
//         }
//     }
//     return count;
// }

// console.log(countCharacter("banana" , "a"));
// console.log(countCharacter("banana" , "a"));
// console.log(countCharacter("banana" , "a"));


// function secondLargest(arr){
//     let largest = -Infinity;
//     let second = -Infinity;

//     for ( let num of arr){
//         if ( num > largest ){
//             second = largest;
//             largest = num;
//         } else if ( num > second && num !== largest){
//             second = num;
//         }
//     }
//     return {second , largest};
// }

// let result = secondLargest([10,20,55,23]);

// console.log("Largest : " , result.largest);
// console.log("Second Largest : " , result.second);


// function isAnagrams(str1 , str2){
//     let s1 = str1.toLowerCase().split("").sort().join("");
//       let s2 = str2.toLowerCase().split("").sort().join("");

//       return s1 === s2;
// }

// console.log(isAnagrams("listen", "silent"));


// function removeDuplicates(arr){
//     let result = [];

//     for( let num of arr){
//         if(!result.includes(num)){
//             result.push(num);
//         }
//     }

//     return result;
// }

// console.log(removeDuplicates([1,2,2,2,5,6]));


// function longestWord(sentence){
//     let words = sentence.split(" ");
//     let longest = "";

//     for( let word of words){
//         if(word.length > longest.length){
//             longest = word;
//         }
//     }

//     return longest;
// }

// console.log(longestWord(" i love javascript"));


// function charFrquency(str){
//     let freq = {};

//     for(let ch of str){
//         if(freq[ch]){
//             freq[ch]++;
//         } else {
//             freq[ch] = 1;
//         }
//     }

//     return freq;
// }

// console.log(charFrquency("hello"));


function rotateArray(arr, k) {
    k = k % arr.length; // handle large k

    return arr.slice(-k).concat(arr.slice(0, arr.length - k));
}

console.log(rotateArray([1,2,3,4,5], 2));
// [4,5,1,2,3]


function rotateArray(arr,k){
    k = k % arr.length;

    return arr.slice(-k).concat(arr.slice(0 , arr.length - k));

    
}

 console.log(rotateArray([1,2,3,4,5] , 3));
