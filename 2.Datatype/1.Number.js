let num1 = 12;
let num2 = 12.22;
let num3 = "one";
console.log(num1); //output: 12 int
console.log(num2); //output: 12.22 float
console.log(num3); //output: one
console.log(Number(num3)); //output: NaN
const one = new Number();
console.log(typeof one); //object
const two = new Number(12);
console.log(two); //12
console.log(typeof two); //object

//Mathematics with Number
console.log(Math.min(12, 13, 14)); //output: 12
console.log(Math.max(12, 13, 14)); //output: 14
console.log(Math.PI.toFixed(2)); //output: 3.14
console.log(Math.random() * 10 + 1);
console.log(Math.round(12.64)); //output: 13
console.log(Math.trunc(12.64)); //output: 12
console.log(Math.sqrt(4)); //2
console.log(Math.abs(-12)); //output: 12

//______________________________________________
let billion = 1e9;
console.log(billion); //output: 1000000000
//-----------------------------------------
//Binary, Hex and Octal Number
const binone = 0b1010;
console.log(binone); //10
const octone = 0o233;
console.log(octone); //155
const hexone = 0xff;
console.log(hexone); //255

//number convert to string
const numone = 255;
console.log(numone.toString(16)); //ff
console.log(numone.toString(2)); //11111111
