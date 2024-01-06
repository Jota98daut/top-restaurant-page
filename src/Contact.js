export default function Contact() {
  let contact = document.createElement("div");
  contact.id = "contact";

  let title = document.createElement("h1");
  title.textContent = "Contact";
  contact.appendChild(title);

  let data = document.createElement("ul");
  data.appendChild(contactItem("Address", "8170 W Charleston Blvd, Las Vegas"))
  data.appendChild(contactItem("Phone number", "(702) 360-7827"))
  data.appendChild(contactItem("E-Mail", "contact@tokyoburger.com"))
  contact.appendChild(data);

  let map = document.createElement("iframe");
  map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1610.6393665343435!2d-115.2710787893972!3d36.159769684963464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c0885e5eab33%3A0x3ff48df5ed0a47b9!2s8170%20W%20Charleston%20Blvd%2C%20Las%20Vegas%2C%20NV%2089145%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1704497281648!5m2!1ses-419!2sar";
  map.width = 500;
  map.height = 400;
  map.style = "border: 0;";
  map.allowFullscreen = "";
  map.loading = "lazy";
  map.referrerPolicy = "no-referrer-when-downgrade";
  contact.appendChild(map);

  return contact;
}

function contactItem(title, data) {
  let item = document.createElement("li");
  item.innerHTML = `<strong>${title}</strong>: ${data}`;
  return item;
}
