let myDate = new Date();
// console.log(myDate)//2025-08-28T10:00:52.774Z
// console.log(myDate.toString())//Thu Aug 28 2025 10:00:52 GMT+0000 (Coordinated Universal Time
// console.log(myDate.toDateString())//Thu Aug 28 2025
// console.log(myDate.toLocaleString())//8/28/2025, 10:00:52 AM
console.log(typeof myDate)//object type
let  myNewDate = new Date(2025,0,29)//month intialize by 0
console.log(myNewDate.toLocaleString());
let  myCreatedinak = new Date("2025-02-25")//yy-mm-dd format
console.log(myCreatedinak.toLocaleString())

//to  know  timestams
let mytimestamps =Date.now() //it give now date 
console.log(mytimestamps)//  it  givetime from 1970 in mlisecon 
console.log(myCreatedinak.getTime())
// fromanove  we can comapre  different times 
//toconvert milisecond to sec
console.log(Math.floor(Date.now()/1000) + " value is in sec")

let newdate1 = new Date();
console.log(newdate1.getMonth()+  1)//as months start from 0  
console.log(newdate1.getDay())

newdate1.toLocaleString('default' ,{
    weekday:"short",
    
})