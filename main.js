//! 1

// function LongerString(firstString, secondString) {
//     if (firstString.length > secondString.length) {
//         return firstString;
//     }
//     else {
//         return secondString;
//     }
// }

//! -----------------------------------------------------------

//! 2

// function isAExist(string) {
//     if (string.indexOf("a") != -1) {
//         return true;
//     }
//     return false;
// }

// function isApiExist(string) {
//     if (string.indexOf("api") != -1) {
//         return true;
//     }
//     return false;
// }

// function printIfExist(stringOne, stringTwo){
//     console.log(`isAExist: ${isAExist(stringOne)}, isApiExist: ${isApiExist(stringTwo)}`);
// }

//! -----------------------------------------------------------

//! 3

// let fullName = prompt("Please enter your name");

// function getLengthOfString(string) {
//     return string.length;
// }

// function isSpaceInString(string) {
//     if (string.indexOf(" ") != -1) {
//         return true;
//     }
//     return false
// }

// function getFirstName(string) {
//     return string.substring(0, string.indexOf(" "));
// }

// function getLastName(string) {
//     return string.substring(string.indexOf(" ") + 1);
// }

// function printFullName(string){
//     console.log(`First Name: ${getFirstName(string)}, Last Name: ${getLastName(string)}`);
// }

// console.log(`Length Of String: ${getLengthOfString(fullName)}`);
// console.log(`Is space in string: ${isSpaceInString(fullName)}`);
// printFullName(fullName);

//! -----------------------------------------------------------

//! 4

// function longerThanFive(string){
//     if (string.length > 5){
//         return "Long";
//     }
//     return "Short";
// }

//! -----------------------------------------------------------

//! 5

// function checkLengthOfString(string) {
//     if (string.length < 3) {
//         return "Yes";
//     }
//     return "No";
// }

//! -----------------------------------------------------------

//! 6

// function checkString(string, char){
//     if (string.length > 6){
//         return string;
//     }
//     else if (string.indexOf(char) != -1){
//         return string.indexOf(char);
//     }
//     else{
//         return `The string has less than six characters and the char: '${char}' doesn't exist.`
//     }
// }

//! -----------------------------------------------------------

//! 7

// function checkIfCharInString(string, char) {
//     if (string.indexOf(char) != -1) {
//         return string.indexOf(char);
//     }
//     return string;
// }

//! -----------------------------------------------------------

//! 8

// function getFullName(nameOne, nameTwo){
//     let fullName = `${getFirstName(nameOne)}. ${getLastName(nameTwo)}`
//     return fullName;
// }

// function getFirstName(name){
//     return name.substr(0,1);
// }

// function getLastName(name){
//     return name.toUpperCase();
// }

//! -----------------------------------------------------------

//! 9

// function getLongerPrintShorter(stringOne, stringTwo){
//     if(stringOne.length > stringTwo.length){
//         console.log(stringTwo.toLowerCase());
//         return stringOne;
//     }
//     console.log(stringOne.toLowerCase());
//     return stringTwo;
// }

//! -----------------------------------------------------------

//! 10

// function checkIndexOfChar(string, char){
//     if(string.indexOf(char) != -1){
//         return string;
//     }
//     return `The char: '${char}' is not in the string'`;
// }


