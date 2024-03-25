"use strict";

console.log ("Hello World!");
console.log ("Hi!");

let x = 20;
let y = 58;
let z = 42;
let sum = x + y + z;
console.log (sum);

let amount_sec_in_min = 60; 
let amount_min_in_hour = 60;
let amount_hour_in_day = 24;
let amoun_day_in_year = 365;
let my_age = 20;
let myAgeInSeconds = my_age * amoun_day_in_year * amount_hour_in_day * amount_min_in_hour * amount_sec_in_min
console.log (myAgeInSeconds);

// Женя, можно использовать "_" нижнее подчёркивание в записи переменных или всёже лучше писать одним словом просто каждое слово с большой буквы, как тут "myAgeInSeconds"?

let count = 42;
let userName = "42";
let countAsString = count.toString();
console.log("Переменная count как строка: " + countAsString);
let userNameAsNumber = parseInt(userName);
console.log("Переменная username как число: " + userNameAsNumber);
let count_as_string = "" + count;
console.log("Переменная count как строка, 2 способ: " + count_as_string);
let user_name_as_number = +userName;
console.log("Переменная username как числоб 2 способ: " + user_name_as_number);

let a = 1;
let b = 2;
let c = "белых медведей";
let result = a.toString() + b.toString() + " " + c;
console.log(result);

let word1 = "доступ";
let word2 = "морпех";
let word3 = "наледь";
let word4 = "попрек";
let word5 = "рубило";
let allWords = word1 + word2 + word3 + word4 + word5;
let lengthWords = allWords.length;
console.log(lengthWords);

let name = "Ivan";
let age = 30;
let isAuth = true;
console.log(`Variable: ${name} has type: ${typeof name}`);
console.log(`Variable: ${age} has type: ${typeof age}`);
console.log(`Variable: ${isAuth} has type: ${typeof isAuth}`);

// const nameP = prompt("Введите ваше имя");
// const ageP = prompt("Введите ваш возраст");
// alert(`Вас зовут ${nameP}`);
// alert(`Вам ${ageP} лет`);

let aa = 4;
let bb = 3;
a = a + b; 
b = a - b; 
a = a - b; 

console.log(aa); 
console.log(bb);


let Word1 = "обернись";
let Word2 = "неужели";
let Word3 = "огурцы";
let Word4 = "липкие";
let Word5 = "?!";
const cipher = Word1[1] + Word2[1] + Word3[1] + Word4[1] + Word5[1];
console.log(cipher); 
