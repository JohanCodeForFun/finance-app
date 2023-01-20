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
const logDetails1 = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const logDetails2 = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet1 = (user) => {
    console.log(`${user.name} says hello`);
};
const greet2 = (user) => {
    console.log(`${user.name} says hello`);
};
