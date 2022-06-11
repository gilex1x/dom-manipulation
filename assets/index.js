const baseurl = "https://rickandmortyapi.com/api";
let container = document.getElementById("main-content");
container.style =
  "display: flex; width: 100%;flex-wrap: wrap;justify-content: center;align-items: center;align-content: center";
let results = [];
fetch(`${baseurl}/character`)
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((element) => {
      const nodeCard = document.createElement("div");
      nodeCard.style='border: solid 1px ; border-radius: 12px; margin:8px; padding: 8px'
      const nodeItem = document.createElement("h2");
      const nodeImage = document.createElement("img");
      //const nameText = document.createTextNode(element.name);
      //node.appendChild(nameText);
      //the two commented lines, can be just one
      nodeItem.textContent = element.name;
      nodeImage.src = element.image;
      nodeImage.alt = `${element.name}-image`;
      nodeCard.append(nodeItem, nodeImage);
      results.push(nodeCard);
    });
    container.append(...results);
  });
