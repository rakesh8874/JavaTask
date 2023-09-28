

function loadScript(src, callback){
    var script = document.createElement('script');
    script.src = src;
    script.onload = function(){
        console.log("Loaded Script With SRC : "+src);
        callback(null, src);
    }
    script.onerror = function(){
        console.log("Error Loading Script With SRC : "+src);
        callback(new Error("Some Error Occured"));
    }
    document.body.appendChild(script);
}

function hello(error, src){
    if(error){
        console.log(error);
        return;
    }
    alert("Hello World "+src);
}

function goodNight(){
    alert("Good Night");
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",hello);