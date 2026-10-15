// Part 1: Variables and Data Types (5 Questions)

// 1. Declare variables using var, let, and const. Reassign and redeclare them wherever allowed, then print the results.

var a = 100;
a = 200 ;
var a = 300;
let b = 100;
b = 200;
const c = 100;
console.log(a, b, c); // 300 200 100

// 2. Create variables for your name, age, and programming knowledge. Print each variable and its data type using typeof.

let nameVar = "Pradeepan";
let ageVar = 24;
let progVar = true;
console.log(nameVar, typeof(nameVar)); // Pradeepan string
console.log(ageVar, typeof(ageVar)); // 24 'number'
console.log(progVar, typeof(progVar)); // true 'boolean'

// 3. Create an array of 5 fruits. Print the complete array, the first element, and the last element.

let fruits = ["Apple", "Banana", "Kiwi", "Mango", "Orange"];
console.log(fruits); // ["Apple", "Banana", "Cherry", "Mango", "Orange"];
console.log(fruits[0]); // Apple
console.log(fruits[4]); // Orange

// 4. Create an object containing your name, role, and CGPA. Print each property separately.

let student = {name : "Pradeepan", role: "Developer", cgpa: 9.1};
console.log(student.name); // Pradeepan
console.log(student.role); // Developer
console.log(student.cgpa); // 9.1

// 5. Take the user's name and age using prompt(). Display the name using alert() and print the age in the console.

let userName = prompt("Enter your name:");
let userAges = prompt("Enter your age:");
alert(userName); //  says Pradeepan
console.log(userAges); // 24

// Part 2: Operators (7 Questions)

// 6. Declare two numbers and perform addition, subtraction, multiplication, division, modulus, and exponentiation.

let num1 =  10;
let num2 = 8;
console.log(num1 + num2, num1 - num2, num1 * num2, num1 / num2, num1 % num2, num1 ** num2); // 18 2 80 1.25 2 100000000

// 7. Predict the output: let a = 5; console.log(a++); console.log(a); console.log(++a);

let a1 = 5;
console.log(a1++); // 5
console.log(a1); // 6
console.log(++a1); // 7

// 8. Predict the output: let a = 10; let b = a--; let c = --a; console.log(a); console.log(b); console.log(c);

let b1 = 10;
let b2 = b1--;
let b3 = --b1;
console.log(b1); // 8
console.log(b2); // 10
console.log(b3); // 8

// 9. Use the +=, -=, *=, /=, and %= assignment operators on a variable and print the final value after each operation.

let val = 10;
console.log(val += 1); // 11
console.log(val -= 1); // 10
console.log(val *= 1); // 10
console.log(val /= 10); // 1
console.log(val %= 1); // 0

// 10. Predict the results of these comparisons:

console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(10 != "10"); // false
console.log(10 !== "10"); // true

// 11. Use &&, ||, and ! to check different combinations of conditions.

let validAge = true;
let canVote = true;
let isMale = false;
console.log(validAge && isMale); // false
console.log(validAge || isMale); // true
console.log(!isMale); // true

// 12. Use the ternary operator to check whether a user's age is 18 or above and print an appropriate message.

let agePerson = 24
let result = (agePerson >= 18) ? "Adult" : "Minor";
console.log(result); // Adult

// Part 3: Type Casting and Conditions (6 Questions)

// 13. Predict the data type of each expression:

console.log(typeof ("hello" + 10)); // String
console.log(typeof (10 + true)); // number
console.log(typeof (10 + null)); // number
console.log(typeof ("hello" + undefined)); // String


// 14. Use Number() to convert a value received through prompt() into a number. Add 10 and print the result.

let value = prompt("Enter a Value:");
let num = Number(value);
let result2 = num + 10;
console.log(result2); // 0 + 10

// 15. Use Boolean() to check the Boolean values of an empty string, a non-empty string, 0, and true.

let emptyString = Boolean("");
let nonEmptyString = Boolean("JS");
let zero = Boolean(0);
let trueVal = Boolean(true);
console.log(emptyString); // false
console.log(nonEmptyString); // true
console.log(zero); // false
console.log(trueVal); // true

// 16. Write an if-else statement to check whether a number is positive or not.

let nums = 10;
if(nums > 0){
    console.log("Positive"); // Positive
} else if(nums < 0){
    console.log("Negative");
} else{
    console.log("zero");
}

// 17. Use else-if to display a message based on the time entered by the user: early morning, morning, afternoon, evening, or night.

let time = Number(prompt("Enter the hour 24hr:"));
if (time >= 3 && time < 6) {
    console.log("Early morning");
} else if (time >= 6 && time < 12) {
    console.log("Morning");
} else if (time >= 12 && time < 17) {
    console.log("Afternoon");
} else if (time >= 18 && time < 24) {
    console.log("Evening");
} else if(time >= 0 && time < 3){
    console.log("Night");
} else {
    console.log("Invalid Time");
} // 10 - Morning

// 18. Create a nested if statement to check eligibility based on age, height, and weight, following the conditions in your code.

let age = 24;
let height = 173;
let weight = 70;

if(age >= 18){
    if(height > 165){
        if(weight < 80){
            console.log("Eligible");
        } else{
            console.log("Not eligible due to weight");
        }
    } else{
        console.log("Not eligible due to height");
    }
} else{
    console.log("Not eligible due to age");
} // Eligible

// 19. Use switch to display a message based on a traffic light color: red, yellow, or green. Display an error for an invalid color.

let color = "green";
switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Get Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
} // Go

// 20. Use a for loop to print numbers from 1 to 20.

for (let i = 1; i <= 20; i++) {
    console.log(i);
} // 1 - 20

// 21. Use a for loop to print all even numbers from 2 to 20.

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
} // 2 4 6 8 10 12 14 16 18 20

// 22. Use a while loop to print numbers from 10 down to 1.

let j = 10;
while(j >= 1){
    console.log(j);
    j--;
} // 10 - 1

// 23. Use a do-while loop to print numbers from 1 to 10.

let k = 1;
do{
    console.log(k);
    k++;
} while(k <= 10); // 1 - 10

// 24. Use a for-of loop to print each character in the string "JavaScript".

let nameStr = "Pradeepan";
for(let char of nameStr){
    console.log(char);
} // P r a d (2)e p a  n

// 25. Use a for-of loop to print every element in an array of 5 student names.

let students = ["Arun", "Bala", "Chris", "Dave", "Tharun"];
for (let name of students) {
    console.log(name);
} // Arun Bala Chris Dave Tharun

// 26. Use a for-in loop to print all keys and values of this object:

let student1 = {
    name: "Priya",
    role: "Frontend Developer",
    cgpa: 9
};
for(let key in student1){
    console.log(key + " : " + student1[key]);
} /* name: "Priya",
    role: "Frontend Developer",
    cgpa: 9 */

// Part 5: Mixed Practice (4 Questions)

// 27. Take two numbers using prompt() and display their sum, difference, product, and remainder.

let x = prompt("Enter a Number:"); // 10
let y = prompt("Enter another Number:"); // 10
console.log(x + y, x - y, x * y, x % y); // 1010 0 100 0

// 28. Create an array of 5 numbers and use a loop to print only the numbers greater than 10.

let numbers = [1, 2, 13, 30, 39];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 10){
        console.log(numbers[i]); // 13 30 39
    }
}

// 29. Take a user's age using prompt(). Use a conditional statement to check eligibility, then display the result using alert().
let userAge = Number(prompt("Enter your age:"));
let eligible = (userAge >= 18) ? "Eligible" : "Not eligible";
alert(eligible);

// 30. Create a simple menu using switch with these options: addition, subtraction, multiplication, and division. Take two numbers from the user and display the selected operation's result.

let operation = prompt("Enter operation (add, subtract, multiply, divide):");
let numbers1 = Number(prompt("Enter a number:"));
let numbers2 = Number(prompt("Enter second number:"));
let res1;
switch (operation) {
    case "add":
        res1 = numbers1 + numbers2;
        break;
    case "subtract":
        res1 = numbers1 - numbers2;
        break;
    case "multiply":
        res1 = numbers1 * numbers2;
        break;
    case "divide":
        res1 = numbers2 !== 0 ? numbers1 / numbers2 : "Error: Division by zero";
        break;
    default:
        res1 = "Invalid operation";
}
console.log(res1); // 10 + 3 = 13