(() => {

// 1. Class vs Prototype
// class Person  {

// }

// const kitti = new Person();
// console.log(kitti)

// // prototype
// const name = 'kittipol'
// console.log(name);

// const arr = [];
// console.log(arr.__proto__)

// 3. Prototype chain
// const name = 'kittipol'
// console.log(name.__proto__)
// console.log(name.toLocaleString()) 

// 4. Extend prototype 
const name = 'kittipol'
function sayHello(val) {
    console.log(`Hello ${val}`)
}
String.prototype.sayHello = sayHello;
console.log(name.__proto__)
name.sayHello = sayHello;
})();
