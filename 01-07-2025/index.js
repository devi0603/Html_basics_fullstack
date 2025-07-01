//console.log("Hello World");
//function sayHello(){
  //  console.log("Hello from sayHello function");
//}
//sayHello();
//console.log("This is a simple JavaScript program");

// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("Hello World");
// },5000);
// console.log("three");
// console.log("four");

//a callback is a function that is passed as an argument to another function and is excuted after the completion of that function.
// callback function example
// function sum(a,b){
//     console.log(a+b);
// }function calculator(a,b,ds){
//     ds(a,b);
// }
// calculator(5,10,sum);
// calculator(5,10,(a,b)=>{
//     console.log(a+b);
// });

// console.log("one");
// console.log("two");
// const hello=()=>{
//     console.log ("Hello World");
// }
// setTimeout(hello,5000);
// console.log("three");
// console.log("four");

//nested for loops example
// for(let i=0;i<5;i++){
//     let str="";
//     for(let j=0;j<5;j++)
//     {
//         str+=j;
//     }
//     console.log(i,str);
// }

// function getData(dataid){
//     setTimeout(()=>{
//         console.log("Fetching data for id:",dataid);
//     },5000);
// }
// getData(1);
// getData(2);
// getData(3);
// function getData(dataid, getnextdata) {
//   setTimeout(() => {
//       console.log("Fetching data for id:", dataid);
//       if (getnextdata) {
//           getnextdata();
//          }},5000);
// }
// getData(1,()=>{
//     console.log("getting data 2.....")
//     getData(2,()=>{
//         console.log("getting data 3.....")
//         getData(3);
//       });
// });

//callbackhell  nested call back stacked below one anotherforming a pyramid structure pyramid doom
//  to over come this we will use promises
//  promise for eventually completion of an operation
//  promise is an object that represents the eventual completion or failure of an asynchronous operation and its
//  resulting value. It allows you to write asynchronous code in a more manageable way, avoiding callback hell.

//promise syntax
// const myPromise = new Promise((resolve, reject) => {..})
// resolve is called when the asynchronous operation is successful
// reject is called when the asynchronous operation fails

// const myPromise=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     const success=false;
//     if (success){
//       resolve("Data fetched successfully");
//     }else{
//       reject("Enter fetching data");
//     }
//   },2000);
// });
// myPromise
// .then((data)=>{
//   console.log("Promise resloved with data:",data);
// })
// .catch((error)=>{
//   console.error("Promise rejected with error:",error);
// });

//Using the Promise
//the then() method is called when the promise is resolved successfully
//The catch() method is called when the promise is rejected with an error
//The finally() method is called when thye promise is settled,regared of whether it was resloved or rejected

// let promise = new Promise((resolve, reject) => {
//   console.log("i am a promise");
//   if (1 < 0) {
//     resolve(123);
//   } else {
//     reject("Something went wrong");
//   }
// });

//promise states
// 1. Pending: Initial state, neither fulfilled nor rejected
// 2. Fulfilled: The operation completed successfully
// 3. Rejected: The operation failed
 
function getData(dataid){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("Fetching data for id:",dataid);
      resolve("success");
    },2000);
  });
}
let result=getData(123);
result;
//chaining multiple data fetches
getData(101)
 .then(result=>{
  console.log("First fetch:",result);
  return getData(102);
 })
 .then(result=>{
  console.log("Second fetch:",result);
  return getData(103);
 })
.catch(err => {
        console.error("Error occurred:", err);
 });
