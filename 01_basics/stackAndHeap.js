//premative data --> all stores in stack 
// all non premetive data type --> stoore in heap

let num1 = 25;
let num2 = num1;
// now here num2 have a copy of num1 not memory loaction of num1

let obj1 = {
    color: "pink",
    age : 225,
}
obj2 = obj1; // now we are giving refrence of obj1 to 2
// it means if we do any changes obj2 it reflect to obj1

obj2.color = "blue";
console.log(obj1.color); //-> output is blue