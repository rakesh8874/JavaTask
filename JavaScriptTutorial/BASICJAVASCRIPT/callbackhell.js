

function loadScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = function () {
        console.log("Loaded Script With SRC : " + src);
        callback(null, src);
    }
    script.onerror = function () {
        console.log("Error Loading Script With SRC : " + src);
        callback(new Error("Some Error Occured"));
    }
    document.body.appendChild(script);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js", function hello(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap2.bundle.min.js", function hello(error, src) {
        if (error) {
            console.log(error);
            return;
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap3.bundle.min.js", function hello(error, src) {
            if (error) {
                console.log(error);
                return;
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap4.bundle.min.js", function hello(error, src) {
                if (error) {
                    console.log(error);
                    return;
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap5.bundle.min.js", function hello(error, src) {
                    if (error) {
                        console.log(error);
                        return;
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap6.bundle.min.js", function hello(error, src) {
                        if (error) {
                            console.log(error);
                            return;
                        }

                    })
                })
            })
        })
    })
});



function goodNight() {
    alert("Good Night");
}

