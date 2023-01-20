// dynamic (any) types

let age: any = 25;

age = true;
age = 'hello';

let mixed: any[] = [];

let fighter: {
	name: string,
	age: number,
	beltColor: string,
	winRecord: {},
}

fighter = {
	name: 'Johan',
	age: 38,
	beltColor: 'bjj purplebelt',
	winRecord: {wins: 32, losses: 2}
}

console.log(fighter)

// type aliases
type stringOrNum = string | number;
type objWithName = { name: string, uid: stringOrNum };

const logDetails1 = (uid: string | number, item: string) => {
	console.log(`${item} has a uid of ${uid}`)
}
const logDetails2 = (uid: stringOrNum, item: string) => {
	console.log(`${item} has a uid of ${uid}`)
}

const greet1 = (user: {name: string, uid: string | number}) => {
	console.log(`${user.name} says hello`)
}
const greet2 = (user: objWithName) => {
	console.log(`${user.name} says hello`)
}