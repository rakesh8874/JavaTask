let url = "https://kontests.net/api/v1/all";

let myCon = document.getElementById('myContainer');


let resoponse = fetch(url);

resoponse.then((value)=>{
    return value.json();
}).then((json)=>{
    ihtml = "";
    for(let data in json){
        ihtml += `<div class="card my-2 ms-4" style="width: 18rem; display:inline-flex;">
        <img class="card-img-top" src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${json[data].name}</h5>
          <p>Duration : ${json[data].duration}</p>
          <p>Start Time : ${json[data].start_time}</p>
          <p>End Time :  ${json[data].end_time}</p>
          <a href="${json[data].url}" class="btn btn-primary">Visit Page</a>
        </div>
      </div>`
    }
    myCon.innerHTML = ihtml;
})