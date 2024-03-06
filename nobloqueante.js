'use strict'

setTimeOut(function() {
	console.log('Tarea 1');
}, 3000);

setTimeOut(function() {
	console.log('Tarea 2');
}, 20000);

setTimeOut(function() {
	console.log('Tarea 3');
}, 10000);

setTimeOut(function() {
	console.log('Tarea 4');
}, 2000);

console.log('Tarea 5');
console.log(process.uptime())
console.log('Fin programa');