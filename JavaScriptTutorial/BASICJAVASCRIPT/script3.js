//getting attribute
// let a = document.getElementById('first').getAttribute('class')
// console.log(a);

//to check any attribute is there or not
//console.log(document.getElementById('first').hasAttribute('class'));

// console.log(document.getElementById('first').setAttribute("hidden", true))

// console.log(document.getElementById('first').removeAttribute('class'))

//creating own custom attribute and getting that attribute
//console.log(document.getElementById('first').dataset.game)


let a = document.getElementsByTagName('div')[0]

a.innerHTML = a.innerHTML +'<h1>Hello World</h1>'

console.log(a);