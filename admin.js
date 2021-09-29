function openNav() {
  document.getElementById("mySidebar").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
let spot = localStorage.getItem("no");
z = JSON.parse(spot);
console.log(z);
function final() {
  d = Object.values(z[0]);
  showit=document.querySelector(".showit");
  let el_span = document.createElement("span");
  elaborate = document.createTextNode("The Current No. of Orders are: "+ d);
  el_span.appendChild(elaborate);
  showit.appendChild(el_span);
  document.getElementById("btn1").disabled = true;
}
