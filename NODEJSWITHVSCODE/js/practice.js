
// let num = 1214;
// let res = num;
// let sum = 0;
// while(num>0){
//     let r = num%10;
//     sum = sum*10+r;
//     num = parseInt(num/10);
// }
// if(sum==res)
// console.log("Palindrome");
// else
// console.log("Not Palindrome");

// var isPalindrome = function(x){
//     return x<0?false:x === +x.toString().split("").reverse().join("");
// }

// console.log(isPalindrome(121));


// var feb = function(x){
//     let arr = [0, 1];
//     for(let i = 2; i<=x; i++){
//         arr.push(arr[i-1]+arr[i-2]);
//     }
//     console.log(arr);
// }

// var febFun = function(a){
//     if(a<=1) return a;
//     return febFun(a-1)+febFun(a-2);
// }

// console.log(febFun(6));

// var anagram = function(s, t){
//     s = s.split("").sort().join("");
//     t = t.split("").sort().join("");
//     if(s===t)
//     return true;
//     else
//     return false;
// }



// var ang = function(s, t){
//     if(s.length != t.length) return false;
//     obj1 = {};
//     obj2 = {};
//    for(let i = 0; i<s.length; i++){
//       obj1[s[i]] = (obj1[s[i]] || 0) +1;
//       obj2[t[i]] = (obj2[t[i]] || 0) +1; 
//    }
//    for (const key in obj1) {
//        if(obj1[key] !== obj2[key]) return false;
//     }

//     return true;
        
// }
  

// console.log(ang("cata","tac"));

// console.log(1+"2"+"2");
// console.log(1+ +"2" + "2");
// console.log(1+ -"1" + "2");
// console.log(+"1" + "1" + "2");
// console.log("A" - "B" + "2");
// console.log("A" - "B" + 2);

// let fetchBtn = document.getElementById('fetchBtn');
// fetchBtn.addEventListener('click', function(){

//     let data =  fetch('https://jsonplaceholder.typicode.com/todos/1');
//     data.then(val=>{
//         return val.json();
//     }).then(val1=>{
//         console.log(val1);
//     })

//     const xhr = new XMLHttpRequest();
    
//     xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1', true);
    
//      xhr.onprogress = function(){
//         console.log("Your Data is Processing");
//      }

//      xhr.onload = function(){
//         if(this.status === 200){
//                let obj = JSON.parse(this.responseText);
//                 console.log(obj);
//                 let str = `<li>${obj.title}</li>`; 
//                 document.getElementById('record').innerHTML =  str;
//         }else{
//             document.getElementById('record').innerHTML = "Failed To Make Request";
//             console.log("Some Error Occured");
//         }
        
//      }

//     xhr.send();
// })



// for(let i = 0; i<5; i++){
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button '+i));
//     btn.addEventListener('click', function(){
//         console.log(i);
//     });
//     document.body.appendChild(btn);
// }

/* 

*/

// let date = new Date();
// let day = date.getDate();
// if(day<10){
//     day = "0"+day;
// }
// let month = date.getMonth()+1;

// if(month<10){
//     month = "0"+month;
// }

// let year = date.getFullYear()-18;

// let fullDate = year+"-"+month+"-"+day;

// let username = document.forms['myForm']['username'];
// let dob = document.forms['myForm']['userdob'];
// dob.setAttribute('max', fullDate);

// function myFun(){
//     let username1 = document.forms['myForm']['username'].value;
//       if(username1.length<5){
//         setError("username1","length of name is too sort");
//         return false;
//       }
//       return false;
// }

// function setError(id, error){
//   let element  = document.getElementById(id);
//   element.getElementsByClassName('errorMsg')[0].innerHTML = error;
// }

let date = new Date();
let day = date.getDate();
if(day<10){
day = "0"+day;
}

let month = date.getMonth()+1;
if(month<10){
  month = "0"+month;
}
let year = date.getFullYear()-18;

let maxDate = year+"-"+month+"-"+day;

let dob = document.getElementById('dob');
let name = document.getElementById('name');

dob.setAttribute('max', maxDate);


function myFun(){
  if(name.value === ""){
    document.querySelector('.name-err-msg').innerHTML = "**Name Can't be blank";
    return false;
  }
  if(name.value.length<5){
    document.querySelector('.name-err-msg').innerHTML = "**Name Length Should be more than 5 char";
    return false;
  }
  if(dob.value === ""){
    document.querySelector('.dob-err-msg').innerHTML = "**Date of Birth can't be blank";
    return false;
  }
   document.getElementById('forName').innerHTML = name.value;
   document.getElementById('forDob').innerHTML = dob.value;
  return false;
}

