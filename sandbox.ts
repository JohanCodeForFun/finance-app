// explicit types
let character: string;
let character2: string = 'Mario';
// let character3: string = 9000;

let age: number = 12;
// let age2: number = '12';

let isLoggedIn: boolean;
isLoggedIn = true;
// isLoggedIn = 54;


let ninjas: string[];
// ninjas.push('grodan boll')
// error thrown because the array with explicit types
// of strings, is not initialized.

let turtles: string[] = [];
// with the extra '= []' after string[], 
// the array is now initalized as an empty array
// ready to work with array methods such as .push()


let mixed: (number|string)[] = [];
// using (type|type|type) lets me define what type of
// data will be accepted in this mixed array.
mixed.push(12);
mixed.push('hello');
// mixed.push(false);

// objects
let ninjaOne: object;
ninjaOne = {name: 'charlie', age: 90}

let ninjaTwo: {
	name: string,
	age: number,
	beltColor: string
}

ninjaTwo = {name: 'Johan', age: 24, beltColor: 'purple'}
console.log(ninjaTwo)