// const findWord = (words,word) => {
// let a = words.includes(word);
// console.log(a);
// }
// findWord(["on","of","oh"],"off");

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

// Practice Of Context In React
// import { createContext, useContext, useState } from "react";

// const StudentContext = createContext();

// const StudentProvider = ({ children }) => {
//     const [students, setStudents] = useState([
//         { id:1, name: "ali", email: "ali@gmail.com"},
//         { id:2, name: "ahmed", email: "ahmed@gmail.com"},
//         { id:3, name: "alina", email: "alina@gmail.com"},
//     ]);

// const handleDeleteSubmit = (id) => {
//     const updateStudents = students.filter(std => std.id != id)
//     setStudents(updateStudents);
// }

// const studentContextValue = {
//     students,
//     handleDeleteStudent
// };

// return (
// <StudentContext.Provider value={studentContextValue}>
//     {children}
//     </StudentContext.Provider>
// )
// }

// export default StudentProvider;

// export const useSStudents = () => useContext(StudentContext);

// import {createRoot} from 'react-dom/client'
// import '.index.css'
// import App from './App'
// import StudentProvider from './contexts/StudentContext'
// createRoot(document.getElementById('root')).render(
//     <StudentProvider>
//         <App/>
//     </StudentProvider>
// ) 

// import React from 'react'
// import { useStudents } from '../contexts/StudentContext';

// const TableRow = ({ name, email, id }) => {
//   const { handleDeleteStudent } = useStudents();

//   const handleDelete = () => {
//     handleDeleteStudent(id);
//   };

//   return (
//     <tr>
//       <td>{name}</td>
//       <td>{email}</td>
//       <td>
//         <button onClick={handleDelete}>Delete</button>
//       </td>
//     </tr>
//   );
// };

// export default TableRow;

// import { createContext, useContext, useState } from "react";

// const StudentContext = createContext();

// const StudentProvider = ({ children }) => {
//     const [students, setStudents] = useState({});
//     const [editStudent, setEditStudennt] = useState(null);

// const handleDeleteStudent = (id) => {
//     const updateStudents = students.filter(std => std.id != id)
//     setStudents(updateStudents);
// }

// const addAndUpdateStudent = (std) => {
//     if (editStudent) {
//         const updateStudents = students.map(oldStd => oldStd.id ==
//             editStudent.id ? std : oldStd);
//             setStudents(updateStudents);
//     } else {
//         const newStd = {...std, id: students.length + 1};
//         setStudents([...students, newStd]);
//     }
// }

// const editStudentFn = (std) => {
//     setEditStudennt(std)
// }

// const studentContextValue = {
//     students,
//     addAndUpdateStudent,
//     editStudent,
//     editStudentFn,
//     handleDeleteStudent
// };

// return (
// <StudentContext.Provider value={studentContextValue}>
// {children}
// </StudentContext.Provider>
// );
// };

// export default StudentProvider;

// export const useStudents = () => useContext(StudentContext);

// import { Children, createContext, useContext, useEffect, useState} from "react";

// const ThemeContext = createContext();
// const ThemeProvider = {( children)} => {
// const getThemeValue = () => {
// return localStorage.getItem("darkMode") === "true";
// };

//  const {darkMode, setDarkMode} = useState(getThemeValue);

//  const toggleTheme = () => {
//   const newMode = !darkMode;
//   localStorage.setItem("darkMode", newMode);
//   setDarkMode(newMode);
//  };

//  useEffect(() => {
//   if (darkMode){
//    document.documentElement.classList.add("dark");
//   } else {
//     document.documentElement.classList.remove("dark");
//   }
//  }, [darkMode]);

// const themeContextValue = {
//   darkMode,
//   toggleTheme
// };

// return(
//   <ThemeContext.Provider value={themeContextValue}>
//     {children}
//   </ThemeContext.Provider>
// );
// };

// export default ThemeProvider;
// export const useTheme = () => useContext(ThemeContext);

// import {FaMoon , FaSun } from "react-icons/fa";
// import {useTheme} from "../contexts/ThemeContext";
// const TopBar = () => {
// const { darkMode, toggleTheme} = useTheme();
// return(
//   <div className="flex justify-between dark:text-white items-center px-6 py-3 bg-white dark:bg-black shadow-md transition-all duration-300">
//     <h1 className="text-2xl font-bold tracking-wide">My Premium App</h1>
// <button onClick={toggleTheme}
// className="p-2 rounded-full bg-white/20 hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/30 transition-colors duration-200"
// aria-label>{darkMode ? <FaSun className="h-6 w-6 text-yellow-300"/> :
//  <FaMoon className="h-6 w-6" />}</button>
//   </div>
// );
// };

// export default TopBar;

// import {createContext, useContext, useState} from "react";

// const StudentContext = createContext();

// const StudentProvider = ({children}) => {
//     const [students , setStudents] =  useState([]);
//     const [editStudent, setEditStudennt] =  useState(null);

// const handleDeleteStudent = (id) => {
//   const updatedStudents = students.filter(std => std.id != id)
//   setStudents(updatedStudents);
// };

// const addAndUpdateStudent = (newStd) => {
//   if (editStudent){
//     const updateStudents = students.map(oldStd => oldStd.id == editStudent.id ? newStd : oldStd);
//     setStudents(updateStudents);
//     setEditStudennt(null);
//   } else{
//     setStudents([...students, {...newStd, id: students.length +1}]);
//   }
// };

// const editStudentFn = (std) => {
//   setEditStudennt(std);
// };

// const studentContextValue = {
// students,
// addAndUpdateStudent,
// editStudent,
// editStudentFn,
// handleDeleteStudent
// };

// return (
//  <StudentContext.Provider value={studentContextValue}>
//   {children}
//   </StudentContext.Provider>
// )
// }

// export default StudentProvider;

// export const useStudents = () => useContext(StudentContext);

// import React,{useEffect, useState} from 'react'
// import {useStudents} from "../contexts/StudentContext";

// const StudentForm = () => {
//   const { addAndUpdateStudent, editStudent} = useStudents();
//   const [stdObj, setStdObj] = useState({name:"", email: ""});
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addAndUpdateStudent(stdObj);
//     setStdObj({name:"", email: ""});
// };

// const handleChange = ({target: {name, value }}) => {
// setStdObj({...stdObj,[name]: value});
// }

//   useEffect(()=>{
//     if(editStudent){
//         setStdObj(editStudent);
//     }
//   },[editStudent])

//     return (
//     <div className='max-w-md mx-auto bg-white/70 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-200 transition-allduration-300 hover:shadow-xl'>
//       <h2 className='text-2xl font-semibold text-gray-800 mb-4 text-center'>Add New Student</h2>

// <form onSubmit={handleSubmit} className='spac-y-5'>
//     {/* Name Field */}
// <div className='flex flex-col gap-2'>
//     <label htmlFor='name' className='text-gray-700 font-medium tracking-wide'>Full Name</label>
//     <input name='name' value={stdObj.name} onChange={handleChange}
//     type='text' required className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200'
//     placeholder='e.g. John Doe'/>
// </div>

// {/* Email Field */}
// <div className='flex flex-col gap-2'>
//     <label htmlFor='email' className='text-gray-700 font-medium tracking-wide'>Email Address</label>
//     <input name='email' value={stdObj.email} onChange={handleChange}
//     type='email' required className='border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200'
//     placeholder='e.g. john@example.com'/>
// </div>

// {/* Submit Button  */}
// <button type='submit' className='w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg'

// </form>


//     </div>
//   )
// }

// export default StudentForm
