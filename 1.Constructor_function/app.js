// Constructor function is a regular function. There are two conventions though:
//1. They are named with capital letter first.
//2. They should be executed only with new operators.
function Myname(name) {
  this.name = name;
}
const one = new Myname("anugraha tamang");
console.log(one.name);
const two = new Myname("ramit tamang");
console.log(two.name);
