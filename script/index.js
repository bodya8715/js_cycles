// ===================================Задание №1=========================++
// for (let i = 25; i >= 0; i--) {
//     console.log(i);
// }

// let i = 25;

// while( i >= 0 ) {
// 	console.log(i);
// 	i--;
// }

// do {
// 	console.log(i);
//  	i--;
// } while (i >= 0)
// ===================================Задание №2=========================
// for (let i = 10; i <= 50; i++) {
// 	if( i % 5 === 0) {
// 		console.log(i);
// 	}
// }

// let i = 10;

// while(i <= 50) {
// 	if( i % 5 === 0) {
// 		console.log(i);
// 	}

//  	i++;
// }

// do {
//  	if( i % 5 === 0) {
//  		console.log(i);
//  	}

//  	i++;
// } while (i <= 50);
// ===================================Задание №3=========================
// let result = 0;
// let i = 1;

// for (let i = 1; i <= 100; i++) {
// 	result+=i;
// }


// while (i <= 100) {
// 	result+=i;
// 	i++;
// }

// do {
// 	result+=i;
//  	i++;
// } while (i <= 100);

// console.log(result);

// ===================================Задание №4=========================
// while(true) {
// 	const question = +prompt("(2 + 2 * 2)");
//     if ( isNaN(question) || question !== 6) {
//         alert("Неправильно");
//     }

// 	if(question === 6) {
// 		alert("Правильно");
// 		break;
// 	}
// }

// for (let i = 0; i >= 0; i++) {
// 	const question = +prompt("(2 + 2 * 2)");
//     if ( isNaN(question) || question !== 6) {
//         alert("Неправильно");
//     }

// 	if(question === 6) {
// 		alert("Правильно");
// 		break;
// 	}
// }


// do {
// 	const question = +prompt("(2 + 2 * 2)");
//     if ( isNaN(question) || question !== 6) {
//         alert("Неправильно");
//     }

// 	if(question === 6) {
// 		alert("Правильно");
// 		break;
// 	}

// } while (true);