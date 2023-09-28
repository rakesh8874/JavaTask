let promise = new Promise((resolve, reject) => {
    alert("Hello");
    resolve(43);
})

console.log(promise);

let p1 = new Promise((resolve, reject)=>{
    console.log("Promise Is Pending")
    setTimeout(()=>{
        alert("Promise Fullfilled");
        resolve(true);
    }, 5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise Is Pending")
    setTimeout(()=>{
        alert("Promise Rejected")
        reject(new Error("Some Error Occure"));
    }, 5000)
})

p1.then((value)=>{
    console.log(value);
})

p2.then((value)=>{
    console.log(value);
}, (error)=>{
    console.log(error);
})