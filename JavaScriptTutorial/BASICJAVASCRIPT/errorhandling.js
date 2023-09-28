// const loadScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = () => {
//             resolve(src +" done success");
//         }
//         document.head.append(script);
//     })
// }

// const res = async () => {
//     console.log(new Date().getUTCMilliseconds())
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js");
//     console.log(a);
//     console.log(new Date().getMilliseconds())

// }
// // a.then((value)=>{
// //     console.log(value);
// // })

// res();
// let p =async ()=>{
// return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject(new Error("It's Not Acceptable"))
//     }, 3000)
// })
// }
// const fun =async ()=>{
//     try{
//   let res = await p();
//   console.log(res);
//     }catch(err){
//         console.log("Some Error Occured "+err);
//     }
// }
// fun();

let p1 = async()=>{ return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(10);
    }, 1000)
})
}

let p2 = async() =>{ return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(20);
    }, 2000)
})
}

let p3 = async() => { return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(30);
    }, 3000)
})
}

const fun = async()=>{
  console.time("run"); 
  let a1 =  p1();
  let a2 = p2();
  let a3 = p3();
  const res = await Promise.all([a1, a2, a3]);
  console.log(res);
  console.timeEnd("run");
}
fun();


