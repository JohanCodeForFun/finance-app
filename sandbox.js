// explicit types
var character;
var character2 = 'Mario';
// let character3: string = 9000;
var age = 12;
// let age2: number = '12';
var isLoggedIn;
isLoggedIn = true;
// isLoggedIn = 54;
var ninjas;
// ninjas.push('grodan boll')
// error thrown because the array with explicit types
// of strings, is not initialized.
var turtles = [];
// with the extra '= []' after string[], 
// the array is now initalized as an empty array
// ready to work with array methods such as .push()
var mixed = [];
// using (type|type|type) lets me define what type of
// data will be accepted in this mixed array.
mixed.push(12);
mixed.push('hello');
// mixed.push(false);
// objects
var ninjaOne;
ninjaOne = { name: 'charlie', age: 90 };
var ninjaTwo;
ninjaTwo = { name: 'Johan', age: 24, beltColor: 'purple' };
console.log(ninjaTwo);
