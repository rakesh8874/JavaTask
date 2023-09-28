const a = async(text, n=2)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
           resolve(text);
        }, 1000*n)
    })
}

(
   async ()=>{
    let res = await a("I am Resolving After 1 Second ", 1);
    console.log(res);
    let res2 = await a("I am Resolving After 4 Second ", 4);  
     console.log(res2);    
}
)()

function sum(a, b, c){
    return a+b+c;
}

let x = [1,2,4];

let res = sum(...x);
console.log(res);


function simple(p, r, t){
    return p*r*t/100;
}

console.log(simple(1000, 5, 1))

