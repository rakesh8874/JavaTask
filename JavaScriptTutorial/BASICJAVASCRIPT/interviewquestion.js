//Two driven jocks help fax my big quiz

function checkPanagram(str){
   const arr = new Array(26).fill(false);
   let index;

   for(let i = 0; i<str.length; i++){
    if(str[i] >= "A" && str[i] <= "Z")
        index = str.charCodeAt(i)-"A".charCodeAt(0);
        else if(str[i]>="a" && str[i]<="z")
        index = str.charCodeAt(i)-"a".charCodeAt(0);
        else continue;

        arr[index] = true;
   }
   for(let i = 0; i<=str.length; i++){
    if(arr[i] === false)
        return false;
    }
    return true;
   
}

const result = checkPanagram("Two driven jocks help fax my big quiz");

 function convert12To24(time12h){
  const [time, modifier] = time12h.split(" ");
  let  [hours, minute] = time12h.split(":");

  if(hours === '12') hours = "00";

  if(modifier === 'PM') hours = parseInt(hours)+12;

  return `${hours}:${minute}`;
 }

//  console.log(convert12To24("02:02 PM"));
//  console.log(convert12To24("04:06 PM"));
//  console.log(convert12To24("12:00 PM"))
//  console.log(convert12To24("12:00 AM"))


const user = {
    name:'Ayush',
    greet(){
        return `Hello ${this.name}!`;
    },
    farewell:()=>{
        return `GoodBye, ${this.name}!`; 
    }
}

// console.log(user.greet());
// console.log(user.farewell());

// const div = document.querySelector("div");
// const form = document.querySelector("form");
// const button = document.querySelector("button");

// div.addEventListener('click', function(e){
   
//    alert("div");
// },{
//     capture:true
// });

// form.addEventListener('click', function(e){
// e.stopPropagation()
// alert("form");
// },{
//     capture:true
// })

// button.addEventListener('click', function(e){
    
//     alert("button");
// },{
//     capture:true
// });

// function func(event){
//  //alert("current target = "+event.currentTarget.tagName);
// //  alert("current target = "+event.target.tagName);
// alert("current target = "+this.tagName);
// }

const obj = {name:"Abhilash"};


function result1(age, profession){
    console.log(`hello ${this.name} is in age ${age} and profession is ${profession}`);
}


// console.log(bindFunc(24, "Software Develor"));
// console.log(bindFunc(76, "You Tuber"))

// console.log(result1.bind(obj, 24))

function checkLogin(success, failed){
    let password = prompt("Enter Your Password");
    if(password==="abc") success();
    else
    failed();
}

let user1 = {
    name:"Rakesh Tiwari",
    loginSuccess(){
        console.log(`${this.name} is login`);
    },
    loginFaild(){
        console.log(`${this.name} is failed to login`);
    }
}

checkLogin(user1.loginSuccess.bind(user1), user1.loginFaild.bind(user1));
