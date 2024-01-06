import BurgerList from "./burgerlist.csv";

export default function Menu() {
  const menu = document.createElement("div");
  menu.id = "menu";

  const title = document.createElement("h1");
  title.textContent = "Menu";
  menu.appendChild(title);

  const productList = document.createElement("ul");
  productList.id = "product-list";

  menu.appendChild(productList);

  console.log(BurgerList);
  BurgerList.slice(1, -1).forEach((item) => {
    let [name, description, price] = item;
    addBurger(productList, name, description, price);
  });

  return menu;
}

function addBurger(list, name, description, price) {
  const li = document.createElement("li");
  li.classList.add("product-list-item");

  const nameP = document.createElement("p");
  nameP.setAttribute("name", "name");
  nameP.textContent = name;
  li.appendChild(nameP);

  const priceP = document.createElement("p");
  priceP.setAttribute("name", "price");
  priceP.textContent = `$ ${price}`;
  li.append(priceP);

  const descriptionP = document.createElement("p");
  descriptionP.setAttribute("name", "description");
  descriptionP.textContent = description;
  li.append(descriptionP);

  list.appendChild(li);
}
