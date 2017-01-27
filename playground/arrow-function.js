var square = (x) => {
  return x * x;
}
// If one line, remove braces
var square2 = (x) => x * x;
// If only 1 parameter, you cam ommit parenthesis
var square3 = x => x * x;

console.log(square(9));
console.log(square2(9));
console.log(square3(9));


var user = {
  name: 'Oscar',
  sayHi:  () => {
    console.log(`Hi. I'm  ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. ${this.name}`);
  }
}




user.sayHi();
user.sayHiAlt(1,2,3,4);
