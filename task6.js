// Part 1: Array Higher-Order Methods


// 1. Create an array of 10 numbers and use forEach() to print each number.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach((num) => {
    // console.log(num); // 1 2 3 4 5 6 7 8 9 10
});

// 2. Create an array of numbers and use map() to create a new array where every number is multiplied by 5.
let multipliedArray = arr.map((num) => {
    return num * 5; //  [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
});

console.log(multipliedArray);

// 3. Given an array of numbers, use filter() to get only numbers greater than 20.
arr = [10, 19, 30, 70, 80];
let filteredArray = arr.filter((num) => {
    return num > 20;
});

console.log(filteredArray);

// 4. Create an employee array containing name and salary. Use filter() to display employees whose salary is less than or equal to ₹300,000.
let employees = [
    { name: "Bala", salary: 150000 },
    { name: "Arun", salary: 250000 },
    { name: "Charan", salary: 320000 },
    { name: "Divya", salary: 300000 },
    { name: "Elango", salary: 450000 }
];

let lowSalary = employees.filter((emp) => {
    return emp.salary <= 300000;
});

console.log(lowSalary);  
// {name: 'Bala', salary: 150000}
// {name: 'Arun', salary: 250000}
// {name: 'Divya', salary: 300000}

// 5. Using the same employee array, use find() to get the first employee whose salary is greater than ₹200,000.
let firstHigh = employees.find((emp) => {
    return emp.salary > 200000;
});

console.log(firstHigh); // {name: "Arun", salary: 250000}

// 6. Use reduce() to calculate the total of all numbers in an array.
let totalSum = arr.reduce((a, b) => a + b);
console.log(totalSum); // 209

// 7. Create an array of numbers and use some() to check whether at least one number is even.
let anyEven = arr.some((a) => a % 2 === 0);
console.log(anyEven); // true

// 8. Use every() to check whether all numbers in an array are greater than zero.
let zeroGreater = arr.every((num) => num > 0);
console.log(zeroGreater); // true

// 9. Given an array of numbers, sort them in ascending order using the sort callback.
arr = [40, 10, 100, 29, 9];
arr.sort((a, b) => a - b);
console.log(arr); // [9, 10, 29, 40, 100]

// 10. Given an array of numbers, sort them in descending order using sort() and (a, b) => b - a.
arr.sort((a, b) => b - a);
console.log(arr); // [100, 40, 29, 10, 9]

// Part 2: String Methods

// 11. Create a string "javascript" and print the character at index 4 using charAt().
let str = "javascript";
console.log(str.charAt(4)); // s

// 12. Find the character code at index 2 using charCodeAt().
console.log(str.charCodeAt(2)); // 118 

// 13. Create a string with spaces at the beginning and end. Remove the extra spaces using trim().
str = "   hello world   ";
console.log(str.trim()); // hello world

// 14. Convert a string to uppercase and lowercase using the appropriate methods.
str = "JavaScript";
console.log(str.toUpperCase()); // JAVASCRIPT
console.log(str.toLowerCase()); // javascript

// 15. Check whether a string contains "script" using includes().
console.log(str.includes("script")); // true

// 16. Check whether a string starts with "Java" and ends with "Script" using the appropriate methods.
console.log(str.startsWith("Java")); // true
console.log(str.endsWith("Script")); // true

// 17. Replace every occurrence of "java" with "python" in a string using replaceAll().
let sentence = "java is easy and java is fun";
console.log(sentence.replaceAll("java", "python")); // python is easy and python is fun

// 18. Split the string "html-css-javascript-react" into an array using split().
let tech = "html-css-javascript-react";
console.log(tech.split("-")); // ["html", "css", "javascript", "react"]

// 19. Convert an array of names into a single string using join() with a comma separator.
let names = ["Arun", "Bala", "Charan"];
console.log(names.join(",")); // Arun,Bala,Charan

// 20. Create a string and extract a portion of it using slice().
console.log(str.slice(0, 4)); // Java

// Part 3: Date Methods

// 21. Create a Date object and print the current year, month, date, and day.
let today = new Date();
console.log(today.getFullYear()); // 2026
console.log(today.getMonth()); // 10  
console.log(today.getDate()); // 2
console.log(today.getDay()); // 1 

// 22. Create an array containing all 12 month names. Use getMonth() to display the current month name.
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months[today.getMonth()]); // November

// 23. Print the current hours, minutes, and seconds using the appropriate date methods.
console.log(today.getHours()); // 12
console.log(today.getMinutes()); // 3
console.log(today.getSeconds()); // 10  (changes every time you run it)

// 24. Create a date object and change its year to 2003, month to January, and date to 30 using the setter methods.
let myDate = new Date();
myDate.setFullYear(2003);
myDate.setMonth(0);
myDate.setDate(30);

console.log(myDate.toDateString()); // Thu Jan 30 2003

// Part 4: Asynchronous JavaScript

// 25. Use setTimeout() to print "Welcome to JavaScript" after 3 seconds.

function greet(){
    setTimeout(() => {
        console.log("Welcome to JavaScript");
    }, 3000);
};

// greet(); // Welcome to JavaScript

// 26. Use setInterval() to print "Learning JavaScript" every 2 seconds.

let timer = setInterval(() => {
    console.log("Learning JavaScript");   // Learning JavaScript
}, 2000);


// 27. Stop the interval created in Task 26 after 8 seconds using clearInterval().

setTimeout(() => {
    clearInterval(timer);  // Prints Learning JavaScript 4 times
}, 8000);

// 28. Create three functions named one(), two(), and three(). Call them in this order: one(), setTimeout(two, 0), and three(). Observe the output order.
function one(){
    console.log("One");
};
function two(){
    console.log("Two");
};
function three(){
    console.log("Three");
};

one();
setTimeout(two, 0);
three(); // One Three Two

// Part 5: Promises and API Fetching

// 29. Create a Promise that resolves with the message "Login successful" and display the result using .then().

let login = new Promise((resolve, reject) => {
    console.log("Login Successfull");
});

login.then((result) => {
    console.log(result); // Login Successfull
});

// 30. Create a Promise that rejects with the message "Invalid password" and handle the error using .catch().

let password = new Promise((resolve, reject) => {
    console.log("Invalid password"); 
});

password.catch((result) => {
    console.log(result); // Invalid password
});

// 31. Create a Promise and use .finally() to print "Process completed" regardless of whether it resolves or rejects.
let task = new Promise((resolve, reject) => {
    resolve("Task done"); 
});

task.then((result) => {
    console.log(result); // Task done
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Process completed"); // Process completed
});

// 32. Fetch product data from the Fake Store API:
// https://fakestoreapi.com/products
// Convert the response to JSON and print all product titles using forEach().

// fetch("https://fakestoreapi.com/products")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         data.forEach((product) => {
//             console.log(product.title);
//         });
//     });

// 33. Fetch the same API and print the title, price, and category of every product.

// fetch("https://fakestoreapi.com/products")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         data.forEach((product) => {
//             console.log(`Title: ${product.title} | Price: ₹${product.price} | Category: ${product.category}`);
//         });
//     });

// 34. Handle API errors using .catch() and display the error message using console.warn().
// fetch("https://fakestoreapi.com/products")
//     .then((response) => {
//         return response.json();
//     })
//     .catch((error) => {
//         console.warn(error.message); 
//     });

// 35. Use .finally() to print "API call completed" after the fetch process.
fetch("https://fakestoreapi.com/products")
    .then((response) => {
        return response.json();
    })
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.warn(error.message);
    })
    .finally(() => {
        console.log("API call completed"); // API call completed
    });

// Part 6: Real-Time Mini Tasks

// 36. Employee salary report: Create an array of employee objects. Use filter() to select employees earning less than ₹300,000, then use forEach() to print their names and salaries.
let staff = [
    { name: "Bala", salary: 150000 },
    { name: "Arun", salary: 250000 },
    { name: "Charan", salary: 320000 },
    { name: "Divya", salary: 300000 },
    { name: "Elango", salary: 450000 }
];

let report = staff.filter((emp) => {
    return emp.salary < 300000;
});

report.forEach((emp) => {
    console.log(emp.name, emp.salary);// Bala 150000  Arun 250000 
});

// 37. Product price calculator: Fetch products from the Fake Store API and use map() to create a new array containing only product titles and prices.
// fetch("https://fakestoreapi.com/products")
//     .then((response) => {
//         return response.json();
//     })
//     .then((value) => {
//         let details = value.map((product) => {
//             return {title : product.title, price : product.price};
//         });
//         console.log(details);
//     });

// 38. Product search: Fetch products and use filter() to display products belonging to a category you choose.
fetch("https://fakestoreapi.com/products")
    .then((response) => {
        return response.json();
    })
    .then((value) => {
        let electronics = value.filter((product) => {
            return product.category === 'electronics';
        console.log(details);
        });
        electronics.forEach((product) => {
            console.log(product.title);
        });
        /*
        WD 2TB Elements Portable External Hard Drive - USB 3.0 
        task6.js:304 SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s
        task6.js:304 Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5
        task6.js:304 WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive
        task6.js:304 Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin
        task6.js:304 Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED 
        */
    });

// 39. Number analysis: Given an array of numbers, use map(), filter(), reduce(), some(), and every() to perform different calculations and checks.
let numbers = [9, 18, 28, 30, 80];

let doubled = numbers.map((num) => {
    return num * 2;
});
console.log(doubled); // [18, 36, 56, 60, 160]

let greaterThanTen = numbers.filter((num) => {
    return num > 10;
});
console.log(greaterThanTen); // [18, 28, 30, 80]

let sum = numbers.reduce((acc, num) => {
    return acc + num;
}, 0);
console.log(sum); // 165

let anyEvens = numbers.some((num) => {
    return num % 2 === 0;
});
console.log(anyEvens); // true

let allPositiveNumbers = numbers.every((num) => {
    return num > 0;
});
console.log(allPositiveNumbers); // true

// 40. Product listing: Fetch the Fake Store API data, convert the response to JSON, and print the title, price, and category of each product. Handle errors with .catch() and print a completion message with .finally().

fetch("https://fakestoreapi.com/products")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((product) => {
            console.log(product.title, product.price, product.category);
        });
    })
    .catch((error) => {
        console.warn(error.message);
    })
    .finally(() => {
        console.log("API call completed"); // API call completed
    });