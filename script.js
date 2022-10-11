//output (8--15)
//variable (16 -- 20)
//variable nameing convertion (22-- 30)
//data type (34 -56)
//re-assing (58 -- 64)
//const, var variabel (67 -- 77)
//math operations
//assigment operators
//comaparison operators
//oprator precedence
//tempLate literals
//conditionals or control structure
//type conversion (manually) and coerion(automatically)
//Number convert
//string convert
//game
// nested conditions
// and , or (&&, ||)
// leap year testing
// switch case statements
// statement and expression
// expression can produce values
// statement can't produce values, only manupulates expression
// ternary operator
//--------------------------------------------------------------------
//output
console.log("hello, world");

console.log("ajke amr class nai");

//how is java script?
//ans: java script is a high level language multi parading interprited object object-oriented programing lacguage.
//---------------------------------------------------------------------
//variable = Something bears fruit
let name = "ariful"; // let = java script regabe keyword, starts only small latter.
let number = 20;
let temperature = 45;
console.log(number + temperature);
//--------------------------------------------------------------------
//variable nameing convertion (camel case)
let herName = "Nisi Khan";
let myBikeBand = "FZS v-3"; //no spaece
let firstName = "islam";
let ramFrequencyInTimeOverTorqueSpeed = 2000;
console.log(myBikeBand); //direct variable name no string
//java script regabe keyword not use the variable name.

//name: is a java script regabe keyword
//------------------------------------------------------------------==

/*
//data types : obeject or primitive type
//primitive data type = 7 
1:number (integer, flooting)
2: string ("")
3: boolean data type( true and false)
4: undefined ()
5: null type
6:symbol
7:bigInt

value has type, not variables
*/
let movieRating = 7.98; //numver (flooting type)
let movieName = "inception"; // string
let isRaining = false; // boolean data types
let isSheCute = true; // boolean data types
let carSpeed = null; //null

let isJavaScript; //undefined
console.log(typeof movieName); //typeof variabel see the variabel value types.
console.log(typeof isRaining);
console.log(typeof isJavaScript);
console.log(carSpeed); //null isn'nt an object, it's a bug
/*-------------------------------------------------------*/
//re-assing
let isJavaScriptFun;
isJavaScriptFun = 10;
console.log(typeof isJavaScriptFun);

let age = 30; //declareing a variabel using let
age = 32; //re-assing or mutate
/*-------------------------------------------------*/

//const,var variable not re-assing and must be a value;
const birthYear = 1921; //deglering a veryable usin const keyword

var planMusterName = "Mr. y"; //using the var variable
planMusterName = " Mr. x";

fatFriendsName = "name jani nah"; //not useing the java script

const myLocation = "Dhaka";
const distance = "343";
console.log(myLocation, distance);
//------------------------------------------------------------------//

//math operations
const currentYear = 2022; //not repert
const ageTumpa = currentYear - 2003;
const ageRahat = currentYear - 1990;

console.log(`${ageTumpa} tumpa, ${ageRahat} Rahat`);
console.log(ageTumpa * 2);
console.log(ageTumpa / 2);
console.log(ageTumpa ** 2); //2 to the power of  24 --(24^2)
//string
const fristNam = "Rakib";
const lastNam = "Rana";
console.log(fristNam + " " + lastNam);

const bikeBand = "yamaha";
const bikeModel = "MT15";

const fullBikeName = bikeBand + " " + bikeModel;
console.log(fullBikeName);
/* ---------------------------------------------------------------*/
//assigment operators
let number1 = 20 + 20; // (= -- assigment operators)
number1 = number1 + 15; //55
number1 += 15; //70
number1 -= 10; // 60
number1++; //61 adds only 1
number1--; // 60 minus only 1
number1 /= 2; //30
number1 *= 3; // 90
console.log(number1);

//comaparison operators (<, >, <=, >=)
const tumpa = 20;
const rahat = 20;
console.log(tumpa < rahat);
console.log(tumpa > rahat);
console.log(tumpa >= rahat);
console.log(tumpa <= rahat);

//oprator precedence
console.log(2022 > 2002 + 18); //math oprator first working
console.log(20 + (10 + 3) * 3); //(breket) power allays big

//tempLate literals

//old verson
const nameTumpa = "Tumpa";
const tumpaAge = 24;
const jobTumpa = "prgrammer";
const bioTumpa =
  "MY name is " +
  nameTumpa +
  "," +
  tumpaAge +
  "years old and I am a" +
  jobTumpa;
console.log(bioTumpa);

//newverson
const vioTumpa = `My name is ${nameTumpa} ${tumpaAge} years old and I am a ${jobTumpa}`;
console.log(vioTumpa); //back tick (``)

console.log(`
I am a Ariful Islam 
and 
I am a students
and
I am a programmer`);

//conditionals or control structure
const birthYears = 2000;
if (birthYears <= 1999) {
  console.log("You are a 90's kid!");
} else {
  console.log("your not 90's kid");
}

const bikeSpeed = 1000;

if (bikeSpeed > 60) {
  console.log("you have a danger zoon");
} else {
  console.log("you are save driveing");
}

const money = 00;
const pizzPrice = 150;
const burgerPrice = 220;
const milkShake = 100;
const singaraPrice = 20;

if (money > burgerPrice) {
  console.log("burger khabo");
} else if (money > pizzPrice) {
  console.log("pizza khabo");
} else if (money > singaraPrice) {
  console.log("singara khabo");
} else {
  console.log("pani khabo");
}

//type conversion (manually) and coerion(automatically)
//whats type conversion?
//ans: I will manually convert type to type its conversion.
//whats is type coerion?
//ans: java script will automatically  coerion.

const inputYear = "1996";
console.log(inputYear + 10 + 20); // string + nubmer + number (its all string) type coerion
console.log(inputYear - 10); //string - number = string  coerion number ( its type coerion)

//NaN not a number
console.log("ariful" - 20); // NaN
// string - string ( its nan)
console.log(10 + 20);
console.log("23" + 20);
console.log(40 + "30");
console.log(10 + "10");
console.log(10 - "10");
console.log("10" - 10);
console.log("ariful" + 20);
console.log("ariful" - 20);
console.log(20 + "ariful");
console.log(20 - "ariful");

//Number convert
const testNumber = "20";
console.log(testNumber);
console.log(Number(testNumber));

//string convert
const testNumber2 = 20;
console.log(String(testNumber2));

const currentGece = false;
console.log(String(currentGece));

//game
let a = "1" + 1;
a -= 1;
console.log(a); //10

let x = 2 + 3 + 4 + "5";
x += 5;
console.log(x); //955
let y = "10" - "5" - "3" - 2 + "5";
y -= 10;
console.log(y); //-5

let b = 1 + 1 - 1 - "1" + "10" - 20;
b += "10";
b--;
console.log(b);

//truthy and falsy balues
//falsy values 5: 0, "", undefinded, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

//truthy values
console.log(Boolean(1));
console.log(Boolean(" "));
console.log(Boolean({}));

let money1 = 0;
if (money1) {
  console.log("I have money");
} else {
  console.log("I have no money");
}

//ewality operators
//(=) assing
//(== or ===, eqality
// != or !==, not equal

const aGe = "21";
if (aGe == 21) {
  // js does type coercion, not-strict
  console.log("you are adult");
} else {
  console.log("you are too young");
}

if (aGe === 21) {
  // js does'n type coercion, strict
  console.log("you are adult");
} else {
  console.log("you are too young");
}

const facouriteNumber = Number(prompt("waht's is favoutite number"));
console.log(facouriteNumber);

// const favouriteNumber = Number(prompt("What's your favourite number?"));
// console.log(favouriteNumber);

// nested conditions
const testAge = 18;
const testNID = true;
const testBirthReg = false;
const testPassport = true;

if (testAge === 18) {
  if (testNID) {
    if (testPassport) {
      console.log(`Your age: ${testAge}, applicable for this job. 💯`);
    }
  }
} else if (testAge !== 18) {
  if (testBirthReg) {
    console.log(
      `Your age: ${testAge}, and you're not applicable for this job. But you can apply later for NID and Passport. `
    );
  }
}

// and , or (&&, ||)
const savedMoney = 150000;
const ownHouse = true;
const hasBusiness = false;

if ((ownHouse && savedMoney >= 200000) || hasBusiness) {
  console.log("Tahole tomar biya hobe na.");
} else {
  console.log("Tahole tomar biya hobe na.");
}

const pocketMoney = 200;
const timeLeft = 5;

if (pocketMoney >= 100 || timeLeft >= 6) {
  console.log("Burger khaite parben");
} else {
  console.log("Parben na");
}

// leap year testing
/*
year % 400 === 0
year % 4 === 0 && year % 100 !== 0
*/

let year = "asgfjsdg";

if (typeof year === "number") {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a leap year.`);
  } else {
    console.log(`${year} is not a leap year.`);
  }
} else {
  console.log("Enter a valid year.");
}

// switch case statements
const day = "thursday";

switch (day) {
  case "saturday": // day === "saturday"
    console.log("No class!");
    break;
  case "sunday":
    console.log("Class ase!");
    break;
  case "monday":
    console.log("No class!");
    break;
  case "tuesday":
  case "wednesday":
    console.log("No class!");
    break;
  case "thursday":
  case "friday":
    console.log("Class ase!");
    break;
  default:
    console.log("Not a valid day!");
}

// statement and expression
// expression can produce values
// statement can't produce values, only manupulates expression

const text = "23 is bigger number.";
const text2 = "23 is not bigger number.";

if (23 > 30) {
  console.log(text);
} else {
  console.log(text2);
}

// ternary operator
let yourNumber = 150;

if (yourNumber < 50) {
  console.log("Your number is big!");
} else {
  console.log("Your number is not big");
}

if (yourNumber < 50) console.log("Your number is big!");
else console.log("Your number is not big");

yourNumber > 50
  ? console.log("Your number is big!")
  : console.log("Your number is not big");

yourNumber === 100 ? (yourNumber += 100) : (yourNumber -= 100);
console.log(yourNumber);

const m = 5;
const n = 10;
let o;

m > n ? (o = m + n) : (o = n - m);
console.log(o);
