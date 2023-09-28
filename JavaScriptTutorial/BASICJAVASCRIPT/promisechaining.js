// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Resolved Promise");
//         resolve(12);
//     }, 5000)
// })

// p1.then((value) => {
//     console.log("Promise Resolved");
//     setTimeout(() => {
//         let p2 = new Promise((resolve, reject) => {
//             console.log("Another Promise Resolved");
//             resolve("Promise 2")
//         }, 5000)
//         return p2;
//     }) 
// }).then((value) => {
//     console.log("Ano ano promise");
//     return 10;
// }).then((value) => {
//     console.log("Finally Done " + value);
// })


const loadScript = (src) =>{
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);
        script.onload = ()=>{
              resolve("Script Has Been Loaded Sir");
        }
        script.onerror=()=>{
            reject(0);
        }
    })
}
let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js");

p1.then((value)=>{
   console.log(value);
   return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap5.bundle.min.js");
}).then((val)=>{
    console.log("Second Script is Ready")
}).catch((e)=>{
    console.log(e);
})