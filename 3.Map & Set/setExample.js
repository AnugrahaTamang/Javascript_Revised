const one = new Set();
one.add(12);
one.add("ramit");
one.add("13");
one.add("ram");
console.log(one);
console.log(one.has("ramit")); //true
console.log(one.delete("13"));
console.log(one.size); //3
console.log(one.clear());
console.log(one.size); //0
