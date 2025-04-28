function countdown(n) {
  if (n <= 0) {
    return;
  }
  console.log(n);
  countdown(n - 1); //recursive call
}
countdown(6);

//factorial number
function myfac(n) {
  if (n <= 1) {
    return 1;
  }
  return n * myfac(n - 1);
}
console.log(myfac(5)); //120
