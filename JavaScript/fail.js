




// fetch('https://jsonplaceholder.typicode.com/users')

// 	.then(value => value.json())

// 	.then(value => {

// 	});

//



// setTimeout(function () {

// 	console.log('dial number....');

// 	setTimeout(function () {

// 		console.log('calling.....');

// 		setTimeout(function () {

// 			console.log('answer');

// 		}, 2000);

// 	}, 2000);

// }, 2000);





// let promise = new Promise(function (resolve) {

// 	console.log('start');

// 	setTimeout(function () {

// 		let number = '067123465789';

// 		console.log('dial number...' + number);

// 		resolve(number);

// 	}, 1000);

//

// });

//

// promise.then(value => {

// 	return new Promise(resolve => {

// 		setTimeout(function () {

// 			console.log('calling.....' + value);

// 			value = '+380671231212';

// 			resolve(value);

// 		}, 2000);

// 	});

// }).then(value => {

// 	return new Promise(resolve => {

// 		setTimeout(function () {

// 			console.log('answer ...' + value);

// 			resolve();

// 		}, 2000);

// 	});

// });





// let call = function (timeout) {

// 	return new Promise(resolve => {

// 		setTimeout(function () {

// 			console.log('calling...', timeout);

// 			resolve('done');

// 		}, timeout);

// 	});

// };

//

// call(1000).then(function (value) {

// 	console.log(value);

// });

//

// let all = Promise.all([call(2000), call(4000)]);

// all.then(value => {

// 	console.log(value);

// });





// function fetchData(endpoint) {
//
//     return fetch('https://jsonplaceholder.typicode.com/' + endpoint)
//
//         .then(value => value.json());
//
// }
//
//
//
// Promise.all([fetchData('users'), fetchData('posts')]).then(value => console.log(value));
//
//
//
//
//
// function calculate(a, b) {
//
//
//
//     return a / b;
//
// }
//
//
//
// let a = 10;
//
// let b = 0;
//
// let calcPromise = new Promise((res, rej) => {
//
//     console.log('send to server ');
//
//     setTimeout(function () {
//
//         if (b != 0) {
//
//             let result = calculate(a, b);
//
//             res(result);
//
//
//
//         } else {
//
//             rej('achtung!!!');
//
//         }
//
//     }, 1000);
//
// });
//
//
//
// calcPromise.then(value => console.log(value)).catch(reason => console.log(reason));