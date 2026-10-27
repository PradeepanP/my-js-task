
// Javascript Date methods 

// 1. Creating a Date

let today = new Date();
console.log(today); // Tue Oct 27 2026 10:56:29 GMT+0530 (India Standard Time)

let newDate = new Date("2026-09-27");
console.log(newDate); // Sun Sep 27 2026 05:30:00 GMT+0530 (India Standard Time)

// 2. Getting date and time values

console.log(newDate.getFullYear()); // 2026
console.log(newDate.getMonth());   // 8
console.log(newDate.getDate());    // 27
console.log(newDate.getDay());     // 0
console.log(newDate.getHours());   // 5
console.log(newDate.getMinutes()); // 30
console.log(newDate.getSeconds()); // 0

// 3. Setting date and time values

let date = new Date("2026-10-27T10:30:00");

date.setFullYear(2026);
console.log(date.getFullYear()); // 2026

date.setMonth(9);
console.log(date.getMonth()); // 9 

date.setDate(30);
console.log(date.getDate()); // 30

date.setHours(18);
console.log(date.getHours()); // 18

console.log(date);

// 4. Formatting dates

console.log(date.toDateString()); // Fri Oct 30 2026
console.log(date.toTimeString()); // 18:30:00 GMT+0530 (India Standard Time)
console.log(date.toISOString());  // 2026-10-30T13:00:00.000Z
console.log(date.toLocaleDateString()); // 10/30/2026
console.log(date.toLocaleTimeString()); // 6:30:00 PM

// JavaScript Array Higher-Order Methods

let students = [
    { name: "Arun", marks: 85, age: 20 },
    { name: "Bala", marks: 92, age: 21 },
    { name: "Kavin", marks: 45, age: 19 },
    { name: "Meena", marks: 76, age: 22 },
    { name: "Ravi", marks: 60, age: 20 }
];

// 1.forEach() - performs an action for each element

students.forEach(function(student) {
    console.log(student.name);
    
}); // Arun Bala Kavin Meena Ravi

// 2.map() — transform every element

let names = students.map(function(student){
    return {name: student.name, marks: student.marks};
});

console.log(names);
/*
0
: 
{name: 'Arun', marks: 85}
1
: 
{name: 'Bala', marks: 92}
2
: 
{name: 'Kavin', marks: 45}
3
: 
{name: 'Meena', marks: 76}
4
: 
{name: 'Ravi', marks: 60}

*/

// 3.filter() — select elements that match a condition

let passed = students.filter(function(mark) {
    return mark.marks >= 50;
    }) 
    .map(function(student) {
        return student.name;
    });

console.log(passed);
// ['Arun', 'Bala', 'Meena', 'Ravi']

// 4.find() — get the first matching element

let student = students.find(function(student){
    return student.marks >= 90;
});

console.log(student);

// 5. findIndex() - get the index

let index = students.findIndex(function(student){
    return student.name === "Meena";
});

console.log(index); // 3

// 6. some() - check whether at least one element matches

let hasTopScorer = students.some(function(student){
    return student.marks >= 90;
});

console.log(hasTopScorer); // true

// 7. every() - check whether all elements match

let allPassed = students.every(function(student){
    return student.marks >= 50;
});

console.log(allPassed); // false

// 8. reduce() - combine elements into one result

let totalMarks = students.reduce(function(total, student){
    return total + student.marks;
}, 0);

console.log(totalMarks);

// 9. sort() - sort an array

let sortedStudents = [...students]; // shallow copy

sortedStudents.sort(function(a, b){
    return a.marks - b.marks;
})
let sortedNames = sortedStudents.map(function(student){
    return student.name
});

console.log(sortedNames); // ['Kavin', 'Ravi', 'Meena', 'Arun', 'Bala']

// 10. flatmap() - map and flatten one level

let details = students.flatMap(function(student){
    return [student.name, student.marks];
});

console.log(details); // (10) ['Arun', 85, 'Bala', 92, 'Kavin', 45, 'Meena', 76, 'Ravi', 60]







