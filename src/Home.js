import BurgerImage from "./images/burger.jpg";

export default function Home() {
  let home = document.createElement("div");
  home.id = "home";

  let title = document.createElement("h1");
  title.id = "title";
  title.textContent = "Tokyo Burger";
  home.appendChild(title);

  let welcome = document.createElement("div");
  welcome.id = "welcome";

  let text = document.createElement("p");
  text.textContent = "Try the best burgers made with top quality meat brought from Argentina";
  welcome.appendChild(text);

  const img = new Image();
  img.src = BurgerImage;
  welcome.appendChild(img);

  let order = document.createElement("h2");
  let orderLink = document.createElement("a");
  orderLink.href = "#";
  orderLink.textContent = "Order now!";
  order.appendChild(orderLink);
  welcome.appendChild(order);

  home.appendChild(welcome);

  return home;
}
