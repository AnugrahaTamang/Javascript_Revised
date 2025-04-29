const one = {
  name: "ramit",
  age: 22,
};
const two = {
  name: "vandai",
};
two.__proto__ = one; //sets one.[[prototype]] = one

console.log(one.__proto__); //output: [Object: null prototype] {}
console.log(two.__proto__); //output: { name: 'ramit', age: 22 }
console.log(two.__proto__.name); //ramit
