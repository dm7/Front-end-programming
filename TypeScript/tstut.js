/* Primmitive types */
var myName = "Sham";
var myAge = 41;
var canVote = true;
// A variable marked as any is a dynamic type
var anything = "dog";
anything = 2;
document.getElementById("tsStuff")
    .innerHTML = "My name is: " + myName;
document.write("My name is a " + typeof (myName) + "<br>");
document.write("canVote is a " + typeof (canVote) + "<br>");
document.write("anything is a " + typeof (anything) + "<br>");
document.write("my age is a " + typeof (myAge) + "<br>");
var strToNum = parseInt("5");
var num = 5;
document.write("num is a " + typeof (num) + "<br>");
/* Constants */
var PI = 3.1415;
var superman = {
    realName: "Clark Kent",
    superName: "Superman"
};
document.write(superman.realName + " is " + superman.superName + "<br>");
/* Arrays */
var employees = ["Bob", "Sally", "Sam"];
/*
  tstut.ts(38,16): error TS2345: Argument of type '5' is not assignable to
  parameter of type 'string'.
  employees.push(5);
*/
document.write(employees.toString() + "<br>");
var superheroes = [];
superheroes.push({
    realName: 'Bruce Wayne',
    superName: 'Batman'
});
/* Math expressions */
document.write(superheroes[0].realName + " is " + superheroes[0].superName + "<br>");
document.write("5 + 4 = " + (5 + 4) + "<br>");
document.write("5 - 4 = " + (5 - 4) + "<br>");
document.write("5 * 4 = " + 5 * 4 + "<br>");
document.write("5 / 4 = " + 5 / 4 + "<br>");
document.write("5 % 4 = " + 5 % 4 + "<br>");
// If you try to add anything to a string both
// become strings
document.write("5 + String 2 = ", (5 + '2') + "<br />");
var randNum = 1;
/* Increment operator*/
document.write("randNum++ = " + randNum++ + "<br>");
document.write("++randNum = " + ++randNum + "<br>");
document.write("randNum-- = " + randNum-- + "<br>");
document.write("--randNum = " + --randNum + "<br>");
/* Variable scoping */
var sampLet = 123;
if (true) {
    var sampLet_1 = 456;
}
document.write("sampLet : " + sampLet + "<br>");
var sampVar = 123;
if (true) {
    var sampVar = 456;
}
document.write("sampLet : " + sampVar + "<br>");
/* Looping */
// Print indexes
var randArray = [5, 6, 7, 8];
for (var val in randArray) {
    document.write(val + "<br>");
}
// Print values
for (var _i = 0, randArray_1 = randArray; _i < randArray_1.length; _i++) {
    var val = randArray_1[_i];
    document.write(val + "<br>");
}
/* Functions */
var getSum = function (num1, num2) {
    return num1 + num2;
};
var theSum = getSum(5, 2);
document.write("5 + 2 = " + theSum + "<br>");
// Default values
var getDiff = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
document.write("5 - 2 = " + getDiff(5) + "<br>");
document.write("5 - 2 - 3 = " + getDiff(5, 2, 3) + "<br>");
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    document.write("Sum : " + sum + "<br>");
};
sumAll(1, 2, 3, 4, 5);
var addOne = function (x) { return x + 1; };
document.write("1 + 1 = " + addOne(1) + "<br>");
