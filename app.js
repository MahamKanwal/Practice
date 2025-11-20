// const findWord = (words,word) => {
// let a = words.includes(word);
// console.log(a);
// }
// findWord(["on","of","oh"],"off");

// const findWord = (words,word) => {
//     let a = words.includes(word);
//     console.log(a);
// };
// findWord(["on","of","oh"],"off")

// const palindromeWords = (word) => {
// let ulta = word.split("").reverse().join("");
// console.log(ulta == word);
// }
// palindromeWords("mam");

// const createCounter = () => {
//     let count = 0;
//     const inner = () => {
//        return ++count;
//     }
// return inner;
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// const cart = [
//   { product: "shoes", quantity: 1 , price: 1000},
//   { product: "watches", quantity: 1 , price: 1000},
//   { product: "bag", quantity: 1 , price: 1000},
//   { product: "jeans", quantity: 2 , price: 1000},
//   { product: "shirts", quantity: 1 , price: 1000},
// ];

// let totalPrice = cart.reduce((a,c)=>a+(c.price*c.quantity),0);
// console.log(totalPrice);

// let totalPrice = 0;
// for(let item of cart){
//   totalPrice += item.quantity * item.price;
// };
// console.log(totalPrice);

// cart.push({
//   product: "mobile",
//   quantity: 1,
//   price: 2000
// });
// console.log(cart);

// cart.splice(1,2);
// console.log(cart);

// const nums = [1,2,3,4];
// const sum = nums.reduce((a,c)=>a+c,0);
// console.log(sum);

// let myReverse = (word) => {
//   let newWord = "";
//  for (let i = word.length-1; i >= 0; i--){
//    newWord+= word[i];
//  }
//  return newWord;
// }
// let ulta = myReverse("hellow");
// let ulta2 = myReverse("enum");
// console.log(ulta2);

// let computerGuess = Math.floor(Math.random() * 10);
// console.log(computerGuess);
// let userGuess = prompt("enter a number from 0 to 10");
// let tries = 1;
// while (userGuess != computerGuess){
//     userGuess = prompt("try again");
//     tries++;
// }
// console.log(`you are win computer guess is ${computerGuess} you win in ${tries} tries`);

// const num1 = (10;
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

// Comparison & Logical Operators
// Ek variable marks lo aur uski value prompt se input karao.
// Agar marks >= 90 hai to "Excellent" print karo,
// agar marks >= 50 && marks < 90 hai to "Pass",
// warna "Fail".

// let marks = Number(prompt("Enter your marks:"));
// if(marks >= 90){
//     console.log("Excellent");
// }
// else if(marks >= 50 && marks < 90){
// console.log("Pass");
// }
// else{
//     console.log("Fail");
// }

// const num1 = 10;
// const num2 = 40;
// const num3 = 90;
// if(num1 < num2 && num1 < num3){
//     console.log("num1 is smallest num2 and num 3")
// }
// else if(num2 < num1 && num2 < num3){
//      console.log("num2 is smallest num3 and num1")
// }
// else{
//     {
//      console.log("num3 is smallest num2 and num1")
// }
// }

// if (num1 > num2 && num1 > num3) {
//     console.log("num 1 is greatest");
//     if (num2 > num3) {
//         console.log("num3 is smallest");
//     } else {
//         console.log("num2 is smallest");
//     }
// }
// else if (num2 > num1 && num2 > num3) {
//     console.log("num2 is greatest");
//     if (num1 > num3) {
//         console.log("num3 is smallest")
//     } else {
//         console.log("num1 is smaillest")
//     }
// }
// else {
//     console.log("num 3 is greatest");
//     if (num1 > num2) {
//         console.log("num1 is smallest")
//     } else {
//         console.log("num2 is smallest")
//     }
// }

// const findGreatest = (numbers) => {
//     let greatest = numbers[0];
//     for (let num of numbers){
//         if (num > greatest) {
//             greatest = num;
//         }
// }
// }

// findGreatest([1, 3, 2, 5, 3, 5])
// const totalNum = (numbers) =>{
//      let total = 0;
// for (let num of numbers){
//     total+=num
// }
// console.log(total)
// }
// totalNum([1, 3, 2, 5, 3, 5])

// and ma sb conditions true
// or ma sirf 1 condition true

// Sum of First N Natural Numbers
// N input lo aur 1 se N tak numbers ka sum print karo.
// User se prompt lo k koi b number Daly user jse wo 10 Daly to
// Apko ASA program bana na he k user ne Jo b number dala ho AP 1 se lekr us number tk sum kroge

// let num = Number(prompt("enter any number"))
// sum = 0;
// for(i=1; i <= num; i++ ){
//     sum += i;
//     console.log(i)
// }
// console.log(`sum of first ${num} and natural number is ${sum}`)

// Count vowels
// Ek string input lo aur count karo vowels (a, e, i, o, u) kitni hain.
// User se prompt lo k wo koi word type kre phr wo jo word type kren usme se count kro kitni vowels he

// let word = prompt("Enter any word");
// word = word.toLowerCase();
// let vowel= "aeiou";

// let count = 0;
// for (let i = 0; i < word.length; i++){
//     if(vowel.includes(word[i])){
// count++;
//     }
// }
// console.log(`The ${word} has ${count} vowels`);

// let word = prompt("Enter any word");
// word = word.toLowerCase();
// const vowel = "aeiou";
// let count = 0;
// for (let i = 0; i < word.length; i++){
//     if (vowel.includes(word[i])){
//         count++;
//     }
// }
// console.log(`The ${word} has ${count} vowels`);

// let myName = "Maham";
// let see = myName.includes("h");
// console.log(see);

// Remove Duplicates from Array Sawal: Ek array hai [1,2,2,3,4,4,5] → output asy ana chaiye [1,2,3,4,5].

// let numArr =  [1,2,2,3,4,4,5];
// let newArr2 = [];
// for(let n of numArr){
//     if(!newArr2.includes(n)){
//      newArr2.push(n)
//     }
// }
// console.log(newArr2);

// Count Words in String Sawal: Ek sentence input lo "I love JavaScript" → count karo kitne words hain

// let words = "I love JavaScript";
// let countWords = words.trim().split(" ").length;
// console.log(countWords);

// let count = 100;
// const fun = ( ) => {
// count--;
// console.log(count);
// if(count == 50){
//     clearInterval(num);
// }
// }
// let num = setInterval(fun,100);

// let startTime = () => {
//  clearInterval(timer);
//   if(expiredQues[currentQuestionIdx]){
//  timerElm.innerHTML = "Time Over";
//  return;
//   }
//  timeLeft = quesTimers[currentQuestionIdx];
//  timerElm.innerHTML = timeLeft;
// timer = setInterval(() => {
//   timeLeft--;
//   quesTimers[currentQuestionIdx] = timeLeft;
//   timerElm.innerHTML = timeLeft;
//   if(timeLeft == 0){
// clearInterval(timer);
// expiredQues[currentQuestionIdx] = true;
// timerElm.innerHTML = "Time Over";
//   }
// },1000)
// }

// Classes
// class Batch {
//   constructor(batch) {
//     this.batch = batch;
//   }
// }
// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     this.nationality = "Pakistani";
//   }
//     getLeave(days) {
//     console.log(`You are allowed ${days} days leave`);
//   }
// }

// class Student extends User {
//   constructor(name, surname, school) {
//     super(name, surname);
//     this.school = school;
//   }

//   submitFees(fees) {
//     console.log(`Fees submitted: ${fees}`);
//   }
// }
// class Employee extends User {
//   constructor(name, surname, salary) {
//     super(name, surname);
//     this.salary = salary;
//   }

//    jobResign(reason){
//       console.log(reason)
//    }

// }

// const student1 = new Student("Ali", "Khan", "New School");
// const employee1 = new Employee("Ahmed", "Khan", 20000);
// console.log(student1);
// console.log(employee1);
// employee1.jobResign("salary is very low");

// class Person{
//     constructor (name, address) {
//     this.name = name;
//     this.address = address;
//     }
//     greet(){
//       console.log(`Hello, my name is ${this.name} and I live in ${this.address}`)
//     }
// }

// const person1 = new Person("Maham","Jacob Line");
// person1.greet();

// class Student extends Person {
//   constructor(name,address,course){
//     super(name, address); //calls parent class constructor
//     this.course = course;
//   }
//   study(){
//     console.log(`${this.name} is studying ${this.course}`);
//   }
// }
// const student1 = new Student("Kanwal", "Jacob Line","Web Development");
// student1.greet();
// student1.study();

// const numbers = [10, 20 ,30];
// const iterator = numbers[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// const  fruits = ["apple","banana","mango"];
// for(let fruit of fruits){
//     console.log(fruit);
// }

// Child → Parent (passing data up)
// Data child se parent mein tab jata hai jab parent ek function as prop bhejta hai, aur child us function ko call karke data send karta hai.
// const Parent = () => {
//     const handleDataFromChild = (data) => {
//         console.log("Data from child:", data);
//     };

//     return(
//         <Child sendData={handleDataFromChild}/>
//     )
// }

// const Child = ({sendData}) => {
//     const childData = "Hello from Child!";
//    const handleDataFromParent = () => {
//    sendData(childData)
//    }
// return (
//     <button onClick={handleDataFromParent}>
//       Send Data to Parent
//     </button>
//   );
// }

// Promises

// let myPromise = new Promise ((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Success!");
//     } else {
//         reject("Failure!");
//     }
// });

// myPromise
// .then(result => console.log(result))
// .catch(error => console.log(error));

// myPromise
// .then(res => console.log("Success:", res))
// .catch(err => console.log("Error:", err))
// .finally( ()=> console.log("Hamesha Chalega!"));

// const pizzaPromise = new Promise((resolve, reject) => {
//     let pizzaReady = true;

//     if (!pizzaReady){
//         resolve("Pizza aa gaya! 🍕");
//     } else {
//     reject("Oops! Pizza jal gaya 😭");
//   }
// });

// pizzaPromise
// .then(msg => console.log(msg))
// .catch(err => console.log(err));

// const task1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Data ready!");

//     },2000);
// });
// task1.then(result => console.log(result));

// const task2 = new Promise((resolve,reject) => {
//     reject("Data not ready!");
// });
// task2.catch(error => console.log(error));

// let myPromise = new Promise((resolve,reject) => {
//     let internet = true;
//     if(internet){
//         resolve("Internet Working - Data Loaded!");
//     } else {
//         reject("No Internet - No Data!");
//     }
// });
// myPromise
// .then(res => console.log(res))
// .catch(err => console.log(err))
// .finally(() => console.log("Promise Settled!"));

// const checkPizza = (status) => {
//     return new Promise((resolve, reject)=>{
//         if(status===true){
//             resolve("Pizza is ready! 🍕");
//         }
//         else{
//             reject("Pizza is not ready! 😞");
//         }
//     })
// }
// checkPizza(true)
// .then(msg => console.log(msg))
// .catch(err => console.log(err));

// const cutting = () => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Cutting Vegetables"),1000);
//     });
// };

// const cooking = () => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Cooking"),1000);
// });
// };

// const serving = () => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Serving"),1000);
//     });
// };

// cutting()
// .then (res => {
// console.log(res);
// return cooking();
// })
// .then (res => {
//     console.log(res);
//     return serving();
// })
// .then(res => console.log(res))
// .catch(err => console.log(err));

// const getUser = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve({name:"Maham", city: "Karachi"});
//         },2000)
//     });
// };
// getUser()
// .then(user => console.log(user))
// .catch(error => console.log(error));

// function* numberGenerator(){
//     yield 1;
//     yield 2;
//     yield 3;
// }
// const gen = numberGenerator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// function* generatorFunction(){
//     yield "Step 1";
//     yield "Step 2";
//     yield "Step 3";
// }

// const gen = generatorFunction();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// function* infiniteCounter(){
//     let i = 1;
//     while(true){
//         yield i++;
//     }
// }

// const counter = infiniteCounter();
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

// function* mealGenerator() {
//     yield " Starter Served";
//     yield " Main Course Served";
//     yield " Dessert Served";
//     yield " All Food Delivered!";
// }

// const waiter = mealGenerator();
// console.log(waiter.next());
// console.log(waiter.next());
// console.log(waiter.next());
// console.log(waiter.next());
// console.log(waiter.next());

// export const pizza = "Pizza is delicious!";
// export const orderPizza = () => {
//     console.log("Pizza ordered!");
// }

// import { pizza , orderPizza} from "./app.js";
// console.log(pizza);
// orderPizza();

// const myMap = new Map();
// myMap.set("name","Maham");
// myMap.set(1,"id");
// myMap.set(true,"active user");

// console.log(myMap.get("name"));
// console.log(myMap.get(1));
// console.log(myMap.get(true));
// console.log(myMap.size)

// const newMap = new Map();
// newMap.set("fruit","apple");
// console.log(newMap.get("fruit"));

// const nums = [1,2,3];
// const doubled = nums.map(n => n * 2);
// console.log(doubled);

// const students = new Map();

// students.set(101,"Ali");
// students.set(102,"Maham");
// students.set(103,"Kanwal");
// console.log(students.get(103));
// console.log(students.get(101));
// console.log(students.has(103));
// console.log(students.size);
// console.log(students.delete(103));
// console.log(students.clear());

// const marks = [50, 60 ,70, 80, 90];
// const updatedMarks = marks.map(score => score + 10);
// console.log(updatedMarks);

// const studentMarks  = new Map();
// studentMarks.set("Ali",85);
// studentMarks.set("Maham",90);
// studentMarks.set("Kanwal",95);

// const updated = [...studentMarks.values()].map(mark => mark + 5);
// console.log(updated);

// const updated2 = [...studentMarks.entries()].map(([name,marks]) => {
//     return `${name} : ${marks + 10}`
// });
// console.log(updated2);

// const updated3 = [...studentMarks.keys()].map((name) => {
//     return `${name}`
// });
// console.log(updated3);

// const users = ["Maham","Ali","Kanwal"];
// users.forEach((item) => {
//     console.log(item);
// })

// for (const item of users){
//     console.log(item);
// }
// const myMap = new Map();
// const obj = {}
// myMap.set(obj, "hello");
// console.log(myMap.get(obj));
// console.log(myMap.get({}));

// const myMap = new Map();

// const person = { name: "Maham" }; // object
// myMap.set(person, "Full Stack Developer");

// console.log(myMap.get(person));
// Full Stack Developer

// const userRoles = new Map();

// function login() {} // function as key

// userRoles.set(login, "Admin Function Call");

// console.log(userRoles.get(login));
// Admin Function Call

// const fruits = ["Apple","Banana"];
// fruits.push("Mango");
// console.log(fruits);

// const fruits = ["Apple","Banana","Mango"];
// fruits.pop();
// console.log(fruits);

// const nums = [2,3,4,5];
// nums.unshift(1);
// console.log(nums);

// const nums = [1,2,3,4];
// nums.shift();
// console.log(nums);

// const numbers = [1,2,3];
// const squared = numbers.map(n => n * n);
// console.log(squared);

// const ages = [12, 18, 20 , 10];
// const adults = ages.filter(age => age >= 18);
// console.log(adults);

// const ages = [12, 18, 20 ,10];
// const firstAdult = ages.find(age => age >= 18);
// console.log(firstAdult);

// const nums = [10, 20, 30];
// const findIdxNum = nums.findIndex(n => n === 20);
// console.log(findIdxNum);

// const numbers = [1,2,3,4];
// const total = numbers.reduce((acc, curr) => acc + curr, 0);
// console.log(total);

// const arr = [1, 2, 3];
// arr.forEach(item => console.log(item));

// const arr = ["a","b","c"];;
// const checkedValue = arr.includes("a");
// console.log(checkedValue);

// const animals = ["cat", "dog", "cow", "goat"];
// console.log(animals.slice(1,3));

// const items = ["a","b","d"];
// items.splice(2, 0, "c");
// console.log(items);

// const nums = [4, 1, 10, 2];
// nums.sort((a,b) => a-b);
// console.log(nums);

// const words = ["Hello", "World"];
// const str = words.join(" ");
// console.log(str);

// const str = "Hello World";
// const arr = str.split(" ");
// console.log(arr);

// const a = [1, 2];
// const b = [3, 4];
// const c = a.concat(b);
// console.log(c);

//  const greet = (name) => {
//     return `Hello ${name}`;
//  }
//  const processUnitInput = (callback) =>{
//     let name = "Maham";
//     console.log(callback(name));
//  }
//  processUnitInput(greet);

// const greetInEnglish = (name) => {
//     return `Hello ${name}`;
// }
// const greetInurdu = (name) => {
//     return `Assalam-o-Alaikum ${name}`;
// }
// const processUnitInput = (callback) => {
//     let name = "Maham";
//     console.log(callback(name));
// }
// processUnitInput(greetInEnglish);
// processUnitInput(greetInurdu);

// const multiplier = (factor) => {
//     return (number) => {
//         return number * factor;
//     };
// }
// const double = multiplier(2);
// const triple = multiplier(3);
// console.log(double(5));
// console.log(triple(5));

// const numbers = [1, 2, 3, 4];
// const squared = numbers.map(num => {
//     return num * num;
// });
// console.log(squared);

// const ages = [10, 18, 25, 12];
// const adults = ages.filter(age => age >= 18);
// console.log(adults);

// const fruits = ["apple", "banana", "mango"];
// fruits.forEach(fruit => console.log(fruit));

// const calculate = (arr, operation) => {
//     const result = [];
//     for (let i of arr){
//         result.push(operation(i));
//     }
//     return result;
// }

// const square = (x) => {
//     return x * x;
// }

// const cube = (x) => {
//     return x * x * x;
// }

// console.log(calculate([1,2,3,4], square));
// console.log(calculate([1,2,3,4], cube));

// function element(inputValue){
//     var inputGet = document.getElementById("input").value
//     inputGet +=  inputValue.innerText;
//     document.getElementById("input").value = inputGet;
//     }
//     // RESULT
//     function result(equal){
//         var inputGet = document.getElementById("input")
//         inputGet.value = eval(inputGet.value)
//     }

//     // FOR AC
//     function clearOp(){
//         var inputGet = document.getElementById("input")
//         inputGet.value = ""
//     }
//     // FOR DELETE
//     function deleteOp(){
//         var inputGet = document.getElementById("input")
//         inputGet.value =inputGet.value.slice(0,-1);
//     }
//     // FOR NOT LETTING ANY OPERATOR BEING CLICKED MORE THAN ONCE
//     var lastOperator = '';

//     function operator(key) {
//         var inputField = document.getElementById("input");
//         var inputValue = inputField.value;
//         var newOperator = key.innerText; //OPERATOR VALUE

//         // Check if the last character is an operator
//         if (inputValue.length > 0) {
//             var lastChar = inputValue.charAt(inputValue.length - 1);

//             // valid operators
//             var validOperators = ['+', '-', '*', '/', '%'];

//             if (validOperators.includes(lastChar)) {
//                 // Replace the last operator with the new one
//                 inputField.value = inputValue.slice(0, -1) + newOperator;
//                 console.log("replace"+inputField.value)
//             } else if (validOperators.includes(newOperator)) {
//                 // Append the new operator if the last character is not an operator
//                 inputField.value += newOperator;
//             }

//             // Update the lastOperator to the new one
//             lastOperator = newOperator;
//             console.log(lastOperator)
//         } else if (validOperators.includes(newOperator)) {
//             // If input is empty and an operator is clicked, do nothing or handle as needed
//             // For example, you could initialize the input with the operator if needed
//             inputField.value = newOperator;
//         }
//     }

// const fetchData = (callback) => {
//     console.log("Fetching data...");

// setTimeout(() => {
//     console.log("Data fetched!");
//     callback();
// },1000);
// }

// const showData = () => {
//     console.log("Displaying data...");
// }
// fetchData(showData);

// const  getUser = (user) => {
// const getPosts = (user, (posts) =>{
//     const getComments = (posts, (comments) => {
//         console.log(comments);
//     });
// });
// };

// getUser();
// getPosts();
// getComments();

// getUser(function(user) {
//   getPosts(user, function(posts) {
//     getComments(posts, function(comments) {
//       console.log(comments);
//     });
//   });
// });

// let age = 18;
// let result = (age >= 18) ? "You can vote" : "You cannot vote";
// console.log(result);

// let score = 75;
// let grade = score >= 80 ? "A" : score >= 60 ? "B" : "C";
// console.log(grade);

// const user = {
//     name: "Maham",
//     address: {
//         city: "Karachi",
//     },
// };

// console.log(user?.address?.city);
// console.log(user?.contact?.phone);

// const user = {
//     name : "Maham",
//     address: {
//         city: "Karachi",
//         zip: 75000
//     }
// };
// console.log(user?.address?.city);
// console.log(user?.address?.zip);
// console.log(user?.address?.phone);
// console.log(user?.address?.street);

// const user = {
//     greet() {
//         return "Hello World";
//     }
// };
// console.log(user.greet?.());
// console.log(user.sayHi?.());

// const users = [{ name: "Maham"}, null, {name: "Kanwal"}];
// users.forEach(user => {
//     console.log(user?.name);
// });

// const user = {};
// console.log(user?.address?.city ?? "City not found");

// const userFromAPI = {
//     name: "Maham"
// };
// console.log(userFromAPI?.address?.city ?? "No city provided");

// let i = 1;
// while (i <= 5) {
//     console.log("Number",i);
//     i++;
// }

// let i = 1;
// do{
//     console.log("Count", i);
//     i++;
// } while(i <= 5);

// let i = 6;
// while (i <= 5){
//     console.log("While:", i);
//     i++;
// }

// do {
//     console.log("DoWhile", i);
//     i++;
// } while (i <= 5);

// IIFE
// (()=>{
//     console.log("This runs immediately!");
// })();

// (()=>{
//     let message = "I'm private";
//     console.log(message);
// })();

// const user = (()=>{
//     const name = "Maham";
//     console.log("User initialized!");
//     return {getname : () => name};
// })();
// console.log(user.getname());

// ((name)=>{
//     console.log(`Welcome, ${name}!`);
// })("Maham");

// const images = document.querySelectorAll(".main img");
// const imgBox = document.querySelector(".img-box");
// const img = document.getElementById("img");
// const close = document.getElementById("close");
// const next = document.querySelector(".next");
// const prev = document.querySelector(".prev");
// const filterButtons = document.querySelectorAll(".filter-btn");

// let currentIndex = 0;

// // Open image in modal
// images.forEach((image, index) => {
//   image.addEventListener("click", () => {
//     imgBox.classList.remove("hidden");
//     img.src = image.src;
//     currentIndex = index;
//   });
// });

// // Close modal
// close.addEventListener("click", () => {
//   imgBox.classList.add("hidden");
// });

// // Next image
// next.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % images.length;
//   img.src = images[currentIndex].src;
// });

// // Previous image
// prev.addEventListener("click", () => {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   img.src = images[currentIndex].src;
// });

// // Filter functionality
// filterButtons.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     document.querySelector(".active").classList.remove("active");
//     btn.classList.add("active");

//     const filter = btn.getAttribute("data-filter");

//     images.forEach((image) => {
//       const category = image.closest("div[data-category]").getAttribute("data-category");
//       if (filter === "all" || category === filter) {
//         image.closest("div[data-category]").style.display = "block";
//       } else {
//         image.closest("div[data-category]").style.display = "none";
//       }
//     });
//   });
// });

// const obj = {
//     name: "ali",
//     age : 10,
// }

// const keys = ["surname", "phoneNumber"];
// for (let key in keys){
//     obj[key] = "abc";
// }

// const fun = () => {}

// const data = {...obj, fun};
// console.log(data);

// let age = 18;
// if (age >= 18){
//     console.log("You are adult");    
// } else{
//     console.log("You are minor");
// }

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// let i = 1;
// do{
//     console.log(i);
//     i++;
// } while (i <= 5);

// const arr = [4,6,8];
// const sum = arr.reduce((a, c) => a + c, 0);
// const average = sum / arr.length;
// console.log(average);

// const temp = 30;
// const temperatureString = `${temp}\u00B0C`;
// console.log(temperatureString);

// let a = 10;
// let b = 20;
// [a, b] = [b, a];
// console.log(a,b);

// const num1 = 10;
// const num2 = 20;
// const num3 = 30;
// greatest number
// if(num1 > num2 && num1 > num3){
//     console.log("num1 is greatest", num1);
// }
// else if(num2 > num1 && num2 > num3){
//     console.log("num2 is greatest", num2);
// }
// else{
//     console.log("num3 is grestest", num3);
// }

// smallest
// if(num1 < num2 && num1 < num3){
//     console.log("num1 is smallest",num1);
// }
// else if (num2 < num1 && num2 < num3){
//    console.log("num2 is smallest", num2);
// }
// else{
//     console.log("num3 is smallest");
// }

// for (let i = 1; i <= 10; i++){
//     console.log(i);
// }

// const num = +(prompt("Enter a number"));
// if (num % 2 === 0){
//     console.log("Even")
// }
// else {
//     console.log("Odd");
// }

// let sum = 0;

// for (let i = 1; i <= 100; i++){
//     sum += i;
// }
// console.log("Sum:", sum);

// let arr = [2,4,6,8,10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// for (let value of arr){
//     sum += value;
// }
// let sum = arr.reduce((total, num) => total + num, 0);
// console.log("Sum:", sum);


// let arr = [2,4,6,8,10];
// let max = Math.max(...arr);
// let min = Math.min(...arr);
// console.log("Max:", max);
// console.log("Min:", min);

// let arr = [2, 4, 6, 8, 10];

// let max = arr[0];
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }

// console.log("Max:", max);
// console.log("Min:", min);
