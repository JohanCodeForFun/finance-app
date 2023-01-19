"use strict";
// dynamic (any) types
let age = 25;
age = true;
age = 'hello';
let mixed = [];
let fighter;
fighter = {
    name: 'Johan',
    age: 38,
    beltColor: 'bjj purplebelt',
    winRecord: { wins: 32, losses: 2 }
};
console.log(fighter);
console.log('testing tsconfig.json and global tsc -w watch.');
