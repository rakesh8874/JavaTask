// console.log("Hello World");

// let a = BigInt(567)+BigInt(3);

// console.log(typeof(a));
// let g;

// const item = {
//     'harry':true,
//     'subh':false,
//     'lovish':67,
//     'rohan':undefined
// }

// console.log(item['harry']);
// console.log("=====================================");
// let x = "Rakesh";
// let b = 6;
// console.log(typeof(x+b));
// const obj = {
//     "name":"Rakesh",
//     "age":25,
//     "section":'A'
// }

// obj['name'] = "Amit"

// console.log(obj);

// let age = 9;
// console.log(age>=10 && age<=20);

// let n = prompt("Provide Number to calculate Factorial");

// fact = 1;
// for(let i = 1; i<=n; i++){
//     fact *= i;
// }
// console.log(fact);

// const marks = {
//     anup:34,
//     amit:89,
//     amish:77,
//     abish:43
// }

// for(let i in marks)
// console.log("marks of "+i+" is "+marks[i]);


// let n = 1234;
// let r = 0;
// let sum = 0;

// while(n>0){
//   r = n%10;
//   sum = (sum*10)+r;
//   n = parseInt(n/10);
// }
// console.log("Reverse Number is "+sum);

// let str = "anuj";

// let reverse = "";

// for(let a of str){
//  reverse = a.concat(reverse);
// }

// console.log(reverse);

// const fun = (x)=>{
//     let r = 0;
//     for(let i = 2; i<x/2; i++){
//         if(x%i==0){
//             r++;
//             break;
//         }
//     }
//     if(r == 0){
//         console.log("Prime Number");
//     }else{
//         console.log("Not a Prime Number");
//     }
// }

// const sortArr = (x)=>{
//     let temp = 0;
//      for(let i = 0; i<x.length; i++){
//         for(let j = 0; j<x.length-1; j++){
//             if(x[j+1]<x[j]){
//               temp = x[j+1];
//               x[j+1] = x[j];
//               x[j] = temp;
//             }
//         }
//      }
//      console.log(x);
// }

// const print = (obj)=>{
//     for(let i = 0; i<Object.keys(obj).length; i++){
//         console.log("Marks of "+Object.keys(obj)[i]+" is "+obj[Object.keys(obj)[i]]);
//     }
// }

// // let abc = {
// //     rani:67,
// //     ravi:76,
// //     raj:10
// // }

// // print(abc);

// const res = ()=>{
//           let num = 5;
//           let res = 0;
//           while(res != num){
//             res = prompt("Enter Number");
//           }
//           console.log("Entered Number is "+res);
// }
// res();

//let c = 'ban\tana';
//console.log(c);

// let str = "Apple       ";
// let str1 = "Red"
// console.log(str.trim());

// let str = 'ram is a good booy at his school';
// let word = 'goodes';
// console.log(`The word "${str}" ${str.startsWith('r') ? 'is':'is not'} in the sentance`);

// let arr = [1, 3, 5, 7, 9];
// let z = arr.join(" or ");

// console.log(z);

// let i = 1;

// let arr1 = arr.toString();

// console.log(arr1);

// console.log("Array Before Removing "+arr);

// arr.pop();

// console.log("Array After Removing "+arr);


// console.log("Array Before Removing  first Element "+arr);
// arr.shift();
// console.log("Array After Removing first Elemenet "+arr);

// console.log("Array Before Adding Element at last "+arr);
// arr.push(78);
// console.log("Array After Adding Element at last "+arr);

// console.log("Array Before Adding Element at first "+arr);
// arr.unshift(78);
// console.log("Array After Adding Element at first "+arr);

// while(i==1){
//      i = prompt("Choose 1 to continue 0 to stop...");
//     arr = prompt("Enter Element into Array");
// }

// let arr1 = [12, 14, 11, 15, 16, 18];
// let arr2 = [1, 2, 3, 4, 5, 6];
// let arr4 = [3, 4, 5, 6, 7, 8, 9];
// console.log(arr1.length);
// delete arr1[0];
// console.log(arr1.length);

// let arr3 = arr1.concat(arr2, arr4);

// console.log(arr3);


// let arr1 = [22, 14, 31, 15, 16, 18];

// let compare = (a, b)=>{
//     return a-b;
// }

// arr1.sort(compare);

// console.log(arr1.reverse());

// let arr1 = [22, 14, 31, 15, 16, 18];

// arr1.splice(2, 3, 1021, 1022, 1023);

// let arr2 = arr1.slice(4);

// console.log(arr2);

//console.log(arr1);

// let arr1 = [2, 14, 31, 15, 16, 18];

// arr1.forEach((element)=>{
//     console.log(element*element);
// })

// let str = "Rajeev Malhotra";

// let arr = Array.from(str);
// console.log(arr);

// for(let i in arr1){
//     console.log("Value of Defiened Array "+i+" is "+arr1[i]);
// }


// let arr1 = [2, 14, 31, 15, 16, 18];

// arr1.map((value, index, arr3)=>{
//     console.log(value, index, arr3);
//    // console.log(num*2);
// })

// let arr2 = arr1.filter((num)=>{
//     if(num%2==0){
//         return num;
//     }
// })

// let val = 0;

// let count = arr1.reduce((x, y)=>{
//   return x+y;
// }, val)

// console.log(count);


// let arr = [];

// let a;

// do{
//   a = prompt("Enter Number");
//   a = Number.parseInt(a);
//   arr.push(a);
// }while(a != 0);

// console.log(arr);

// let arr = [10, 20, 23, 45, 60];

// let arr1 = arr.filter((num)=>{
//     return num%10 == 0;
// })

// console.log(arr1);

// let arr = [2, 3, 4, 5, 6];

// let squre = arr.map((x)=>{
//     return x*x;
// })

// console.log(squre);

// let arr = [2, 3, 4, 5, 6];

// let arr2 = arr.reduce((x, y)=>{
//     return x*y;
// })

// console.log(arr2);

//  let num = Math.floor(Math.random()*100);

//  let res;

//  let arr = [];

//  do{
//     res = prompt("Enter The Number");
//     res = Number.parseInt(res);
//     arr.push(res);
//     if(num>res){
//         alert("Random Number is Greator Than entered Number");
//     }else if(num<res){
//         alert("Random Number is less Than entered Number");
//     }
//  }while(res != num);

// console.log("Attemp You Have Taken To guess the number "+arr.length);
// console.log("Total Number You Have Entered "+arr);
// console.log(num +" and "+ res);

console.assert(7>5)

const obj = {
    name:"Rakesh",
    age:29,
    Designation:"SE"
}

let v = document.body

console.info(v.firstChild)


 
 
 


