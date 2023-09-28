async function rakesh(){
   
    let p1 = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Promise 1 Resolve");
        }, 3000)
    })

    let p2 = new Promise((resolve, reject) => {
        setTimeout(()=>{
           resolve("Promise 2 Resolve");
        }, 6000)
    })

    let p3 = await p1
    console.log("Promise3 is fullfilled waiting for p4 promise "+p3);
    let p4 = await p2
    console.log("Promise4 has fullfilled waiting for another async function "+p4);
    return [p3, p4];

}

const suresh = async () =>{
    console.log("I am Not Waiting");
 }

const main1 = async()=>{
let a = await rakesh();
let b = await suresh();
}
 main1();