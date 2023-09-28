let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise 1");
    }, 1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise 2");
    }, 2000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(new Error("Some Error !"));
    }, 3000)
})

let all_promise = Promise.allSettled([p1, p2, p3]);
all_promise.then((value)=>{
    console.log(value);
})