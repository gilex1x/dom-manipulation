import { addImage } from "./lazy.js";
const baseurl = "https://rickandmortyapi.com/api";
let container = document.getElementById("main-content");
let loadButton = document.getElementById("loadButton");
let results = [];
let page = 1;

loadButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (page == 42) {
    page = 1;
  } else {
    page = page + 1;
  }

  getData();
});

const createNodeElement = (item) => {
  const nodeCard = document.createElement("div");
  nodeCard.className = "card";
  nodeCard.id = `${item.name.replace(/ /g, "-")}`;
  const nodeItem = document.createElement("h3");
  const loaderNode = document.createElement("div");
  loaderNode.style =
    "height: 300px; width: 300px; background-color:grey; border-radius: 12px;";
  loaderNode.className = "wrapper";
  const nodeImage = document.createElement("img");
  nodeImage.loading = "lazy";
  //const nameText = document.createTextNode(element.name);
  //node.appendChild(nameText);
  //the two commented lines, can be just one
  nodeItem.textContent = item.name;
  //pre-set el src de la img
  nodeImage.dataset.src = item.image;
  nodeImage.alt = `${item.name.replace(/ /g, "-")}-image`;
  loaderNode.appendChild(nodeImage);
  nodeCard.append(nodeItem, loaderNode);
  addImage(nodeCard);
  return nodeCard;
};

const getData = async () => {
  await fetch(`${baseurl}/character/?page=${page}`)
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((element) => {
        results.push(createNodeElement(element));
      });
      container.append(...results);
    });
};

window.onload = getData();
