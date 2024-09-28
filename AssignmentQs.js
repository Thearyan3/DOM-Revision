// Question No.-1
let input = document.createElement('input');
let btn = document.createElement('button');

btn.innerText = "Click Me";

document.querySelector('body').append(input);
document.querySelector('body').append(btn);

// Question No.-2
input.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");

// Question No.-3
let button = document.querySelector("#btn");
button.classList.add("btnstyle");

// Question No. -4
let h1 = document.createElement('h1');
h1.innerText = "DOM Practice";

h1.style.color= "purple";
h1.style.textDecoration= "underline black";

document.querySelector('body').append(h1);

// Question No. -5
let p = document.createElement('p');
p.innerHTML = "alpha college <b>delta</b> practice";

p.style.textTransform = "capitalize";

document.querySelector('body').append(p);