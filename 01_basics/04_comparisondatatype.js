console.log("2">1);// true
// comparison and equality operator in js work differently
// incomparion operator it convert null to 0 hence
// null >= 0 --> give true

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===  strict comparion it also cheack type 

console.log("2" === 2);