//string literals
const one = "ramit";
console.log(one); //output: ramit
//constructor method
let two = new String();
two = "ram";
console.log(two); //otuput: ram
//Template literals || backticks
let three = `I love ${one}`;
console.log(three); //output: I love ramit

// String Method
console.log(one.concat(two)); //ramitram
console.log(three.slice(2, 5)); //lov
console.log(three.length); //output: 12
console.log(three.indexOf("l")); //2
console.log(three.split("").join("-")); //output: I- -l-o-v-e- -r-a-m-i-t
const four = three.split("");
for (let i = 0; i < four.length; i++) {
  console.log(`Value of four ${four[i]}`);
  if (four[i] === "i") {
    console.log(`Yes it is found. Index of i is ${four.indexOf("i")}`);
    break;
  }
}

const five = `I love Nepal`;
console.log(five.includes("love")); //true
