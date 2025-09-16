// alert("Thanks for your input");

// var name = "Maham"; 
// name = "Kanwal";
// alert(name);

// var nationality;
// nationality = "Pakistani";
// console.log(nationality);

// var thanx = "Thannks for your input";
// alert("thanx");

// var weight = 150;
// console.log(weight);

// var originNum = 23;
// var newNum = originNum + 7;
// alert(newNum);

// var originNum = 28;
// var numToBeAdded = 7;
// var newNum = originNum + numToBeAdded;
// alert(newNum);

// var originNum = 90;
// originNum = originNum + 50;
// alert(originNum);

// var originNum = "23";
// var newNum = originNum + 7;
// console.log(newNum);

// var caseOty = 144;
// alert(caseOty);

// var popularNum =  3 + 12;
// alert(popularNum)

// var whatsLeftOver = 10 % 3;
// alert(whatsLeftOver);

// var num = 10;
// var popularNumber = num + 50;
// console.log(popularNumber);

// var num = 50;
// var anotherNum = 7; 
// var popularNumber = num + anotherNum;
// console.log(popularNumber);

//  Increment (اضافہ کرنا)
// **Increment ka matlab hota hai kisi number ya variable ke value ko 1 se barhāna.

// javascript
// Copy
// Edit
// let x = 5;
// x++; // increment
// console.log(x); Output: 6
// x++ ka matlab hai x = x + 1

// 👉 Types of Increment:

// Post-increment: x++
// (Pehle value use hoti hai, phir barhti hai)

// Pre-increment: ++x
// (Pehle value barhti hai, phir use hoti hai)

// javascript
// Copy
// Edit
// let x = 5;
// console.log(x++);  Output: 5 (pehle print phir barhaya)
// console.log(x);   Output: 6

// let y = 5;
// console.log(++y); Output: 6 (pehle barhaya phir print)
// 🔹 Decrement (کم کرنا)
// **Decrement ka matlab hota hai kisi number ya variable ki value ko 1 se ghatāna.

// javascript
// Copy
// Edit
// let a = 5;
// a--; decrement
// console.log(a);  Output: 4
// a-- ka matlab hai a = a - 1

// 👉 Types of Decrement:

// Post-decrement: a--

// Pre-decrement: --a

// javascript
// Copy
// Edit
// let a = 5;
// console.log(a--);  Output: 5 (pehle print phir kam kiya)
// console.log(a);    Output: 4

// let b = 5;
// console.log(--b);  Output: 4 (pehle kam kiya phir print)

// The value is used first, then increased.
// var x = 5;
// console.log(x++);
// console.log(x);

// var a = 8;
// console.log(a--);
// console.log(a);

// var b = 5;
// console.log(--b);

// var resultOfComputation = (2 * 4) * (4 + 2);;
// console.log(resultOfComputation)
// output 48

// alert("2 plus 2 equals " + 2 + 2);

// Concatenating text strings
// var firstName = "Maham";
// var secondName = "Kanwal";
// var fullName = firstName + " " + secondName;
// var fullName = `${firstName} ${secondName}`;
// alert(fullName);

// alert("Thanks, " + "Susan" + "!");

// var message = "Thanks, ";
// var userName = "Maham";
// var banger = "!";
// var customMessage = `${message} ${userName}${banger}`;
// var customMessage = message + userName + banger;
// alert(customMessage);

// Prompts
// prompt("Your message here");

// var userName = prompt("What is your name?");
// console.log("Hello, " + userName + "!");

// For loops
// let i = 1;  Initialization
// i <= 5;   Condition
// i++; Updation
// Iteration ka matlab hota hai loop ka ek chakkar.

// for (let i = 1; i <= 5; i++){
//     console.log("Nuber:",i)
// }

// let fruits = ["apple","mango","banana"]
// for (i=0; i<fruits.length; i++){
//     console.log(fruits[i])
// }

// While loops
// Use:while loop ka istemal tab kiya jata hai jab hamein koi kaam baar baar karna ho jab tak koi shart (condition) true ho.
// Yeh har dafa loop chalanay se pehle condition ko check karta hai.`
// let i = 0;
// while (i <= 5 ){
//     console.log(i);
//     i++;
// }

// let i = 0;
// while (i <= 5){
//     console.log(i);
//     i++;
// }

// Explanation
// i = 1 se start hota hai.
// Jab tak i <= 5 hai, tab tak loop chalega.
// Har dafa loop ke andar console.log(i) print karega.
// Phir i++ se i ki value barh jaye gi.
// Jab i ki value 6 ho jaye gi, condition false ho jaye gi aur loop ruk jaye ga.

// let computerGuess = Math.floor(Math.random() * 10);
// console.log(computerGuess);
// let userGuess = prompt("enter a number from 0 to 10");
// let tries = 1;

// while (userGuess != computerGuess){
//     userGuess = prompt("try again");
//     tries++;
// }
// console.log(`you are win computer guess is ${computerGuess} you win in ${tries} tries`);

// const num1 = 10;
// const num2 = 40;
// const num3 = 90;

// if(num1 > num2 && num1 > num3){
//     console.log("num1 is greatest",num1)
// }
// else if(num2 > num1 && num2 > num3){
//     console.log("num2 is greatest",num2)
// }
// else{
//     console.log("num3 is greatest",num3)
// }

// var:
// Scoping: var is function-scoped or globally-scoped. This means a variable declared with var is accessible throughout the entire function in which it's declared, or if declared outside any function, it's accessible globally. It does not respect block scope (like code within {}).
// Reassignment: Variables declared with var can be reassigned to new values.
// Redeclaration: Variables declared with var can be redeclared within the same scope without causing an error.
//const exampleVar = () => {
//    if(true){
//      var x = 10;
//     console.log(x);
//    }
//    console.log(x);
// }
// exampleVar();
// var y = 5;
// var y = 20;
// console.log(y);

// let:
// Scoping: let is block-scoped. This means a variable declared with let is only accessible within the block of code (e.g., an if statement, a for loop, or a function) where it's declared.
// Reassignment: Variables declared with let can be reassigned to new values.
// Redeclaration: Variables declared with let cannot be redeclared within the same scope.
// const exampleLet = () => {
//     if(true){
//         let z = 20;
//         console.log(z);
//     }
//         console.log(z);
// }
// exampleLet();
// let a = 5;
// a = 10;
// console.log(a);

// const
// Scoping: const is also block-scoped, just like let.
// Reassignment: Variables declared with const cannot be reassigned to new values after they have been initialized. They must be assigned a value when declared.
// Redeclaration: Variables declared with const cannot be redeclared within the same scope.
// Immutability: It's important to note that const does not make the value itself immutable, but rather the binding to that value. For objects and arrays, the properties or elements can still be modified.

// const exampleConst = () => {
//     if(true){
//         const PI = 3.14159;
//         console.log(PI);
//     }
// }
// exampleConst();
// const maxUsers = 100;
// maxUsers = 150;
// const maxUsers = 200;
// console.log(maxUsers);

// const person = { name : "Alice"};
// person.name = "Bob";
// console.log(person.name);

// Closure
// 🔸 Definition (Simple Words)
// 👉 Closure ek aisa function hai jo apne parent (outer) function ke variables ko yaad rakhta hai
// — chahe parent function ka execution khatam bhi kyon na ho gaya ho.
// const outer = () => {
//     let counter = 0;
//     const inner = () => {
//         counter++;
//        console.log(counter);
//     }
//     return inner;
// }
// const myCounter = outer();
//  myCounter();
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());

// const bankAccount = () => {
//     let balance = 1000;
//     return{
//         deposit: (amount) => {
//     balance += amount;
//     console.log(`Deposited: ${amount}, New Balance: ${balance}`);
//         },
//         checkBalance: () => {
//             console.log(`Current Balance: ${balance}`);
//         }
//     };
// }
// const myAccount = bankAccount();
// myAccount.deposit(1500);
// myAccount.checkBalance();

// Where Closures are Used?
// Data privacy (private variables banane ke liye).
// Functions ko yaad karwana (like counters, timers).
// Callbacks / Event listeners me.

// Ek function banao jo counter return kare. Har bar call karne par value +1 ho jaye.
// const createCounter = () => {
//     let count = 0;
//     const inner = () => {
//         count++;
//         console.log(count);
//     }
// return inner;
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// const multiplier = (fixed) => {
//     return (num) => {
//         return num * fixed;
//     };
// }
// const multiplyBy2 = multiplier(2);
// console.log(multiplyBy2(5));
// console.log(multiplyBy2(10));

// function multiplier(fixed) {
//     return function(num){
//         return num * fixed;
//     };
// }

// const multiplyBy2 = multiplier(2);
// console.log(multiplyBy2(5));
// console.log(multiplyBy2(10));

// const multiplyBy3= multiplier(3);
// console.log(multiplyBy3(10));
// console.log(multiplyBy3(5));

// const outerFunction = (outerVar) => {
//     return function innerFunction (innerVar){
//     console.log(`Outer variable:, ${outerVar}`);
//     console.log(`Inner variable:, ${innerVar}`);
//     };
// }
// const newFunc = outerFunction(`Hello from outside!`);
// newFunc(`Hello from inside!`);

// Destructuring
// Array
// const arr = [10, 20, 30];
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// console.log(a, b, c);

// const arr = [10, 20, 30];
// let [a, b, c] = arr;
// console.log(a, b, c);

// const fruits = ["Apple", "Banana", "Mango"];
// let = [first, second, third] = fruits;
// console.log(first,second,third);

// const numbers = [1,2,3,4];
// let [one, ,three] = numbers;
// console.log(one);
// console.log(three);

// const colors = ["Red"];
// let [primary, secondary = "Blue"] = colors;
// console.log(primary);
// console.log(secondary);

// Object
// const person = {
//     name : "Maham",
//     area : "Saddar",
//     city : "Karachi",
// };
// let {name, area, city} = person;
// console.log(name);
// console.log(area);
// console.log(city);

const car = {
    brand : "Toyota",
    model : "Corolla"
};
let { barnd: carBrand, model: carModel} = car;
console.log()
