import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import "./style.css";

const content = document.getElementById("content");
const homeButton = document.querySelector("#nav-buttons a[name='home']");
const menuButton = document.querySelector("#nav-buttons a[name='menu']");
const contactButton = document.querySelector("#nav-buttons a[name='contact']");


homeButton.addEventListener("click", (e) => {
  e.preventDefault();

  load(Home);
})

menuButton.addEventListener("click", (e) => {
  e.preventDefault();

  load(Menu);
})

contactButton.addEventListener("click", (e) => {
  e.preventDefault();

  load(Contact);
})

function clearContent() {
  content.innerHTML = "";
}

function load(component) {
  clearContent();
  content.appendChild(component());
}

load(Menu);
