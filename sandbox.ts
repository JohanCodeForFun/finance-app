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