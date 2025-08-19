"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello World");
let age = 20;
// age = "a" //as we declared age as a number we cant change its type anymore
if (age < 50)
    age += 10;
console.log(age);
//------>>> Types Declaration
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let level; //if we don't initialize then its type will be any
//level =1; //then we can assign anything but we should avoid this
//level="a"
//------>>> Arrays Declaration
let nums = [1, 2, 3]; //jodi kono types na diye just value dei tahole shey bujhe nibe
let num = []; //jodi type na diye just empty array dei tahole shey any type dhore nibe jeta AVOID korte hbe
let numbers = [1, 2, 3, 4];
let names = ["Shafayat", "Hossain"];
// ------>>>Tuple
// Taking user input Id and name
let user = [1, "Shafayat"];
//user.push(5);  this is the gap of typescript. because we can push another element on the array but AVOID
console.log(user);
let newUser = [1]; //optional chaining korle value assign na korleo error ashbena.
// ----->>> Enums
// const small = 1;
// const medium = 2;
// const large = 3;
// PascalCase
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
// ------>>> Functions
function calculateTax(income) {
    // vitorer number hocche parameter er type ar bairer number hocche function er return type
    if (income > 1000)
        return income * 1.1;
    return 0; //if we dont give that type of value then it will give error
}
calculateTax(10001);
// ------>>>Objects
// Type:1 that we will not use and looking messy
let employee = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    },
};
employee.name = "shafayat"; //from outside we can change the values
let newEmployee = {
    id: 2,
    name: "Hossain",
    retire: (date) => {
        console.log(date);
    },
};
// -----> Union Types/ operator = we can use OR here
function kgToLbs(weight) {
    if (typeof weight == "number") {
        return weight * 2.2;
    }
    return weight;
}
kgToLbs(10);
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity; //exact or specific value
// ------> Nullable Types
function greet(name) {
    console.log(name.toUpperCase());
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer?.birthday);
//# sourceMappingURL=index.js.map