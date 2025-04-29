function myfun() {
  this.name = "ramit";
  this.age = 22;
}

const one = new myfun();
console.log(one.name);

//__________________________________
let animal = {
  eats: true,
};

// create a new object with animal as a prototype
let rabbit = Object.create(animal); // same as {__proto__: animal}

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}
//_________________________________________
// let animal = {
//     eats: true
//   };

//   let rabbit = Object.create(animal, {
//     jumps: {
//       value: true
//     }
//   });

//   alert(rabbit.jumps); // true
