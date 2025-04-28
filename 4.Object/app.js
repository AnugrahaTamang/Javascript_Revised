const one = { name: "ramit", age: 22 };
console.log(one);
const two = new Object();
two.name = "vandai";
two.age = 22;
console.log(two);
console.log(two["name"]); //vandai

// Object.assign
// const three = Object.assign({}, one, two);
// console.log(three);

// chaining
let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showstep: function () {
    console.log(this.step);
  },
};
ladder.up();
ladder.up();
ladder.showstep(); //output: 2
const sym = Symbol("gender");
const obj = {
  name: "ramit",
  age: 22,
  ["gender"]: "male",
};
console.log(obj);
console.log(obj.gender);
console.log(obj["gender"]);
