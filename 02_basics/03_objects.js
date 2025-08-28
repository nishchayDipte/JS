
const mySym = Symbol("key1") /* t is used to create unique and immutable identifiers.
Even if two symbols have the same description, they are always different. 
to assigne it we use [] eg [mySym] : "mykey1" */

const jsuser = {
    name : "nishcahy",
    [mySym] : "mykey1",
    num : 26,
    Email : "ndipteofficial@google.com",
    logInDays : ["mon","tues","fri","sat"],
}

console.log(jsuser.Email);
 // it will not allow to change any data of obj
// Object.freeze(jsuser)
jsuser.Email = "nmd@outlook.com";

jsuser.greeting = function(){
    console.log("Hello JS user"); // asigne greeing key a function 
}
console.log(jsuser.greeting())

jsuser.greeting2 = function (){
    console.log(`hello good morning ${jsuser.name}`);
}
console.log(jsuser[mySym])

console.log(jsuser.greeting2())