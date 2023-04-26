let element1=document.getElementsById('text');
console.log(element1);

let element2=document.getElementsByName('a');
console.log(element2);



<input type="password" id="pass" />
    <button type="button" id="btn">Show/ hide pass</button>

    let elementInput = document.getElementById("pass");

document.getElementById("btn").onclick = function () {
  if (elementInput.getAttribute("type") == "password")
    elementInput.setAttribute("type", "text");
  else if (elementInput.getAttribute("type") == "text")
    elementInput.setAttribute("type", "password");
};

let colors = ["red", "blue", "pink", "green", "black"];

let i = 0;
setInterval(function () {
  document.body.style.backgroundColor = colors[i];
  i++;
  if (i >= colors.length) {
    i = 0;
  }
}, 500);

setInterval(function () {
  let currentDate = new Date();
  document.getElementById("clock").innerText = currentDate.toLocaleString();
}, 1000);