//  array

const myArray = [2,3,3,8,3,true,"nishchay",2.33]//we can give multiple data type
/*JavaScript arrays are resizable and can contain a mix of different
JavaScript array-copy operations create shallow copies
 let → you can modify contents and reassign the array.
 const → you can modify contents but cannot reassign the array.
 const means the reference to the array cannot change.
 But the contents (elements) can still be modified.
 With let, both array contents and the reference (whole array) can change.
 */

 const arr1 = new Array (3,3,32,4,1)//it  object  and here we can apply dffernt properties
 console.log(arr1.toString())

 //interviewe question
 const arrayNew = [0,1,2,3,4,5,6];
 
 const ma1 = arrayNew.slice(1,4);// this operation does not manupilate actual array
 console.log("this is scliced array",ma1);
 console.log("A original array after sclice",arrayNew)

 const ma2 = arrayNew.splice(1,4);//it does include 4th postion element and do changes in actual array
 console.log("this is spliced array ",ma2);
 console.log("B original array after spliced",arrayNew)
