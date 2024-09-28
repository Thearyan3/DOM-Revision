let para = document.createElement('p');
para.innerText = "Hey I'm red";
let body = document.querySelector('body').append(para);
para.classList.add("red");

let heading3 = document.createElement('h3');
heading3.innerText = "Hey I'm blue h3";
document.querySelector('body').append(heading3);
heading3.classList.add("blue");

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "I am in a div";
para2.innerText = "Me Too!";

div.append("h1");
div.append("para2");

div.classList.add("black");
document.querySelector('body').prepend(div);


