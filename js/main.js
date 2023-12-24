var container = document.querySelector(".container");
var array = [
  {
    title: "/ Reviews",
    img: "./img/man.jpeg",
    name: "JOHN DOE",
    type: "Regular Guy",
    content:
      "Gastropub sustainable tousled prism occupy.Viral XOXO roof party brunch actually, chambraylisticle microdosing put a bird on it paleo subway tile squid ummani.",
    symbol: "``",
  },
];

array.forEach((objects) => {
  const div = document.createElement("div");
  div.classList.add("about");
  div.style.borderRadius = "15px";
  div.style.position = "relative";
  container.appendChild(div);

  container.style.backgroundColor = "#f1f5f8";

  const title = document.createElement("h1");
  title.textContent = objects.title;
  title.style.color = "#bd6739";
  div.appendChild(title);

  const img = document.createElement("img");
  img.src = objects.img;
  img.classList.add("img");
  img.alt = "Profile Picture";
  img.style.height = "40vh";
  img.style.borderRadius = "50%";
  div.appendChild(img);

  const name = document.createElement("h2");
  name.classList.add("name");
  name.textContent = objects.name;
  name.style.color = "#bd6739";
  name.style.fontSize = "35px";
  div.appendChild(name);

  const type = document.createElement("b");
  type.classList.add("type");
  type.textContent = objects.type;
  type.style.color = "#5f6c7d";
  type.style.fontSize = "25px";
  div.appendChild(type);

  const leftButton = document.createElement("button");
  leftButton.textContent = "<";
  leftButton.classList.add("leftBtn");
  leftButton.style.backgroundColor = "#637b99";
  leftButton.style.color = "#fff";
  leftButton.style.position = " absolute";
  leftButton.style.left = "20%";
  leftButton.style.top = "40%";
  leftButton.style.transform = "scale(2.5)";
  leftButton.style.cursor = "pointer";
  leftButton.style.border = "none";
  div.appendChild(leftButton);

  const rightButton = document.createElement("button");
  rightButton.textContent = ">";
  rightButton.classList.add("rightBtn");
  rightButton.style.backgroundColor = "#637b99";
  rightButton.style.color = "#fff";
  rightButton.style.position = " absolute";
  rightButton.style.right = "20%";
  rightButton.style.top = "40%";
  rightButton.style.transform = "scale(2.5)";
  rightButton.style.cursor = "pointer";
  rightButton.style.border = "none";
  div.appendChild(rightButton);

  const content = document.createElement("p");
  content.textContent = objects.content;
  content.classList.add("content");
  content.style.color = "#637b99";
  content.style.fontSize = "30px";
  content.style.flexWrap = "wrap";
  div.appendChild(content);

  const symbol = document.createElement("b");
  symbol.classList.add("symbol");
  symbol.textContent = objects.symbol;
  symbol.style.fontWeight = "bold";
  symbol.style.color = "#bd6739";
  symbol.style.fontSize = "100px";
  div.appendChild(symbol);
});
