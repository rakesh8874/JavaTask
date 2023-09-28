//Inner HTML is being used to get and set inner html
let a = document.getElementById('first').innerHTML = "<i>Hey I am Italic</i>"
console.log(a);

//Outer HTML is being used to get and set Outer html
let b = document.getElementById('first').outerHTML = "<div>hey</div>"
console.log(b);

//Used to get node value
let c = document.body.firstChild.nodeValue
console.log(c);

//used to get text content of body
console.log(document.body.textContent)

//change th propety
document.getElementById('first').hidden = false;
