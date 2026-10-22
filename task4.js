// Part 1: Array Manipulation Methods (7 Questions)

// 1. Create an array of 5 fruits. Add 3 fruits at the end using push() and print the array.

let fruits = ["apple", "banana", "mango", "orange", "grapes"];
fruits.push("kiwi", "papaya", "guava");
console.log(fruits); // [ 'apple', 'banana', 'mango', 'orange', 'grapes', 'kiwi', 'papaya', 'guava' ]

// 2. Create an array of 6 numbers. Remove the last element using pop() and print the result.

let nums = [10, 20, 30, 40, 50, 60];
nums.pop();
console.log(nums); // [10, 20, 30, 40, 50]

// 3. Create an array of 5 names. Remove the first element using shift() and print the array.

let names = ["Akhil", "Bala", "Ashwin", "Arun", "Pradeepan"];
names.shift();
console.log(names); // [ 'Bala', 'Ashwin', 'Arun', 'Pradeepan' ]

// 4. Create an array of 4 numbers. Add two numbers at the beginning using unshift().

let beginNums = [3, 4, 5, 6];
beginNums.unshift(1, 2);
console.log(beginNums); // [1, 2, 3, 4, 5, 6]

// 5. Given let arr = [10, 20, 30, 40, 50], remove 2 elements starting from index 1 using splice().

let arr5 = [10, 20, 30, 40, 50];
arr5.splice(1, 2);
console.log(arr5); // [10, 40, 50]

// 6. Given let arr = [1, 2, 3, 4, 5], replace the value 3 with 100 using splice().

let arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 1, 100); 
console.log(arr6); // [1, 2, 100, 4, 5]

// 7. Create an array of 5 numbers and use fill() to replace elements from index 2 to index 4 with "hello".

let arr7 = [1, 2, 3, 4, 5];
arr7.fill("hello", 2, 5);
console.log(arr7); // [1, 2, 'hello', 'hello', 'hello']


// Part 2: Array Merge and Search Methods (8 Questions)

// 8. Create two arrays of numbers and combine them using concat().

let concatA = [1, 2, 3];
let concatB = [4, 5, 6];
let combinedArr = concatA.concat(concatB);
console.log(combinedArr); // [1, 2, 3, 4, 5, 6]

// 9. Given let arr = [10, 20, 30, 40, 50, 60], extract elements from index 1 to index 4 using slice().

let sliceArr = [10, 20, 30, 40, 50, 60];
let sliced = sliceArr.slice(1, 4); 
console.log(sliced); // [20, 30, 40]

// 10. Create a nested array and convert it into a single-level array using flat(Infinity).

let nestedFlat = [1, [2, 3, [4, 5, [6, 7]]]];
console.log(nestedFlat.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7]

// 11. Given let arr = [10, 20, 30, 40, 50], check whether the value 30 exists using includes().

let includeArr = [10, 20, 30, 40, 50];
console.log(includeArr.includes(30)); // true

// 12. Given let arr = [5, 10, 15, 20, 25], find the index of 20 using indexOf().

let indexArr = [5, 10, 15, 20, 25];
console.log(indexArr.indexOf(20)); // 3

// 13. Given let arr = [1, 2, 3, 2, 1, 2], find the last index of 2 using lastIndexOf().

let lastIndexArr = [1, 2, 3, 2, 1, 2];
console.log(lastIndexArr.lastIndexOf(2)); // 5

// 14. Create an array of numbers and arrange its elements using sort().

let sortArr = [40, 10, 30, 20, 50];
sortArr.sort();
console.log(sortArr); // [10, 20, 30, 40, 50]



// 15. Create an array of 7 numbers and reverse the order using reverse().

let reverseArr = [1, 2, 3, 4, 5, 6, 7];
reverseArr.reverse();
console.log(reverseArr); // [7, 6, 5, 4, 3, 2, 1]


// Part 3: Spread and Rest Operators (5 Questions)

// 16. Create two arrays containing 4 numbers each. Merge them into one array using the spread operator.

let spreadA = [1, 2, 3, 4];
let spreadB = [5, 6, 7, 8];
let spreadMerged = [...spreadA, ...spreadB];
console.log(spreadMerged); // [1, 2, 3, 4, 5, 6, 7, 8]

// 17. Create two objects: one containing student details and another containing job details. Merge both using the spread operator.

let studentObj = { name: "Akhil", age: 24 };
let jobObj = { role: "Developer", company: "TCS" };
let mergedObj = { ...studentObj, ...jobObj };
console.log(mergedObj); // { name: 'Akhil', age: 24, role: 'Developer', company: 'TCS' }

// 18. Create a function that accepts two parameters and uses the rest operator to collect all remaining arguments into an array.

function showArgs(a, b, ...rest) {
    console.log(a, b, rest);
}
showArgs(1, 2, 3, 4, 5); // 1 2 [ 3, 4, 5 ]

// 19. Write a function using function one(a, b, ...c) that prints the sum of a, b, c[0], and c[1].

function one(a, b, ...c) {
    console.log(a + b + c[0] + c[1]);
}
one(1, 2, 3, 4); // 10

// 20. Create two arrays and use the spread operator to copy all elements from the first array into a new array.

let copyOriginal = [1, 2, 3];
let copyNew = [...copyOriginal];
console.log(copyNew); // [1, 2, 3]


// Part 4: Array Destructuring (3 Questions)

// 21. Given let arr = [10, 20, 30, 40], extract all four values into separate variables.
{
    let arr = [10, 20, 30, 40];
    let [a, b, c, d] = arr;
    console.log(a, b, c, d); // 10 20 30 40
}

// 22. Given let nested = [1, 2, [3, 4, [5, 6]]], extract 1, 2, 3, 4, 5, 6 using nested destructuring.
{
    let nested = [1, 2, [3, 4, [5, 6]]];
    let [a, b, [c, d, [e, f]]] = nested;
    console.log(a, b, c, d, e, f); // 1 2 3 4 5 6
}

// 23. Create an array containing a student's name, age, and CGPA. Extract these using destructuring and print them.
{
    let student = ["Pradeepan", 23, 9.1];
    let [name, age, cgpa] = student;
    console.log(name, age, cgpa); // Pradeepan 23 9.1
}


// Part 5: Object Destructuring (3 Questions)

// 24. Create an object containing name, role, and location. Extract these properties using object destructuring.
{
    let emp = { name: "Bala", role: "Developer", location: "Chennai" };
    let { name, role, location } = emp;
    console.log(name, role, location); // Bala Developer Chennai
}

// 25. Create an object containing a student's name and a nested address object with city and state. Extract city and state using nested object destructuring.
{
    let student = {
        name: "Ashwin",
        address: { city: "Coimbatore", state: "Tamil Nadu" }
    };
    let { address: { city, state } } = student;
    console.log(city, state); // Coimbatore Tamil Nadu
}

// 26. Given an object with name, role, and location: { mainLocation, currentLocation }, print all four values using destructuring.
{
    let emp = {
        name: "Arun",
        role: "Tester",
        location: { mainLocation: "Chennai", currentLocation: "Bangalore" }
    };
    let { name, role, location: { mainLocation, currentLocation } } = emp;
    console.log(name, role, mainLocation, currentLocation);
    // Arun Tester Chennai Bangalore
}


// Part 6: Mixed Practical Challenges (4 Questions)

// 27. Create an array of 10 numbers. Remove the first and last elements, add two new numbers at the beginning, and print the final array.
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    arr.shift(); // removes 1
    arr.pop();   // removes 10
    arr.unshift(100, 200);
    console.log(arr); // [100, 200, 2, 3, 4, 5, 6, 7, 8, 9]
}

// 28. Create an array containing duplicate numbers. Use includes(), indexOf(), and lastIndexOf() to check and print info about one selected number.
{
    let arr = [5, 10, 15, 10, 20, 10, 25];
    let target = 10;
    console.log(arr.includes(target));   // true
    console.log(arr.indexOf(target));    // 1
    console.log(arr.lastIndexOf(target)); // 5
}

// 29. Create two objects containing employee information. Merge them using the spread operator, then destructure and print the employee's name and role.
{
    let emp1 = { name: "Akhil", age: 24 };
    let emp2 = { role: "Developer", company: "TCS" };
    let merged = { ...emp1, ...emp2 };
    let { name, role } = merged;
    console.log(name, role); // Akhil Developer
}

// 30. Create a nested array containing numbers. Flatten it using flat(Infinity), reverse the resulting array, and print the final result.
{
    let arr = [1, [2, 3, [4, 5, [6, 7]]]];
    let flatArr = arr.flat(Infinity);
    flatArr.reverse();
    console.log(flatArr); // [7, 6, 5, 4, 3, 2, 1]
}