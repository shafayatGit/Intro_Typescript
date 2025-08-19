"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World");
let age = 20;
// age = "a" //as we declared age as a number we cant change its type anymore
if (age < 50)
    age += 10;
console.log(age);
// Types Declaration
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let level; //if we don't initialize then its type will be any
//level =1; //then we can assign anything but we should avoid this
//level="a"
// Arrays Declaration
let nums = [1, 2, 3]; //jodi kono types na diye just value dei tahole shey bujhe nibe
let num = []; //jodi type na diye just empty array dei tahole shey any type dhore nibe jeta AVOID korte hbe
let numbers = [1, 2, 3, 4];
let names = ["Shafayat", "Hossain"];
// Tuple
// Taking user input Id and name
let user = [1, "Shafayat"];
user.push({});
console.log(user);
let newUser = [1]; //optional chaining korle value assign na korleo error ashbena.
//# sourceMappingURL=index.js.map