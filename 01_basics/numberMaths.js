const  score = 400;// --> this premitive number
console.log(score);
const balance = new Number(100)
/* number is number object created using 
number constructor 
It wraps the primitive number inside an object, giving access to many extra 
properties & methods (like .toFixed(), .toString(), 
.toLocaleString(), etc.).*/
console.log(balance);
console.log(typeof(balance.toString()));



// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // it gives always value betn 0and 1
console.log((Math.random()*10) + 1);// here we ad 1 so min vale 1 we can get
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
// to get value between range 10 to 20 and floor give floor value
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
