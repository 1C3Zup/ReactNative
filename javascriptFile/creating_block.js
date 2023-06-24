let a = 1;
console.log("Top level");
console.log(" a = " + a);

//create new block
{
  let b = 2;
  console.log("Inside block");
  console.log("a = " + a);
  console.log("b = " + b);
}
