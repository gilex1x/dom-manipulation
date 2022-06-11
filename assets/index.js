const baseurl = "https://rickandmortyapi.com/api";
let container = document.getElementById("main-content");
let results = [];

const createNodeElement = (item) => {
  const nodeCard = document.createElement("div");
  nodeCard.className = "card";
  const nodeItem = document.createElement("h3");
  const nodeImage = document.createElement("img");
  nodeImage.loading = "lazy";
  //const nameText = document.createTextNode(element.name);
  //node.appendChild(nameText);
  //the two commented lines, can be just one
  nodeItem.textContent = item.name;
  nodeImage.src = item.image;
  nodeImage.alt = `${item.name}-image`;
  nodeCard.append(nodeItem, nodeImage);
  return nodeCard;
};
fetch(`${baseurl}/character`)
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((element) => {
      results.push(createNodeElement(element));
    });
    container.append(...results);
  });
