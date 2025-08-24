// Function declaration

let func1: (x: number, y: number) => number; //Declaration OR Signature ===>>>> agei params er types and return type bole dite hobe

func1 = (a: number, b: number) => {
  //then function kaaj korar shomoy same output e dite hbe for variables and also for return type
  return a * b;
};

let calculation: (a: number, b: number, c: string) => number;
calculation = (x: number, y: number, z: string) => {
  if (z == "add") {
    return x + y;
  } else if (z == "minus") {
    return x - y;
  } else {
    return x * y;
  }
};

let userDetails: (
  id: number | number,
  userInfo: {
    //ekhane amra id er type number or string both can use
    name: string; // object er khetre key and property must be same dite hobe call dear shomoy
    age: number;
  }
) => void;

userDetails = (
  userId: number,
  user: {
    //we can change the params name and also the object name but we cant change anything in the object like key and their types
    name: string;
    age: number;
  }
) => {};

// classes
class Player {
  name: string;
  age: number;
  country: string;
  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(`${this.name} from ${this.country} age ${this.age} is playing`);
  }
}

const mashrafi = new Player("Mashrafi", 30, "Bangladesh");
const sakib = new Player("Sakib", 27, "Bangladesh");

const players: Player[] = []; //direct calling Player object as an array
players.push(mashrafi); //er vitor just je object banaisi oitai push korte parbo extra kisu push kora jabena
players.push(sakib); //er vitor just je object banaisi oitai push korte parbo extra kisu push kora jabena
