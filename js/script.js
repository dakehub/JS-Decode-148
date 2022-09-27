/*==== JS lessons =====*/


/* 01-lesson*/

// const num1 = Math.random() * 100;

// const num2 = Math.random() * 100;


// const sys1 = '*';
// const sys2 = '=';
// const total = num1 * num2;



// console.log(Math.round(num1), sys1, Math.round(num2), total)

// const test3 = Number(prompt('num1'))
// const test4 = Number(prompt('num2'))
// const test5 = Number(prompt('num3'))
// const sym1 = "+"
// const sym2 = "*"
// const sym3 = "="
// const total = test3 + test4 * test5

// console.log(test3, sym1, test4, sym2, test5, sym3, total)

/* 01-lesson HomeWork*/

// const num1 = prompt('Random number 1', Math.round(Math.random() * 100));
// const num2 = prompt('Random number 1', Math.round(Math.random() * 100));
// alert(num1 * num2);
//
// const word1 = 'Random';
// const word2 = 'Number';
// console.log(${word1} ${word2});


// function getRandom(min, max) {
// min = Math.ceil(min);
// max = Math.floor(max);
// return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// const randomNumber = prompt('Number Random', getRandom(5, 15));
// alert(randomNumber);


// const name = prompt('Введите имя');
// const surname = prompt('Введите фамилию');
// alert(Привет ${name} ${surname});



/*===========================================================*/
/* 02-lesson*/



// const uname="qwerty";
// const enter= prompt("enter uname: ");
// if (enter == uname){
// alert(`Welcome, ${uname}`);
// } else{
//     alert("entered wrong uname");
// }


// Bagjan Sagynbek, [09.08.2022 18:54]
// const uname = "qwerty"
// const pword = "qwe123"

// const entName = prompt('Enter Username: ')
// const entPword = prompt('Enter Password: ')

// console.log(uname === entName, pword === entPword);
// if(uname === entName && pword === entPword) {
//     console.log('Hi', entName)
// } else {
//     console.log('Not found');
// }


// Bagjan Sagynbek, [09.08.2022 18:58]
// && and
// || or

// const uname = "qwerty"
// const pword = "qwe123"

// const entName = prompt('Enter Username: ')
// const entPword = prompt('Enter Password: ')

// console.log(uname === entName, pword === entPword);
// if(uname === entName || pword === entPword) {
//     console.log('Hi', entName)
// } else {
//     console.log('Not found');
// }


// const randomNumber1 = Math.round(Math.random() * 100);
// const randomNumber2 = Math.round(Math.random() * 100);
// if (randomNumber1 > randomNumber2) {
// 	console.log(randomNumber1, 'randomNumber1');
// } else {
// 	console.log(randomNumber2, 'randomNumber2');
// }

//найти наибольшее из чисел 1,2,3
// const a = 1;
// const b = 2;
// const c = 3;
// if (a < b && c) {
// 	console.log(c)
// }



// if (a === 1) {
// 	console.log('first');
// } else if (a ===2) {
// 	console.log('second');
// } else if (a ===3) {
// 	console.log('third');
// } else {
// 	console.log('more 3')
// }

//Тернарные операторы
// const a = 30;
// const b = 20;

// a < b ? console.log(b) : console.log(a);



// const a = 10;
// const b = 20;
// const c = 30;

// if
// a < b && b < c
//   ? console.log(c, "c")
//   : // else if
//   a < c && c < b
//   ? console.log(b, "b")
//   : // else if
//   c < b && b < a
//   ? console.log(a, "a")
// else
//   : console.log("not one");



// const uname = "qwerty";
// const enter = prompt();
// uname == enter ? console.log("Welcome", uname) : console.log("entered wrong" + uname);

// const uname = "qwerty"
// const entuname = prompt()
// uname == entuname ? console.log("welcome", uname) : console.log("entered wrong uname");




/* 02-lesson HomeWork*/

// const num1 = 3;
// const num2 = 2;

// num1 < num2
// 	? console.log('3 больше 2')
// 	: console.log('ошибка')

/*===============================================*/


/*===============================================*/

/*
const login1 = 'dauren';
const login2 = 'DAUREN';
const entLog = prompt('Enter Login');
if (login1 == entLog) {
	alert('Welcome ' + login1);
} else if (login2 == entLog) {
		alert('Welcome ' + login2);
} else {
	alert('Login not found')
}
*/



/*=============================================================*/
/* 03-lesson*/

// const a = Number(prompt('num1: '))
// const b = Number(prompt('num2: '))
// const c = Number(prompt('num3: '))

// if(a <= b && b <= c || b <= a && a <= c){
//     console.log('c', c)
// } else {
//     console.log('haha');
// }


//Тернарные операторы
// (a <= b && b <= c) || (b <= a && a <= c){
//     console.log('c', c)
// } else {
//     console.log('haha');
// }

/*цикл*/
// const a = 10
// let b = 0

// while (a > b) {
// 	b = b + 1;
// 	console.log(b)
// }

// const a = 0
// let b = 10

// while (b > a) {
// 	console.log(b)
// 	b = b - 1
// }


/*==========================================*/

/*
const sName = prompt("Name: ");

switch (sName) {
  case "Denis":
	 console.log("Hello Denis");
	 break;
  case "Aryn":
	 console.log("Hello Aryn");
	 break;
  case "Daurenbek":
	 console.log("Hello Daurenbek");
	 break;
  default:
	 break;
}
*/

/* Четный цикл*/
// let a = 0
// const b = 12
// while(a<=b){
//     if(a % 2 == 0){
//         console.log(a)
//     }
//     a=a+1;
// }

/*
let a = 0
const b = 12
while(a<=b){
	 if(a % 2 == 1){
		  continue
	 }else{
		  console.log(a);
	 }
	 a=a+1;
}
*/

/*
let a = 0;
const b = 10;
while (a < b) {
  a = a + 1;
  if (a % 2 == 1) {
	 continue;
  }
  console.log(a);
}
*/

// for (let i = 0; i < 10, i--){
// 	console.log(i)
// }

/*
const a = 'decode';
for (let i = 0; i < a.length; i++){
	console.log(a[i]);
}
*/


/*
const num1 = Number(prompt("num1: "))
const sym1 = prompt("sym1: ")
const num2 = Number(prompt("num2: "))

if (sym1 === "+") {
	console.log(num1 + num2);
} else if (sym1 === "-") {
	console.log(num1 - num2);
} else if (sym1 === "*") {
	console.log(num1 * num2);
}
else if (sym1 === "/") {
	console.log(num1 - num2);
} else {
	console.log('Error')
}
*/

/*=====================================================/

/*homework lesson 3*/
/*Не смог

const num1 = Number(prompt('number1'));
const sys = prompt('');
const num2 = Number(prompt('number2'));


let result;

switch (sys) {
	case '+':
		result = num1 + num2;
		
		break;
	case '-':
		result = num1 - num2;
		
		break;
	case '*':
		result = num1 * num2;
		
		break;
	case '/':
		result = num1 / num2;
		
		break;
}

while (result > 0) {
	console.log(result);
	result++;
}
*/


/*============================================*/
/* 11.08.2022*/

/* Домашка 2
const num1 = Number(prompt());
const num2 = Number(prompt());
const num3 = Number(prompt());

if (num1 > num2 && num1 > num3) {
	alert(num1);
} else if (num1 < num2 && num2 > num3) {
	alert(num2);
} else if (num1 < num3 && num2 < num3) {
	alert(num3);
}
*/


/* Не доделал
const randomNum = Number(prompt());

const numRandom = Math.round(Math.random() * 3);

let times = (randomNum == numRandom)
	

for (times = 0; times < 3; times++){
	let times = (randomNum == numRandom)
	?
	alert('Поздравляю ты угадал')
	:
	alert('У тебя еще 3 попытки');
}
*/



/* сделал
const word = prompt("Введите слово");
for (let i of word) {
	console.log(i)
}
*/

/*сделал Домашка 5
for (i = 50; i < 101; i++){
	console.log(i)
}
*/



/*  Не смог reverse
let n1 = prompt('Введите целое число: ');
let n_list = Array(n1);
n_list.reverse();

console.log(n_list)

*/


// for (let i = 0; i < mass.length; i++) {
// 	;
// 	console.log(mass[i]);
// }
/*
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
let i = 0;
while (i < a.length) {
	if (a[i] % 2 == 0) {
		console.log(a[i]);
	}
	i = i + 1;
}
*/
/*
for (let i = 0; i < a.length; i++){
	if (a[i] % 2 == 0) {
		console.log(a[i]);
	}
}
*/
/*
const word =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const data = word.split(". ")

const sData = []
for(let i in data){
	 let output = data[i].split(" ")
	 sData.push(output)
}

console.log(sData.flat())

*/
/*
const asia = ["Japan", "Korea", "China"];

const europe = ["Austria", "Ireland"];

const africa = ["Egypt", "SA", "Cameroon", "Gabon"];

const america = ["USA", "Canada", "Brazil"];


while (true) {
	console.log('');
	console.log('Commands: add, display, delete, search, exit');
	const command = prompt('Enter command:');

	if (command === 'add') {
		console.log('continents: asia, europe, africa, america');
		const continent = prompt('Enter continent');
		if (continent === 'asia') {
			const addCountry = prompt('Enter country:');
			asia.push(addCountry);
			console.log(addCountry, 'added');
		} else if (continent === 'europe') {
			const addCountry = prompt('Enter country');
			europe.push(addCountry);
			console.log(addCountry, 'added');
		} else if (continent === 'africa') {
			const addCountry = prompt('Enter country');
			africa.push(addCountry);
			console.log(addCountry, 'added');
		} else if (continent = 'america') {
			const addCountry = prompt('Enter country');
			america.push(addCountry);
			console.log(addCountry, 'added');
		} else {
			console.log('wrong continent');
		}
	} else if (command === 'display') {
		console.log(asia);
		console.log(europe);
		console.log(africa);
		console.log(america);
	} else if (command === 'delete') {
		console.log('continents: asia, europe, africa, america');
		const continent = prompt('Enter continent:');

		if (continent === 'asia') {
			const delCountry = prompt('Enter country:');
			const id = asia.indexOf(delCountry);
			asia.splice(id, 1);
			console.log(delCountry, 'deleted');
		} else if (continent === "europe") {
			const delCountry = prompt("Enter country:");
			const id = europe.indexOf(delCountry);
			europe.splice(id, 1);
			console.log(delCountry, "deleted");
		} else if (continent === "africa") {
			const delCountry = prompt("Enter country:");
			const id = africa.indexOf(delCountry);
			africa.splice(id, 1);
			console.log(delCountry, "deleted");
		} else if (continent === "america") {
			const delCountry = prompt("Enter country:");
			const id = america.indexOf(delCountry);
			america.splice(id, 1);
			console.log(delCountry, "deleted");
		} else {
			console.log("wrong continent!");
		}
	} else if (command === 'exit') {
		console.log('BYE!');
		break;
	} else if (command === 'search') {
		console.log('search');
		let found = '';
		let fContinent = '';
		const search = prompt('Enter country');
		for (let i = 0; i < asia.length; i++){
			if (search === asia[i]) {
				found = asia[i];
				fContinent = 'asia';
			}
		}
		for (i = 0; i < europe.length; i++){
			if (search === europe[i]) {
				found = europe[i];
				fContinent = 'europe';
			}
		}
		for (i = 0; i < africa.length; i++){
			if (search === africa[i]) {
				found = africa[i];
				fContinent = 'africa';
			}
		}
		for (i = 0; i < america.length; i++){
			if (search === america[i]) {
				found = america[i];
				fContinent = 'america';
			}
		}
		if (found.length !== 0) {
			console.log(found, 'exist in', fContinent);
		} else {
			console.log('empty');
		}
	} else {
		console.log('wrong command');
	}
}
*/



// 01.09.2022



// 06.09.2022
// let counter = (function () {
// 	let current = 1;
// 	return function () {
// 		while (current < 10)
// 		current++;
// 		return current
// 	}
// })();
// console.log(counter());

// function makeWorker() {
// 	let name = 'Pete';

// 	return function () {
// 		console.log(name);

// 	}
// }
// let name = 'John';
// let work = makeWorker();

// work()


//13.09.2022

//20.09.2022







// ДОМАШКА 2
// Массив с 3 фруктами, при клике на фрукт он меняет цвет на цвет фрукта

// let arr = ['apple', 'banana', 'orange'];

// let fruits = document.querySelector('.arrFruits')


// for (i = 0; i < arr.length; i++) {
// 	let numFruits = document.createElement('p')
// 	numFruits.innerHTML = arr[i]
// 	numFruits.onclick = () => {
// if (numFruits.style.backgroundColor == 'green') {

// 	numFruits.style.backgroundColor = 'white'
// }
// else if (numFruits.innerHTML == 'banana') {
// 	numFruits.style.backgroundColor = 'yellow'
// }
// else if (numFruits.innerHTML == 'orange') {
// 	numFruits.style.backgroundColor = 'orange'
// }


// 		if (numFruits.innerHTML == 'apple') {
// 			if (numFruits.style.backgroundColor == 'green') {

// 				numFruits.style.backgroundColor = 'white'
// 			}
// 			else { numFruits.style.backgroundColor = 'green' }
// 		}
// 		else if (numFruits.innerHTML == 'banana') {
// 			if (numFruits.style.backgroundColor == 'yellow') {

// 				numFruits.style.backgroundColor = 'white'
// 			}
// 			else { numFruits.style.backgroundColor = 'yellow' }
// 		}
// 		else if (numFruits.innerHTML == 'orange') {
// 			if (numFruits.style.backgroundColor == 'orange') {

// 				numFruits.style.backgroundColor = 'white'
// 			}
// 			else { numFruits.style.backgroundColor = 'orange' }
// 		}

// 		console.log(numFruits);
// 	}
// 	fruits.append(numFruits)
// }



// ДОМАШКА 3
//task 3
// let btn = document.querySelector('.btn');

// btn.onclick = function () {
// 	document.querySelector('.str').innerHTML = 'Bonjour World';
// }




// =============================================================================






// 22.09.2022

// ДОМАШКА 1
// Сделать считалку кликов, то есть в html будет сумма сколько раз мы кликнули

// let c = document.querySelector('.click');
// let r = document.querySelector('.reset');
// let out = document.querySelector('.out-1');

// click = 0;
// c.onclick = () => {
// 	out.innerHTML = click++;
// }

// r.onclick = () => {
// 	out.innerHTML = click = 0;
// }






// ДОМАШКА 2
// Калькулятор, с кнопками и вводом чисел через html js, вывод суммы тоже в html

var op;
function func() {
	var result;
	var num1 = Number(document.getElementById("num1").value);
	var num2 = Number(document.getElementById("num2").value);
	switch (op) {
		case '+':
			result = num1 + num2;
			break;
		case '-':
			result = num1 - num2;
			break;
		case '*':
			result = num1 * num2;
			break;
		case '/':
			if (num2) {
				result = num1 / num2;
			} else {
				result = 'бесконечность';
			}
			break;
		default:
			result = 'выберите операцию';
	}

	document.getElementById("result").innerHTML = result;
}

// ================================================================









