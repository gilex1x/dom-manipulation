const baseurl = "https://rickandmortyapi.com/api";
let container = document.getElementById("main-content");
let results = [];
fetch(`${baseurl}/character`)
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((element) => {
      const nodeCard = document.createElement("div");
      nodeCard.className = "card";
      const nodeItem = document.createElement("h3");
      const nodeImage = document.createElement("img");
      nodeImage.loading = "lazy";
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
