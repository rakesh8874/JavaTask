const arr = [6, 5, 9, 11];

Array.prototype.myMap = function (cb){
      let temp = [];
      for(let i = 0; i<this.length; i++){
            temp.push(cb(this[i], i, this));
      }
       return temp;
}

Array.prototype.myFilter = function(cb){
      let temp = [];
      for(let i = 0; i<this.length; i++){
           if(cb(this[i], i, this)) temp.push(this[i]); 
      }
      return temp;
}

 const getVal = arr.myFilter((el, i, ar)=>{
      return el>5;
 })


 let mine = ['A','B','C','D'];


 for(var i = 0; i<mine.length; i++){
      setTimeout(()=>{
          console.log(mine[i]);
      }, 1000);
 }





 Array.prototype.myReduce = function(cb, intialValue){
      var acc = intialValue;
      for(let i = 0; i<this.length; i++){
            acc = acc?cb(this[i], acc, i, this) : this[i];
      }
      return acc;
 }

 let res = arr.myReduce((acc, curr)=>{
      return acc+curr;
 })

let student = [
      {"name":"vimal","rollNumber":35, "marks":56, "gender":"boy"},
      {"name":"pan parag","rollNumber":38, "marks":65, "gender":"boy"},
      {"name":"gomati thakur", "rollNumber":45, "marks":70,"gender":"girl"}
];


let val = student.reduce((acc, i)=>{
          return acc+(i.gender=='boy');
      }, 0)


console.log(val);

let re = student.map((val)=>{
      if(val < 60){
            val.marks += 20;
      }
      return val;
}).filter((val)=> val.marks > 60).reduce((acc, curr) => acc+curr.marks, 0);

let rand = [1, 3, 4, 5];

rand.unshift(15);

let str = "Rakesh Tiwari";

function manipulateStr(st){
      st = st.split("_");
      for(let i = 0; i<st.length; i++){
            st[i] = st[i].charAt(0).toUpperCase() + st[i].slice(1);
      }
      console.log(st.join(" "));
}

function manipulateStr(st){
  st = st.toLowerCase().replaceAll(" ","_");
  console.log(st);
}

function countOcc(arr){
      let obj = {};
      for(let i of arr){
            obj[i] = obj[i]?obj[i]+1:1;
      }
      console.log(obj);
}

let ar1 = [1, 2, 1, 3, 2, 4, 5, 4];



 