const baseurl = "https://rickandmortyapi.com/api";
let container = document.getElementById("main-content");
let results = [];
fetch(`${baseurl}/character`)
  .then((res) => res.json())
  .then((data) => {
    data.results.forEach((element) => {
        const nodeCard=document.createElement('div');
      const nodeItem = document.createElement("h2");
      const nodeImage = document.createElement("img");
      //const nameText = document.createTextNode(element.name);
      //node.appendChild(nameText);
      //the two commented lines, can be just one
      nodeItem.textContent = element.name;
      nodeImage.src = element.image;
      nodeCard.append(nodeItem,nodeImage)
      results.push(nodeCard);
    });
    container.append(...results);
  });
