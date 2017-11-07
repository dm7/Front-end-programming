/* Primmitive types */
var myName: string  = "Sham";
var myAge: number = 41;
var canVote: boolean = true;
// A variable marked as any is a dynamic type
var anything: any = "dog";
anything = 2;

document.getElementById("tsStuff")
        .innerHTML = "My name is: " + myName;

document.write("My name is a " + typeof(myName) + "<br>");
document.write("canVote is a " + typeof(canVote) + "<br>");
document.write("anything is a " + typeof(anything) + "<br>");
document.write("my age is a " + typeof(myAge) + "<br>");

var strToNum: number = parseInt("5");
var num: number = 5;
document.write("num is a " + typeof(num) + "<br>");

/* Constants */
const PI = 3.1415;

// ---------- INTERFACES ----------
// An interface can be used to describe complex
// types
interface SuperHero{
  realName: String;
  superName: String;
}

var superman: SuperHero ={
  realName: "Clark Kent",
  superName: "Superman"
}

document.write(superman.realName + " is " + superman.superName + "<br>");

/* Arrays */
var employees: string[] = ["Bob", "Sally", "Sam"];
/*
  tstut.ts(38,16): error TS2345: Argument of type '5' is not assignable to
  parameter of type 'string'.
  employees.push(5);
*/
document.write(employees.toString() + "<br>");
var superheroes: SuperHero[] = [];

superheroes.push({
  realName: 'Bruce Wayne',
  superName: 'Batman'
});

/* Math expressions */
document.write(superheroes[0].realName + " is " + superheroes[0].superName + "<br>");
document.write("5 + 4 = " + (5+4) + "<br>");
document.write("5 - 4 = " + (5-4) + "<br>");
document.write("5 * 4 = " + 5*4 + "<br>");
document.write("5 / 4 = " + 5/4 + "<br>");
document.write("5 % 4 = " + 5%4 + "<br>");

// If you try to add anything to a string both
// become strings
document.write("5 + String 2 = ", (5+'2') + "<br />");
var randNum: number = 1;

/* Increment operator*/
document.write("randNum++ = " + randNum++ + "<br>");
document.write("++randNum = " + ++randNum + "<br>");
document.write("randNum-- = " + randNum-- + "<br>");
document.write("--randNum = " + --randNum + "<br>");

/* Variable scoping */
let sampLet = 123;

if(true){
  let sampLet = 456;
}
document.write("sampLet : " + sampLet + "<br>");

var sampVar = 123;

if(true){
  var sampVar = 456;
}
document.write("sampLet : " + sampVar + "<br>");

/* Looping */
// Print indexes
var randArray = [5, 6, 7, 8];
for(let val in randArray){
  document.write(val + "<br>");
}
// Print values
for(let val of randArray){ // val should be scoped
  document.write(val + "<br>");
}

/* Functions */
var getSum = function (num1: number, num2: number):number {
  return num1 + num2;
}
var theSum: number = getSum(5,2);
document.write("5 + 2 = " +  theSum + "<br>");

// Default values
var getDiff = function(num1: number, num2=2, num3?: number): number{
  if( typeof num3 !== 'undefined'){
    return num1 - num2 - num3;
  }
  return num1 - num2;
}

document.write("5 - 2 = " + getDiff(5) + "<br>");
document.write("5 - 2 - 3 = " + getDiff(5, 2, 3) + "<br>");

var sumAll = function (...nums: number[]): void{
  var sum = nums.reduce((a,b) => a + b, 0);
  document.write("Sum : " + sum + "<br>");
}

sumAll(1,2,3,4,5);

var addOne = (x) => x+1;
document.write("1 + 1 = " + addOne(1) + "<br>");
