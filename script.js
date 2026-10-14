// 1. var — 10 Questions

var name = "Pradeepan";
console.log(name); // Pradeepan

var age = 25;
age = 30;
console.log(age); // 30

var city = "Chennai";
city = "Bangalore";
console.log(city); // Bangalore

var salary = 25000;
var salary = 35000;
console.log(salary); // 35000

var value = 10;
value = 20;
var value = 30;
console.log(value); // 30

var department = "ECE";
var department = "CSE";
console.log(department); // CSE

var mark = 50;
mark = 75;
console.log(mark); // 75

var company = "Google";
var company = "Stackly";
console.log(company); // Stackly

var unassigned;
unassigned = "Done";
console.log(unassigned); // Done

var count = 1;
count = 2;
count = 3;
count = 4;
console.log(count); // 4


// 2. let — 10 Questions

let myAge = 25;
console.log(myAge); // 25

let letSalary = 30000;
letSalary = 40000;
console.log(letSalary); // 40000

let letName = "Alice";
letName = "Bob";
console.log(letName); // Bob

let letDept = "ECE";
letDept = "CSE";
console.log(letDept); // CSE

let letMark = 60;
letMark = 90;
console.log(letMark); // 90

let uninitLet;
uninitLet = "Later Value";
console.log(uninitLet); // Later Value

let testLet = 1;
// let testLet = 2;
// Uncaught SyntaxError: Identifier 'testLet' has already been declared

let letCity = "Delhi";
letCity = "Mumbai";
letCity = "Kolkata";
console.log(letCity); // Kolkata

let v1 = 1, v2 = 2, v3 = 3;
console.log(v1, v2, v3); // 1 2 3

let item = "Pen";
item = "Pencil";
// let item = "Eraser";
// Uncaught SyntaxError: Identifier 'item' has already been declared

// 3. const — 8 Questions

const constAge = 25;
console.log(constAge); // 25

const constSalary = 50000;
console.log(constSalary); // 50000

const constCompany = "Stackly";
console.log(constCompany); // Stackly

const constVal = 10;
// constVal = 20; 
// Uncaught TypeError: Assignment to constant variable.

const constRedeclare = 5;
// const constRedeclare = 10;
// Uncaught SyntaxError: Identifier 'constRedeclare' has already been declared

const college = "SRM";
console.log(college); // SRM

const cName = "Pradeepan", cAge = 24, cDept = "CSE";
console.log(cName, cAge, cDept); // Pradeepan 24 CSE

var vVar = "Var";
let lLet = "Let";
const cConst = "Const";
console.log(vVar, lLet, cConst); // Var Let Const


// 4. Printing Statements — 7 Questions

console.log("Pradeepan"); // Pradeepan

let pAge = 24;
console.log(pAge); // 24

console.log(100); // 100

let a = 1, b = 2, c = 3;
console.log(a, b, c); // 1 2 3

let message = "Hello JavaScript";
console.log(message); // Hello JavaScript

let dynamicValue = "Old";
console.log(dynamicValue); // Old
dynamicValue = "New";
console.log(dynamicValue); // New

console.log("Pradeepan");
console.log(24);
console.log("B.Tech"); // B.Tech


// 5. alert() — 5 Questions

alert("Welcome to JavaScript");

let userName = "Pradeepan";
alert(userName); 

let userAge = 24;
alert(userAge);

let welcomeMsg = "Welcome Naveen";
alert(welcomeMsg);

let qualification = "B.Tech";
alert(qualification); 


// 6. prompt() — 5 Questions

let q1Name = prompt("What is your name?");
console.log(q1Name);

let q2Age = prompt("How old are you?");
alert(q2Age); // 24

let q3Qual = prompt("What is your qualification?");
console.log(q3Qual); // B.Tech

let q4Name = prompt("Enter your name:");
alert(q4Name); // Pradeepan

let q5Age = prompt("Enter your age:");
console.log(q5Age); // 24


// 7. confirm() & document.writeln() — 3 Questions

confirm("Do you know programming?");

let batchMsg = "Welcome to Batch 41";
document.writeln(batchMsg);

confirm("Do you want to continue?");


// 8. Console Methods — 2 Questions

// 1. Write one program that uses console.log(), console.warn(), and console.error() to display three different messages.
console.log("log"); // log
console.warn("warn"); // warn anonymous
console.error("error"); // error anonymous

// 2. Write a program using console.log(), console.warn(), console.error(), and console.clear(). Observe what happens after each statement.
console.log("Log"); // Log
console.warn("Warn"); // warn
console.error("Error"); // error
console.clear(); // Console was cleared