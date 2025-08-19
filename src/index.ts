console.log("Hello World");
let age: number = 20;
// age = "a" //as we declared age as a number we cant change its type anymore
if (age < 50) age += 10;
console.log(age);

//------>>> Types Declaration
let sales: number = 123456789;
let course: string = "Typescript";
let is_published: boolean = true;
let level; //if we don't initialize then its type will be any

//level =1; //then we can assign anything but we should avoid this
//level="a"

//------>>> Arrays Declaration
let nums = [1, 2, 3]; //jodi kono types na diye just value dei tahole shey bujhe nibe
let num = []; //jodi type na diye just empty array dei tahole shey any type dhore nibe jeta AVOID korte hbe
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["Shafayat", "Hossain"];

// ------>>>Tuple
// Taking user input Id and name
let user: [number, string] = [1, "Shafayat"];
//user.push(5);  this is the gap of typescript. because we can push another element on the array but AVOID
console.log(user);
let newUser: [number, string?, string?] = [1]; //optional chaining korle value assign na korleo error ashbena.

// ----->>> Enums
// const small = 1;
// const medium = 2;
// const large = 3;

// PascalCase
const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize = Size.Medium;
console.log(mySize);

// ------>>> Functions
function calculateTax(income: number): number {
  // vitorer number hocche parameter er type ar bairer number hocche function er return type
  if (income > 1000) return income * 1.1;
  return 0; //if we dont give that type of value then it will give error
}

calculateTax(10001);

// ------>>>Objects

// Type:1 that we will not use and looking messy
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};
employee.name = "shafayat"; //from outside we can change the values
// employee.id = 10; //that will be error because of readonly.. this means immutable or unchanged

// Type 2:
type NewEmployee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let newEmployee: NewEmployee = {
  id: 2,
  name: "Hossain",
  retire: (date: Date) => {
    console.log(date);
  },
};

// -----> Union Types/ operator = we can use OR here
function kgToLbs(weight: number | string): number | string {
  if (typeof weight == "number") {
    return weight * 2.2;
  }
  return weight;
}

kgToLbs(10);

// -----> Intersection Types = Use like AND
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// -----> Literal Types
type Quantity = 50;
let quantity: Quantity; //exact or specific value

// ------> Nullable Types
function greet(name: string) {
  console.log(name.toUpperCase());
}
// greet(null) //cant give null as we set string as a parameter type
// if we want to use this we have to use null as a union operator

// ------>Optional Chaining
type Customer = {
  birthday: Date;
};
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
console.log(customer?.birthday);
