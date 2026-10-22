// Part 1: Functions and Parameters (5 Questions)

// 1. Create a function welcome() that prints "Welcome to JavaScript". 

function welcome() {
    console.log("Welcome to JavaScript");
}
welcome(); // Welcome to JavaScript

// 2. Create a function studentDetails(name, age, cgpa) that prints all three values. Call it with two different students.

function studentDetails(name, age, cgpa){
    console.log(`Student name is ${name}, age is ${age} and cgpa ${cgpa}`);    
}
studentDetails("Akhil", 24, 9); // Student name is Akhil, age is 24 and cgpa 9
studentDetails("Ashwin", 23, 9.1); // Student name is Ashwin, age is 23 and cgpa 9.1

// 3. Create a function calculateFee(fee) that returns the student fee. Store the returned value in a variable and print it.

function calculateFee(fee) {
    return fee;
}
let studentFee = calculateFee(50000);
console.log(studentFee); // 50000

// 4. Create a function discount(percent) that calculates a discount on a fee of ₹200,000 and prints the final fee.

function discount(percent) {
    let fee = 200000;
    let finalFee = fee - (fee * percent / 100);
    console.log(finalFee);
}
discount(30); // 140000

// 5. Create a function studentForm(name, age, disability = "no"). Call it three times, including once without passing the disability argument.
function studentForm(name, age, disability = "no"){
    console.log(`Student name is ${name}, age is ${age} and is disabled ? ${disability}`);
};

studentForm("Arun", 24, "no"); // Student name is Arun, age is 24 and is disabled ? no
studentForm("Ashwin", 23, "no"); // Student name is Ashwin, age is 23 and is disabled ? no
studentForm("Bala", 24); // Student name is Bala, age is 24 and is disabled ? no


// Part 2: Function Types and Scope (5 Questions)

// 6. Create a named function that accepts a message and prints it.

function printFunc(msg){
    console.log(msg);
}
printFunc("Hello JS"); // Hello JS

// 7. Create an anonymous function and store it in a variable. Pass a name to it and print the name.

let printName = function(name){
    console.log(name);
    
};
console.log("Pradeepan"); // Pradeepan

// 8. Create an arrow function that accepts a number and prints it.

let printNum = (num) => {
    console.log(num);
};
printNum(90); // 90

// 9. Create a function containing var, let, and const inside an if block. Check which variables can be accessed inside and outside the block.
function checkScope() {
  if (true) {
    var varVariable = "var";
    let letVariable = "let";
    const constVariable = "const";

    console.log(varVariable);    // var
    console.log(letVariable);    // let
    console.log(constVariable);  // const
  }
    console.log(varVariable); // var
    // console.log(letVariable); // Uncaught ReferenceError: letVariable is not defined
    // console.log(constVariable);   // Uncaught ReferenceError: constVariable is not defined
};
checkScope();

console.log(value);
var value = 10; // undefined

// Part 3: Callback and Higher-Order Functions (6 Questions)

// 11. Create two functions, first() and second(). Pass second as a callback to first() and execute it inside first().

function first(callback){
    callback();
};

function second(){
    console.log("Callback Done");
};

first(second); // Callback Done

// 12. Create an add(callback, a, b) function that prints the sum of two numbers and then calls the callback with two numbers.

function add(callback, a, b){
    console.log(a + b);
    callback(3, 10);
}
function addCall(a, b){
    console.log(a + b);
}

add(addCall, 3, 3); // 6 , 13

// 13. Create a sub(num1, num2) arrow function and pass it as a callback to the add() function.

let sub = (num1, num2) => num1 - num2;

function addFunc(cb, a, b){
    console.log(cb(a, b));
};
addFunc(sub, 1, 0); // 1

// 14. Create a multiply(callback, a, b) function that prints the multiplication result and then executes the callback.

function multiply(callback, a, b){
    console.log(a * b);
    callback();
};
function printDone(){
    console.log("Done");
};

multiply(printDone, 3, 3); // 9 , Done

// 15. Create a divide(num1, num2) function and pass it as a callback to another function.

function divide(num1, num2){
    return num1 / num2;
};
function calculate(cb, x, y){
    console.log(cb(x, y));
}
calculate(divide, 3, 3); // 1

// 16. Create a higher-order function that accepts a callback and calls it with a student's name.

function printStudent(cb, name){
    cb(name);
};
function studentCallback(name){
    console.log(`Hello ${name}`);
};

printStudent(studentCallback, "Bala"); // Hello Bala

// Part 4: Generator Functions (5 Questions)

// 17. Create a generator function that yields these values one by one: "10% cashback", "30% cashback", and "Better luck next time".

function* cashBack(){
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
};

// 18. Call .next() three times on a generator object and observe the returned values.

let offer = cashBack();
console.log(offer.next().value); // 10% cashback
console.log(offer.next().value); // 30% cashback
console.log(offer.next().value); // Better luck next time

// 19. Create a generator function that yields five different discount messages. Print each yielded value using a for-of loop.

function* discount(){
    yield "10% discount";
    yield "13% discount";
    yield "30% discount";
    yield "70% discount";
    yield "80% discount";
};

for(let d of discount()){
    console.log(d);
};
// 10% discount
// 13% discount
// 30% discount
// 70% discount
// 80% discount

// 20. Create a generator function that yields three student names. Use a for-of loop to display them

function* nameGen() {
    yield "Akhil";
    yield "Bala";
    yield "Ashwin";
};

for(let n of nameGen()){
    console.log(n);
}

// 21. Create a generator function with four yield statements. Check the done property after the yielded values have been consumed.

function* testGen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}
let t = testGen();
t.next();
t.next();
t.next();
t.next();
console.log(t.next()); // value: undefined, done: true

// Part 5: Currying and Uncurrying (5 Questions)

// 22. Create a normal function add(a, b, c) that prints the sum of three numbers

function addNormal(a, b, c) {
    console.log(a + b + c);
}
addNormal(1, 2, 3); // 6

// 23. Convert the add(a, b, c) function into a curried function using nested functions.

function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
};

// 24. Call a curried function with values 5, 10, and 15 using this format: functionName(5)(10)(15).

console.log(curriedAdd(5)(10)(15));

// 25. Create a curried function that accepts product price, discount percentage, and quantity, then calculates the total discounted price.

function calculateTotal(price, discount, quantity) {
    let discountedPrice = price - (price * discount / 100);
    return discountedPrice * quantity;
}

console.log(calculateTotal(1000, 10, 9)); // 8100

// 26. Write a normal three-parameter function and its curried equivalent. Call both with the same values and compare their results.

function normal(a, b, c) {
    return a * b * c;
}
function curried(a) {
    return function(b){
        return function(c){
            return a * b* c;
        };
    };
};
console.log(normal(2, 3, 4)); // 24
console.log(curried(2)(3)(4)); // 24

// Part 6: IIFE, Return, and Mixed Practice (4 Questions)

// 27. Create an IIFE that accepts a product name and discount percentage, then displays a sale message using a template string.

(function(product, discount) {
    console.log(`Sale on ${product}! Get ${discount}% off.`);
})("Laptop", 20); // Sale on Laptop! Get 20% off.

// 28. Create a function that returns a number. Store the returned value in a variable and print it.

function getNum() {
    return 100;
}
let numVal = getNum();
console.log(numVal); // 100

// 29. Create a function that accepts a student's marks and returns the marks. Use the returned value in another variable.

function getMarks(marks) {
    return marks;
}
let studentMarks = getMarks(85);
console.log(studentMarks); // 85

// 30. Create a student fee calculator using a function with a default parameter, a callback function to calculate the discount, and a return value for the final fee.

function calculateFee(fee, discount = defaultDiscount){
    let discountFee = discount(fee);
    let finalFee = fee - discountFee;
    return finalFee;
}

function defaultDiscount(fee){
    return fee * 0.10;
}

function scholarshipFeeDiscount(fee){
    return fee * 0.30;
}

console.log(calculateFee(100000)); // 90000
console.log(calculateFee(190000,scholarshipFeeDiscount)); // 133000

