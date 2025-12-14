// practice question 1 

// let number = prompt("Enter a number");

// number = Number(number);

// if(number % 2  !== 0 && number % number === 0 )
// {
//     console.log( number + "is prime ");
// } else {
//     console.log( number + "is composite");
// }

// practice qestion 2 

// let age = prompt(" Enter a age ");
// age = Number(age);

// if( age < 13){
//     console.log("child");
// } else if ( age >= 13 && age <= 19 ){
//     console.log("teenager");
// }else {
//     console.log("Adult");
// }



// Write a program to find the sum of digits of a number.

// let i = 13 ;

//     do{console.log(" i = " , i);
//     i--; }

//    while (i >= 1)



// Print the multiplication table of any number entered by the user.

// let num1 = prompt("Enter the first number");
// let num2 = prompt("Enter the second number");

// num1 = Number(num1);
// num2 = Number(num2);

// if( num1 > num2 ){
//     console.log( " number1 is graeter than number 2 " );
// } else if ( num2 > num1 ){
//     console.log( "number2 is graeter than number 1");
// } else {
//     console.log("both numbers are equal ");
// }


/*
practice questions 
Reverse a string entered by the user (e.g., “hello” → “olleh”) */

// let str = prompt(" Enter a string");

// let reverse = str.split("").reverse("").join("");
// console.log("reverse string : " , reverse);

// print numbers from 1 to 10 using a for loop

// let i=1 ;
// for(i=1; i <= 100; i++){
//     if( i % 2 === 0)
//     {console.log( "i = " ,i);
// }}

// let i=1;
// while(i <= 30){
//     if( i % 2 === 0)
//    {console.log( "i = " ,i)}
//     i++;
   
// }
// print odd numbers from 1-20 using do while loop 
// let i=1;
// do{
//     if( i % 2 ==! 0)
//     {console.log(" i = " , i);}
//     i++;
// } while( i <= 20);

// Calculate the sum of the first 10 natural numbers.
// let sum = 0;
// for( i = 1; i <= 10;  i++){
//     { sum =  sum + i ;}
//    }

//     console.log(" sum of first 10 natural numbers is :  " , sum );

//  


// Print the multiplication table of 5

// for( i = 1 ; i <= 20 ; i++){
//     console.log("5 * " + i + " = " , (5 * i));
// }
// do while loop
// let i = 1 ;
// do{
//     console.log(" 5 * " + i + " = ", ( 5 * i));
//     i++;
// } while ( i <= 10);

// while loop 
// let i = 1;
// while ( i <= 10){
//     console.log(" 5 * " + i + " = ", ( 5 * i));
//     i++;
// }3

// Find the factorial of a number entered by the user.

// let num = prompt(" enter a  number : ");
// num = Number(num);

// let fact = 1 ;

// for( let i = 1; i <= num; i++ ){
//     fact = fact * i;
// }

 
//  to print factorial of a number 
// let i = 1;
// let fact = 1;

//  let num = prompt(" Enter a number ")
//  while ( i <= num){
//       fact = fact * i;
//       i++;
//  }

//  console.log("factorial of " + num + " is : " + fact);


// to print factorial of a number 
// let num = prompt(" Enter a number : ")
// num = Number(num);

//  let i = 1;
// let fact = 1;

// do{
    
//     fact = fact * i;
//       i++;
// }while( i <= 10);

// console.log("Factorial of " + num + " is: " + fact);

// Count how many digits are in a given number (e.g., 12345 → 5).

// 

// let num = prompt(" enter a number : ");
// num = Number(num);

// let count = 0 ;
//  while (num > 0) {
//     num = Math.floor( num / 10);
//     count++;
//  }

//  console.log(" Number of digits : " + count);


//  doing same question using a do while loop 
//  let num = prompt(" Enter a number : ");
//  num = Number(num);

// let count = 0;
// do{
//     num = Math.floor(num / 10);
//     count++;
// } while( num > 0);

// console.log(" number of digits :  " + count);


// Reverse a number (e.g., 123 → 321) using a loop


// let num = Number(prompt(" Enter a number : "));
// let reversed = 0;

// while ( num > 0) {
//     let digit = num % 10;
//     reversed = reversed * 10 + digit ;
//     num = Math.floor( num / 10);
// }
   
// console.log(" reversed number : " + reversed );


// let num = prompt(" Enter a number : ");
// num = Number(num);

// let fact = 1;
// let i = 1;

// while( i <= n){
//     fact = fact*i;
//     i++;
// }
// console.log(" Factorial of " + n + " is: " + fact);

// let num = Number(prompt("Enter a number : "));
// let reversed = 0;

// while (num > 0){
//     let digit = num % 10;
//     reversed = reversed * 10 + digit;
//     num = Math.floor(num / 10 );
// }

// console.log(" Reversed number : " + reversed);


// armstrong number 

// let num = prompt(" Enter a number : ");
// num = Number(num);
// let originalNum = num;
// let sum = 0;

// let digits = num.toString().leng
// while( num > 0){
//     let digit = num % 10;
//     sum += Math.pow( digit , digits);
//     num = Math.floor( num / 10 );
// }
// if( sum === origfinalnum){
//     console.log(originalNum + " is an armstrong number");
// } else {
//     console.log( originalNum + " is not an Armstrong n")
// }
   
//  practice questions on loops 

// for ( let i = 5; i <= 100; i++) {
//     if ( i % 5 == 0)
//    { console.log("i = " , i );}
// }

// let sum = 0;
// for( let i = 1; i <= 20; i++){
//     sum = sum + i ;
// }
// console.log(" sum of numbers from 1 to 20  is : " , sum );

// doing same question using while loop 

// let i = 1 , sum = 0;
//  do
//     {
//     sum = sum + i ;
//     i++;
//   }  while ( i <= 20);

//   console.log( "sum using  do - while loop : " , sum);


// let str = prompt(" enter a string : ");
// let reversed = "";

// for( let i = str.length - 1 ; i >= 0; i--){
//   reversed = reversed + str[i]
// }
//  console.log(" Reversed string : " + reversed);

// count how many vowels are there in a string 

// let str = "javascript";
// let count = 0;

// for( let i = 0; i < str.length; i++){
//     let ch = str[i].toLowerCase();
//     if( ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u" ){
//         count++;
//     }
// }

// console.log("Vowels:", count);

// calculate factorial using a loop 
//  let num = prompt("enter a number ")
//  num = Number(num);
 
//   let fact = 1;

//  for ( let i = 1; i <= num; i++){
//     fact *= i;
//  }
//     console.log(fact);

// prime number divisible by 7 but not 5 between 1- 100

// for ( let i = 1; i <= 100; i++)
// {
//     if( i % 7 === 0 && i % 5 !== 0){
       
//         console.log(i)
//     }
// } 
//  let num = Number(prompt("Enter a Number "));
//  let count = 0;

//  while ( num > 0){
//     count++;
//     num = Math.floor(num / 10);
//  }

//  console.log(" Digits : " , count);
// java svript program fibonacci series 

// let n = Number(prompt( " Enter how many terms "));

// let a = 0, b = 1;
// console.log(a);
// console.log(b);
//  for (let i = 3; i <= n; i++){
//     let next = a+b ;
//     console.log(next);

//     a = b;
//     b = next;
//  }

// arrays 

// let marks = [85,97,44,37,76,60];

// let sum = 0;
// for( let val of marks ){
//     sum  += val ;
// }
//  let avg = sum / marks.length;
//  console.log( `avg. marks of the class = ${avg}`)    ;

//  Array in methods 

// let veggies = ["patato","onion","tamoto","Garlic","Ginger"];

// veggies.push("chips","berger","cold drink", " chowmin");

// console.log(veggies);

// 
// function myFunction(){
//     console.log("welcome to apna collage ");
//     console.log(" Here we are learning coding ");
//     console.log(" here we are doing coding in vs code ");
// }

// myFunction();
// myFunction();

// myFunction();

// function sum ( x, y ){
//     s = x+y;
//     return s;
// }
// const x=5;
// const arrowSum = ( a,b ) => {
//     console.log(a+b);
// };

//   function mul(x,y){
//     return x*y;
//   }

//   const arrowMul = (x,y) => {
//     console.log(x*y);
//   };


//  function countVowels(str){
//     let count = 0 ;
//     for(  const char of str ){
//         if(
//             char === "a" ||
//              char === "e" ||
//               char === "i" ||
//                char === "o" ||
//                char === "u" 

//         ){
//             count ++;
//         }
//     }
//    return (count);
//  }

//   const countVow = (str) => {
//      let count = 0 ;
//     for(  const char of str ){
//         if(
//             char === "a" ||
//              char === "e" ||
//               char === "i" ||
//                char === "o" ||
//                char === "u" 

//         ){
//             count ++;
//         }
//     }
//    return (count);
//   }


// const printHello = () => {
//     console.log("Hello");
// };

// program to check whether a number is prime or not 

// let num = Number(prompt("Enter a number"));
// let isPrime = true;

// for( let i = 2; i < num ; i++){
//     if(num  % i === 0) {
//        isPrime = false ; 
//        break;
//     }
// }
  
// if( num < 2){
//     console.log("it is not a prime number ");
// }
// else if (isPrime){
//     console.log("it is a prime number ");
// }
// else {
//     console.log(" It is not a prime number");
// }


// Factorial of a number 
// num = Number(prompt("Enter a number "));
// let fact = 1;
// for ( let i = 1; i<= num; i++){
//     fact = fact * i ;
// }
//  console.log("factorial of " , num, "is = " ,  fact );

// factorial of a number using functions 

// function factorial(n) {
//     let fact = 1; 
//     for( let i = 1; i <= n; i++ )
//        { fact = fact * i ;}
//     return fact ; 
// }

// console.log(factorial(7));

// COUNT VOWELS 
// function countVowels(str){
//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for ( let char of str){
//         if(vowels.includes (char)){
//             count ++;
//         }
//     }
//     return count;
// }

// console.log(countVowels("javascript"));

// Sum of two numbers 
// function mul(a,b){
//     return a * b;
// }

// console.log(mul(2,3));

// function printName(){
//     for ( let i = 0; i < 5; i++){
//         console.log("Your Name");
//     }
// }

// printName();

// function isEven(num){
//     if( num % 2 === 0 ) return "even";
//     else return "odd";
// }

// console.log(isEven(9));

// function square(n){
//     return n*n;
// }

// console.log(square(6));

// function printName(name){
//     for( let i = 0; i < 5; i++){
//         console.log(name);
//     }
// }

// printName("Anmol Sachdeva");

// function largest( a,b){
//     if(a>b) return a;
//     return b;
// }
// console.log(largest(10 , 30 ));

// function getLength(str){
//     return str.length;
// }
// console.log(getLength("HarshGupta"))

// For a given array of numbers , print the square of each value using the for each loop 

// let numbers = [ 2,3,4,5];
// numbers.forEach((num) =>{
//     console.log(num * num *num);
// });

// function modulo (x,y){
//     m = x / y ;
//     return m;
// }

// let val = modulo(3,1);
// console.log(val);

// function sum (x,y){
//     console.log(x+y);
// }
// //  Arrow Functions 
// // sum functions 
// function sum (a,b){
//     return a+b;
// }

// const arrowSum = (a,b) => {
//     console.log(a+b);
// };

// const arrowMul = (a,b) => {
//     console.log(a*b);
// };

// function countVowels (str){
//     let count = 0;
//     for( const char of str){
//         if(
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u" 
//         ){
//             count++;
//         }
//     }
//     console.log(count);
// }

// let nums = [2,3,45,6];

//  let  newArr = nums.map((val) => {
//    return val;
// });

// console.log(newArr);

// let arr = [1,2,3,4,5,6,7,8];
// let evenArr = arr.filter ((val) => {
//     return val % 2 === 0;
// });

// console.log(evenArr);
// some  ore array methods 

// let arr = [1,2,3,4,5,6 , 1234];
//  const output = arr.reduce ((prev, curr) => {
//     return prev > curr? prev : curr;
//  });

//  console.log(output);


//  let arr = [ 87,99,87,67,89,65,45,56,78,99,89];
//  let toppers = arr.filter(( val ) => {
//     return val > 90;
// })

// console.log(toppers);

// let n = prompt("enter a number : ");

// let arr = [];

// for(let i=1; i<=n;i++){
//     arr[i+2] = i;
// }
// console.log(arr);


// let sum = arr.reduce((res, curr) => {
//    return  res + curr;
// });
//   console.log("sum = ", sum);

//   let Factorial = arr.reduce((res, curr) => {
//    return  res * curr;
// });
//   console.log("Factorial : " , Factorial);

// basic questions of arrow functions 


// function add (a,b) {
//     return a + b ; 
//  }
//  console.log(add(4,5));

//  function mul (a,b) {
//     return a * b ; 
//  }
//  console.log(mul(4,5));

//  function sub (a,b) {
//     return a - b ; 
//  }
//  console.log(sub(4,5));

// let n = prompt("enter a number : ");
//   let number = Number(prompt("Enter a number : "));

  
//  function isEven(num){
//     if(num % 2 === 0 ){
//         return  num + " is even number ";
//     }
//     return  num + " is odd number " ;
// }



// console.log(isEven(number));

// let number = Number(prompt("Enter a number"));
//  function cube  (n){

//     return n*n*n ;
//  }

//  console.log(cube(number));

// function printName(name) {
//     for(let i = 1; i <= 5; i++ ){
//         console.log(name);
//     }
// }
// printName("Riya");
// let age = Number(prompt("Enter age of the person : "))
// function canVote(age){
//     if(age >= 18){
//         return  age + " - Eligable to vote ";
//     }
//     else {
//         return  age + " -  Not eligable to Vote "
//     }
// }

// console.log(canVote(age));


// largest of two numbers 
//  let num1 = Number(prompt("Enter first number "));

//   let num2 = Number(prompt("Enter second number "));
// function largest(a,b){
//     if(a>b) return  a;
//     else return  b;
// }

// console.log(largest(num1,num2));

// let num = Number(prompt("Enter the  number "));
// function factorial(n) {
//     let fact = 1;
//     for(let i = 1; i <= n; i++){
//         fact = fact*i;
//     }
//     return fact ; 
// }
// console.log(factorial(num));
// let word = prompt("Enter the word");
// function reverseString(str){
//     let rev = "";
//     for (let ch of str){
//         rev = ch + rev;
//     }
//     return rev;
// }

// console.log(reverseString(word));


// Double each number in an array

// let arr = [1,2,3,4]

// let doubled = arr.map( num => num * 2);
// console.log(doubled);

    // let arr = [2,3,4,5,]

    // let square = arr.map( num => num*num);
    // console.log(square);


//  let names = ["harsh" , "priya" , "aman"];

//  let upperNames = names.map(name => name.toUpperCase());

//  console.log(upperNames);


// let names = ["kapish" , "keshav" , "Akshay"];
// let length = names.map( names => names.length);

// console.log(length);

// convert each number ino its string form 

// let num = [ 22,45,67,87,99];

// let plusFive = num.map( num => num + 5 );

// console.log(plusFive);

// let celsius = [0,10,20,30];

// let fahrenheit = celsius.map( c => (c*9/5) + 32);
// console.log(fahrenheit);

// let words = ["hi" , "bye" , "see you "];

// let excited = words.map ( w => w + "!");

// console.log(excited);

// let numbers = [1,2,3,4,5,6,7]

// let isEven = numbers.map( n => n % 2 === 0);

// console.log(isEven);


// let arr = [ 4,5,-6,-7];

// let result = arr.map ( num => {
//     if (num > 0) return "positive";
//     else if (num < 0) return "negative";
//     else return "zero";

// });

// console.log(result);

// let years = [2000 , 1995 , 2010];

// let ages = years.map( y => 2025 - y);

// console.log(ages);

// let phrases = ["hello world" , "harsh Gupta " , "good morning "];

// let camel = phrases.map(str => {
//     let parts = str.split(" ");
//     return parts[0] + parts[1][0]. toUpperCase() + parts[1].slice(1);
// });

// console.log(camel);

// Extract domain names from email addresses




// let emails = ["riya@gmail.com" , "ajay@gmail.com" , "sam@gmail.com", "chirag@gmail.com"];

// let names = emails.map(email => email.split("@")[0] + "," + email.split("@")[1].split(".")[0][0] + "," + email.split(".") [1])  ;

// console.log( names);






// let domains = emails.map(email => email.split("@")[1]) ;
//  let com =  emails.map(email => email.split(".")[1]) ;

//  let arr = [[...names,...domains,...com]]
 
// console.log( names);

// create array of objects with index num

// let items = ["a","b","c"];

// let objects = items.map((value , index) => {
//     return { index: index, value: value};
// });

// console.log(objects);


// sqquare numbers but return "big " if > 100

// let nums = [ 5,4,8,14];

// let output =  nums.map( n => {
//     let sq = n*n; 
   
//     if( sq > 20 && sq < 50) {
//         return "small";
//     }

//     else if ( sq > 50 && sq < 90){
//         return "big";
//     }
//     else{ 
//         return sq;

//     }
    
// });

// console.log(output);




//  Reverse each string and add “!”

// let arrStr = ["abc" , "hello" , "js"];

// let reversed = arrStr.map(str => {
//     return str.split("").reverse().join("") + "!";
// });

// console.log(reversed);


// let num = [3,4,5,6];

//  let squares = nums.map( n => n*n);

//  console.log(squares);

// let words = ["Harsh" , "kapish" ,"harish"];


// let out = words.map( w => w.toLowerCase());

// console.log(out);


// let nums = [3,4,6,7,8];

// let out = nums.map(nums => nums + 10);

// console.log(out);


// extract only names from object

// let users = [
//     {name: "A", age: 20},
//     {name: "B", age: 30},
//     {name: "C", age: 25}
// ];

// let out = users.map(users => users.name);

// console.log(out);

// let nums = [66,54,87];

// let out = nums.map ( (value,index) => value*index);

// console.log(out);


// print first letter of each string 

// let words = ["cat", "dog", "sun"];

// let out = words.map(w => w[0] + w[1]);

// console.log(out);

// let words = ["Hello" ,"javascript","ashveersingh" , "Harshita"];

// let out = words.filter( words => words.length < 4 );

// console.log(out);


// let friends   = ["harsh","kapish","Anmol bhiaya","Tushar","keshav"];
// let add = friends.map( w  =>  w + "!");

// console.log(add);


// let nums = [3,4,5,6,7];

// let square = nums.map( nums => nums * nums);

// console.log(square);

// let names = ["Harsh Gupta", "Akshay Bhushan", "Simran Kaur"];

// let initials = names.map( name => name.split (" ")[0][0] + name.split(" ")[1][0] );

// console.log(initials);


// let words = ["political science" , "accountancy" , "scoence"];

// let chars = words.map( w => w.slice(0,3));

// console.log(chars);

// let msgs = ["hello" , "how" ,"are you" ,"kaise ho app " , "what happened"];

// let sliced = msgs.map( m => m.slice(-2));

// console.log(sliced);

// let emails = ["harsh123@gmail.com"  ,"riya321@gmail.com" ,"anmolsachdeva007@gmail.com"];

// let usernames = emails.map( e => e.split("@")[1].slice(0,4));

// console.log(usernames);


// let langs = ["phyton","java script" , "coding"];

// let masked = langs.map(w => w.slice(0,-3) + "***");

// console.log(masked);


// let names = ["Riya Gupta" , "Chirag Gupta" , "Dinesh Gupta "];

// let urlNames = names.map( n => n.split(" ").join("_"));

// console.log(urlNames);

// for (let i = 2; i <= 20; i+= 2 ){
//     console.log(" i = " ,i)
// }

// for( i = 1; i <= 5; i++){
//     console.log(" i = " , i*3)
// }


// let arr = [10,20,30,40];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }


// let sum = 0;

// for(let i = 1; i <= 5; i++){
//     sum += i;
// }

// console.log("Sum is : " ,sum);

// for ( let num = 1; num <= 100; num++ ){
//     if( num % 3 === 0 && num % 5 === 0){
//         console.log(num);
//     }
// }


// let arr = [12,9,44,17,18,6];
// let count = 0;

// for(let i = 0; i < arr.length; i++){
//  if(arr[i] % 2 === 0){
//     count++;
//  }
// }

// console.log("Total even numbers: ", count);


// let arr = ["a" , "b" , "c" , "d"];
// for( i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i]);
// }

// let nums = [12, 5, 67, 33, 89, 21];

// let largest = nums[0];

// for( let i = 0; i < nums.length; i++){
//     if(nums[i] > largest){
//         largest = nums[i];
//     }
// }

// console.log("Largest: " , largest);


// let n = Number(prompt("enter a number : "));
// let fact = 1;

// for (let i = 1; i <= n; i++) {
//     fact *= i;
// }

// console.log("Factorial of " , n , "is" , fact);

// let n = Number(prompt("enter a number : "));

// for(let i = 1; i <= 10; i++){
//     console.log( n + "*" + i + "="  + (n * i));
// }

// let str = "java script";
// let vowels = "aeiou";
// let count = 0;

// for (let i = 0; i < str.length; i++){
//     if(vowels.includes(str[i])){
//         count++;
//     }
// }

// console.log("Vowel count : " , count );

// let sum = 0;

// for(let i = 1 ; i <= 50; i++){
//     if( i % 2 === 0){
//         sum += i;
//     }
// }

// console.log("sum:" , sum);

// let n = Number(prompt("Enter a number"));

// if( n === 0){
//     console.log("Zero");
// } else if (n > 0){
//     if( n % 2 === 0) console.log("positive Even");
//     else console.log("psoitve odd");
// } else{
//     if( n % 2 === 0) console.log("negative even");
//     else console.log("negative odd");
// }

//  let year = 2000;

//  if(year % 400 === 0 ){
//     console.log("leap year");
//  } else if ( year % 100 === 0){
//     console.log("not a leap year");
//  } else if ( year % 4 === 0){
//     console.log("leap year");
//  } else {
//     console.log("Not a leap year ");
//  }


// let price = 4200;
// let discount = 0;

// if ( prize > 5000){
//     discount = 0.20;
// } else if (prize > 3000){
//     discount = 0.10;
// } else if ( prize > 1000){
//     discount = 0.05;
// } else {
//     discount = 0;
// }

// console.log(prize);


// let age = 25;
// let day = "weekend";
// let price ;


// if(age< 12) {
//     price  =  150;
// } else if ( age <= 18){
//          price = 200;
// } else {
//     if( day = "weekday"){
//         price = 300;
//     } else {
//         price = 350;
//     }
// }

// console.log(" Ticket price : $ " + price);

// let score = 99;

// if ( score > 90){
//     console.log("A");
// } else if ( score >= 80){
//     console.log("B");
// } else if ( score >= 70){
//     console.log("C");
// }    else {
//     if(score < 40 ){
//         console.log("Fail");
//     } else {
//         console.log("D");
//     }
// }

// let amount = 300;
// let isPrime = false;
// let delivery;

// if(isPrime){
//     delivery = 0;
// } else {
//     if(amount > 500){
//         delivery = 0;
//     } else if (amount >= 200){
//         delivery  = 50;
//     } else {
//         delivery = 100;
//     }
// }
//  console.log("Delivery Charges : " + delivery);


// let pass = "harsh.edu11";
// if( pass.length < 6 ){
//     console.log("weak");

// } else if ( pass.length <= 10){

//     if( pass.match(/[0-9]/)){
//         console.log("Medium");

//     } else {
//         console.log("weak");
//     }
// } else {
//     if(pass.match(/[0-9]/) && pass.match(/[@#$%!]/)) {
//         console.log("Strong");
//     } else {
//               console.log("Medium");
//     }
// }


// let units = 350;
// let peakHour = false;
// let rate;

// if (units < 100){
//     rate = 5;
// } else if ( units <= 300){
//     rate = 7;
// } else {
//     if(peakHour){
//         rate = 10;
//     } else {
//         rate = 8;
//     }
// }

// console.log("Total Bill : $" + units * rate );


// let a = 4; b = 4, c = 6;

// if(a+b <= c || a+c <= b || b+c <= a ){
//     console.log("invalid traingle");
// } 
// else if ( a === b && b === c ){
//     console.log("Equilateral Triangle");
// }
// else if ( a === b || b === c || c === a){
//     console.log("Isoscles Triangle");
// }

// else{
//     console.log("scalene");
// }


// let amount = Number(prompt("Enter amount"));

// if(amount < 100){
//     console.log(" Rejected - Minimum withdrawl is $100");
// }
// else if ( amount % 100 !== 0){
//     console.log(" Rejected - Enter amount in multiples of 100");
// }
// else if ( amount > 10000){
//     console.log("  Rejected - Daily limit exceed ");
// }
// else {
//     console.log("Withdrawl Successful")
// }


// let color = prompt(" Enter the color");

// if (color === "red"){
//     console.log("STOP");
// }
// else if ( color === "YELLOW"){
//     console.log("READY");
// }
// else if ( color === "GREEN"){
//     console.log("GO");
// }
// else {
//     console.log("INVALID COLOR")
// }


// let temp = Number(prompt("Enter the Temperature : "));

// if( temp >= 40) {
//     console.log("Too Hot");
// } else if ( temp >= 30){
//     console.log("Hot");
// } else if ( temp >= 20){
//     console.log("Warm");
// }else if ( temp >= 10){
//     console.log("cold");
// } else {
//     console.log("Very cold ");
// }

// let username = "Harsh";
// let password = "12345";

// let inputUser = "Harsh";
// let inputPass = "12345";

// if(inputUser !== username ){
//     console.log("invalid username");
// }

// else if ( inputPass !== password){
//     console.log("wrong password");
// }
// else {
// console .log("login successfull");
// }

// let price = 1200;
// let promo = "SAVE20";
// let final;

// if( promo === "SAVE10"){
//     final = price* 0.90
// }
// else if ( promo = "SAVE20"){
//     if( price >= 1000){
//         final = price * 0.80;
//     }
//     else{
//         final = price * 0.90;
//     }
// } else {
//     final = price ;
// }

// console.log("Final Price : " , final);


// let salary = 40000;
// let experience = 4;
// let bonus;

// if(experience < 1){
//     bonus = 0;
// } 
// else if ( experience <= 3){
//    bonus = salary * 0.10;
// }
//  else {
//     if(salary > 15000){
//         bonus = salary * 0.15;
//     } else {
//         bonus = salary * 0.20;
//     }
//  }
//  console.log("Bonos:" , bonus);

// let age = 55;
// let isStudent = false;

// if( age < 5 ){
//     fare = 0;
// }
// else if ( age < 17){
//     if(isStudent){
//         fare = 10;
//     } 
//     else {
//         fare = 20;
//     }
// } else if ( age < 60){
//     fare = 40;
// } else {
//     fare = 15;
// }

// console.log(" fare : " , fare )

// let ch = prompt(" Enter a characyer");
// if( ch >= "A" && ch <= "Z" ){
//     console.log("Uppercase Letter");
// }

// else if ( ch >= "a" && ch <= "z"){
//     console.log("lowercase letter");
// }
// else if ( ch >= "0" && ch <= "9" ){
//     console.log("digits");
// } else {
//     console.log("special character");
// }

// let usedData = 8;
// let planLimit = 10;

// let percent = (usedData /planLimit) * 100;

// if(percent < 50){
//     console.log("safe");
// } else if ( percent < 80 ){
//     console.log("warning");
// } else if ( percent <= 100){
//     console.log("High usuage");
// }

// else {
//     console.log(" Exceeded , extra charges applied");
// }

// let n = Number(prompt("enter a number"));

// if( n === 0 ){
//     console.log("Zero");
// } else if ( n > 0 ){
//     if( n % 2 === 0 ){
//         console.log(" positive even ");
//     } else {
//         console.log(" positive odd ")
//     }
// }

// else {
//     console.log("Negative");
// }

// let distance = 12;
// let nightTime = true ;
// let charge ;

// if( distance <= 2){
//     charge = 0;
// }
// else if ( distance <= 5 ){
//     charge = 20;
// }
// else if ( distance <= 10){
//     charge = 50;
// }
// else {
//     if(nightTime){
//         charge = 100;
//     } else {
//         charge = 80;
//     }
// }

// console.log("Delivery Charge:" , charge);

// let a = 12 , b = 34 , c = 76;

// if( a >= b && a >= c){
//     console.log( a + " is largest ");
// } else if ( b >= a && b >= a){
//     console.log( b + " is largest ");
// } else {
//     console.log( c + " is lagest ");
// }


// let color = "red";

// switch(color){
//     case "red":
//         console.log("Stop");
//         break;

//         case "Green":
//         console.log("Go");
//         break;

//          case "yellow":
//         console.log("wait");
//         break;

//         default : 
//            console.log("Invalid signal");


// }

// let year = 2024;

// if ((year % 4 === 0 && year % 100 !== 0 ) || ( year % 400 === 0 ) ) {
//     console.log("leap year");
// } else {
//     console.log("not a leap year ");
// }

// let units = 230;
// let bill = 0;

// if( units <= 100){
//     bill = units*5;
// }
// else if (units <= 200 ){
//     bill = (100 * 5) + ((units - 100) * 7);
// }
// else {
//     bill = (100 * 5 ) + (100 * 7) + ((units - 200) * 10);
// }

// console.log("Total Bill = $" , bill);

// let user = prompt(" Enter the choice");

// let choices = ["stone" , "paper", "scissors"];
// let computer = choices [Math.floor(Math.random() * 3 )];

// console.log("user - " , user);
// console.log("computer - " , computer);

// if(user === computer){
//     console.log("it's a draw");
// } else if (
//     (user === "stone" && computer === "scissors") || ( user === "paper" && computer === "stone" )|| ( user === "scissors" && computer === "paper" )
// ) {
//     console.log("User Wins !");
// } else {
//     console.log("computer wins !")
// }

// let pass = " Harsh#123";


// let hasUpper = /[A-Z]/ .test(pass);
// let hasLower = /[a-z]/ .test(pass);
// let hasDigit = /[0-9]/ .test(pass);
// let hasSymbol = /[!@#$%]/.test(pass);

// if(pass.length < 8){
//     console.log(" Too short");
// } else if (!hasUpper){
//     console.log("Missing uppercase letter");
// } else if (!hasLower){
//     console.log("Missing lowercacse letter");
// } else if (!hasDigit){
//     console.log("Missing Digit");
// } else if (!hasSymbol){
//     console.log("Missing special character");
// } else {
//     console.log("Strong Password");
// }


// for( let i = 1; i <= 10; i++){
//     console.log("9 * " + i + " = " , (9 * i));
// }

// console.log("5 * " + i + " = " , (5 * i));


// let sum = 0;

// for(let i = 1; i <= 100; i++){
//     sum += i;
// }

// console.log(" Sum is : " , sum);


// let str = "java script loops";
// let count = 0;

// for ( let char of str){
//     if("aeiouAEIOU" .includes(char)){
//         count++;
//     }
// }

// console.log("Total vowels: " , count);


// let arr = [12,54,67,87];

// let largest = arr[0];

// for( let num of arr ){
//     if( num > largest){
//         largest = num;
//     }
// }
// console.log("Largest:" , largest);

// let str = "hello";
// let rev = " ";

// for(let i = str.length - 1; i >= 0; i--){
//     rev += str[i];
// }

// console.log("Reversed" , rev);


// for( let i = 5; i >= 1; i--){
//     let pattern = " ";
//     for( let j = 1; j <= i; j++){
//         pattern += "*" ;
//     }
//     console.log(pattern);
// }


// let n = 23;
// let isPrime = true;

// if( n <= 1){
//     isPrime = false;
// } else {
//     for( let i = 2; i <= Math.sqrt(n); i++){
//         if( n % i === 0){
//             isPrime = false;
//             break;
//         }
//     }
// }
// console.log(isPrime ? "prime" :" not prime ");

// count numbers divisible by 3 betweeen 1 and 100


// let count = 0;
// for( let i = 1; i <= 100; i++){
//     if( i % 3 === 0){
//         count++;
//     }
// }

// console.log("count = " , count);

// let n = Number(prompt("Enter a number to find its factorial"));
// let fact = 1;

// for( let i = 1; i <= n; i++){
//     fact = fact*i;
// }

// console.log(fact);

// Reverse a Number 

// let num = 54354;
// let rev = 0;

// for(; num > 0; num = Math.floor(num / 10)){
//     let last = num % 10;
//     rev = rev*10 + last;
// }

// console.log(rev);

// Find largest number in the array 

// let arr = [ 22,33,4,78,87,99,600];
// let Max = arr[0];

// for( let i = 1; i < arr.length; i++){
//     if( arr[i] > Max){
//         Max = arr[i];
//     }
// }

// console.log("Max = " ,Max)

// Sum of Array Elements 

// let arr = [ 23,43,77,54,43];
// let sum = 0;

// for( let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }

// console .log("sum : " , sum);

// let arr = [43,56,78,43,55];
// let max = arr[0];

// for(let i = 1; i < arr.length; i++){
//     if( arr[i] > max){
//         max = arr[i];
//     }
// }
// console.log("max = " , max);

// print factorial of a number 

// let num = Number(prompt("Enter a number to find its factorial"));
// let factorial  = 1;

// for( let i = 1; i <= num; i++){
//     factorial = factorial * i;
// }

// console.log("factorial of " + num +  "=", factorial);

// for( let i = 1; i <= 100; i++){
//     if( i % 3 === 0 && i % 5 ===0 ){
//         console.log(" i = " , i);
//     }
// }

// Find the sum of digits of a number 
// let num = 9845;
// let sum = 0;

// for( ; num > 0; num = Math.floor(num / 10)){
//     sum = sum +  num % 10;
// }

// console.log(" sum = " , sum);

// count the digits of a number
// let num = 9845;
// let count = 0;

// for(; num > 0; num = Math.floor(num / 10)){
//     count++;
// }

// console.log("Total Digits = " , count);

// reverse a mumber 

// let num = 54321;
// let rev = 0;

// for(; num > 0; num = Math.floor(num / 10)){
//     let last =  num % 10;
//     rev = rev * 10 + last;
// }

// console.log(rev);

// let num = 1234567;
// let count = 0;
 
// for(; num > 0; num = Math.floor(num / 10)){
//     count++;
// }
// console.log(count);

// let num = 9845;
// let sum = 0;

// for(; num > 0; num = Math.floor(num / 10)){
//     sum += num % 10
// }

// console.log(sum);

// let num = 9845;
// let product  = 1;

// for(; num > 0; num = Math.floor(num / 10)){
//     product *= num % 10
// }

// console.log(product);

// let num = 98341;
// let max = 0;

// for(; num > 0; num = Math.floor(num / 10)){
//     let digit = num % 10;
//     if(digit > max){
//         max = digit;
//     }
// }

// console.log(max);

// let num = 98341;
// let max = 0;

// for (; num > 0; num = Math.floor(num / 10)) {
//     let digit = num % 10;
//     if (digit > max) {
//         max = digit;
//     }
// }

// console.log(max);


// let num = 458236;
//  let even = 0 , odd = 0;

//  for(; num > 0; num = Math.floor(num / 10)){
//     let d = num % 10;
//     if( d % 2 === 0) even++;
//     else odd++;
//  }

//  console.log(even,odd);


// let num = 76423;
// let last = num % 10;
// let first = 0;

// for(; num > 0; num = Math.floor(num / 10)){
//     first = num;
// }

// console.log( first , last );

// let num = 9876;
// for( ; num > 0; num = Math.floor(num / 10)){
//     console.log(Math.floor(num /10));
// }

// let num = 1002040;
// let count = 0;


// for(; num > 0; num = Math.floor(num / 10)){
//     if( num % 10 === 0) count++;
// }
// console.log(count);

//  sum of all elements

// let arr = [ 1,2,3,4,5];
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i];}
// console.log(sum);


// let arr = [1,2,3,4,5,6];
// let even = 0, odd = 0;

// for( let i = 0; i < arr.length; i++ ){
//     if(arr[i] % 2 === 0) even++;
//     else odd++;
// }

// console.log(even,odd);

// let arr = [5,3,9,1,6];
// let max = arr[0] , min = arr[0];

// for( let i = 1; i < arr.length; i++){
//     if(arr[i] > max) max = arr[i];
//      if(arr[i] < min) min = arr[i];
// }

// console.log(max,min);

// let arr = [1,2,3,4,5];
// let rev = [];

// for(let i = arr.length - 1; i >= 0; i--){
//     rev.push(arr[i]);
// }
// console.log(rev);

// let arr = [2,4,6,8];
// let sum = 0;

// for( let i = 0; i < arr.length; i++)
//    { sum += arr[i]; }
//     let avg = sum / arr.length

//  console.log(avg);

// let arr = [-2,3,0,5,-1];
// let positives = [];

// for(let i = 0; i < arr.length; i++) if(arr[i] > 0) positives.push(arr[i]);

// console.log(positives);


// let arr = [1,2,3,4,5];
// let rev= [];
// for( let i = arr.length - 1; i >= 0; i--) rev.push(arr[i]);

// console.log(rev);

// let arr = [1,2,2,3,2,4];
// let target = 2;
// let count = 0;

// for( let i = 0; i < arr.length; i++)
//     if (arr[i] === target) count++;
//    console.log("count = " ,count );

// let arr = [3,-1 ,5,7,2];
// for(let i = 0; i < arr.length; i++) if ( arr[i] < 0) arr[i] = 0;

// console.log(arr);

// let arr = [1,2,2,3,1,4];
// let unique = [];

// for(let i = 0; i < arr.length; i++){
//     let exist = false ;
// }


// let n = Number(prompt("Enter a Number : "));

// if(  n >= 100 && n <= 999 && n % 2 === 0){
//     console.log("Valid");
// } else {
//     console.log("Invalid");
// }
// let a = Number(prompt("Enter First Number"));
// let b = Number(prompt("Enter secoond Number"));
// let c = Number(prompt("Enter third Number"));

// if( a > b && a > c) console.log(a);
// else if ( b > c ) console.log(b);ch
// else console.log(c);


// let ch = prompt("Enter the character ");
// let code = ch.charCodeAt(0);

// if( code >= 65 && code <= 90) console.log("Uppercase");

//  else if( code >= 97 && code <= 122) console.log("Lowercase");
//  else if ( code >= 48 && code <= 57) console.log("Digits");
//  else (console.log("Special charactetr"));


// let units = 520;
// let bill = 0;

// if(units <= 100) bill = units * 5;
// else if (units <= 300) bill = units * 7 ;

// else bill = units * 10;

// console.log(bill);

// let  a = 5; b = 3; c = 3; 

// if( a === b  &&  b === c ) console.log("it's an equilateral triangle");

// else if ( a === b || b === c || a === c )console.log("Isoscles triangle");

// else console.log("Scalance");


// let marks = Number(prompt("Enter Marks"));
 
// if( marks > 90 ) console.log(" Grade = A");
// else if ( marks > 75)console.log("Grade = B");
// else if ( marks > 60)console.log("Grade = C");
// else if ( marks > 40)console.log("Grade = D");
// else console.log("Fail");


// let age = Number(prompt("Enter Age"));

// if( age < 5 ){
//     console.log("Ticket Fare = free ");
// } else if  ( age > 5 && age < 18 ){
//      console.log(" Ticket fare = $100");
// } else if ( age > 19 && age < 60){
//     console.log(" Ticket Fare = $200");
// } else (age > 60)
//     console.log(" Ticket fare = $150");


// For loop practice questions 
//  Strong Number 

//  for ( let n = 1; n <= 2000; n++){
//     let number = n;
//     let sum = 0;

//     for(; number > 0; number = Math.floor(number / 10)){
//         let digit = number % 10;
//         let fact = 1;

//         for ( let i = 1; i <= digit; i++){
//             fact = fact * i;
//         }
//         sum += fact;
//     }
//     if( sum === n){
//         console.log(n);
//     }
//  }


// Second Largest Digit 

// let num = 958732;
// let max = -1, second = -1;

// for(; num > 0; num = Math.floor(num / 10)) {
//     let d = num % 10;
    
//     if(  d > max){
//         second = max;
//         max = d;
//     } else if ( d > second && d !== max){
//         second = d;
//     }
// }

// console.log("second = ", second);

// let n = 28;
// let sum = 0;

// for ( let i = 1; i <= n/2; i++){
//     if( n % i === 0){
//         sum += i;
//     }
// }

// console.log( sum === n ? "Perfect Number" : "not perfect number");

// let num = 123456;
// let revEven = "";

// for(; num > 0; num =  Math.floor(num / 10)){
//     let d = num % 10;

//     if( d % 2 === 0) {
//         revEven += d;
//     }
// }

// console.log(revEven);


// for( let n = 1; n <= 10000; n++){
//     let num = n;
//     let sum = 0;

//     for(; num > 0; num = Math.floor(num / 10)){
//         let digit = num % 10;
//         let fact = 1;

//         for( let i = 1; i <= digit; i++ ){
//             fact *= i;
//         }

//         sum += fact;
//     } 
//     if( sum === n){
//         console.log(n);
//     }
// }


// sum of even & odd position digits 

// let n = 12345;
// let pos = 1, evenSum = 0 , oddSum = 0;

// for( ; n > 0; n = Math.floor( n / 10)){
//      let d = n % 10;

//      if(pos % 2 === 0) evenSum += d;
//      else oddSum += d;

//      pos ++;
// }

// console.log("odd positive sum : " ,oddSum);
// console.log("even positive sum : " , evenSum);

let n = Number(prompt("enter the number to its square "));

console.log(" square is : " , n*n);