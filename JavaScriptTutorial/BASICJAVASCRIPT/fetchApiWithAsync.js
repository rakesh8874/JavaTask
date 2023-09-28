
const createTod = async(todo)=>{
    
    let options = {
        method:'POST',
        headers:{
         "Content-type":"application/json",
        },
        body: JSON.stringify(todo),
    }

   let response = await fetch("https://jsonplaceholder.typicode.com/posts", options);
    let anoRes = response.json();
    return anoRes;
}

const getTodo = async(id)=>{
    let p = await fetch('https://jsonplaceholder.typicode.com/todos/'+id);
     let response = await p.json();
     return response;  
}

const mainFunc = async()=>{
    let todo = {
       title:'rakesh2',
       body:'bhai2',
       userId:5,
    }
     let todor = await createTod(todo);
     console.log(todor);
     console.log(await getTodo(101));
}

mainFunc();

