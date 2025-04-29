class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getfullName() {
    console.log(`My name is ${this.name}. My age is ${this.age}`);
  }
}
const one = new Student("ramit", 22);
console.log(one);
one.getfullName(); //output: My name is ramit. My age is 22
console.log(typeof Student); //typeof: function

//Class Expression
let User = class {
  sayHi() {
    console.log("Hello");
  }
};
const a = new User();
a.sayHi(); //Hello

//Similar to above class expression
let Person = class Myperson {
  sayHi() {
    console.log("Hello I love Nepal.");
  }
};
const b = new Person();
b.sayHi(); //output: Hello I love Nepal
