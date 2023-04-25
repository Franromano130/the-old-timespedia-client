let myFirstName = "francisco";
let myLastName = "romano";

let myFirstNameCapitalized =
  myFirstName[0].toUpperCase() + myFirstName.slice(1);
let myLastNameCapitalized = myLastName[0].toUpperCase() + myLastName.slice(1);

console.log(myFirstNameCapitalized);
console.log(myLastNameCapitalized);

let myFullName = `${myFirstNameCapitalized}  ${myLastNameCapitalized}`;

console.log(myFullName);

console.log(`My name is ${myFullName}`);

let positionLastName = myFullName.indexOf(" ") + 1;
let myInitials = `${myFullName[0]}.${myFullName[positionLastName]}.`;
console.log(myInitials);

