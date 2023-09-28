//using map  
//doesn't modify original array

let arr = [23, 14, 15, 16, 11];
let arr1 = arr.map((value, index, array)=>{
    console.log(value, index, array);
    return value+1;
})

console.log(arr);

//using filter
//doesn't modify original array

let arr2 = [10, 9, 8, 12, 11, 14];

let arr3 = arr2.filter((value)=>{
    return value>10;
})

console.log(arr3);

//user reduce
//doesn't modify original array

let arr4 = [12, 4, 5, 1];

let val = arr4.reduce((x, y)=>{
  return x+y;
})

console.log(val);
