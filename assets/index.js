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
  const nodeCard = document.createElement("character-card");
  nodeCard.name=item.name;
  nodeCard.image=item.image;
  nodeCard.status=item.status;
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
