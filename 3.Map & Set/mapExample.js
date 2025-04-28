const one = new Map();
one.set("name", "ramit");
one.set("age", 22);
one.set("location", "kathmandu");
console.log(one.get("name"));
console.log(one.get("age"));
console.log(one.get("location"));
console.log(one.has("name")); //true
console.log(one.delete("age"));
console.log(one.get("age")); //undefined
console.log(one.size); //2
console.log(one.clear());
console.log(one.size); //0
console.log(one.get("name")); //undefined
