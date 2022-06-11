const baseurl = "https://rickandmortyapi.com/api";
const container = document.getElementById("main-content");
fetch(`${baseurl}/character`)
  .then((res) => res.json())
  .then((data) =>
    data.results.forEach((element) => {
      const node = document.createElement("h2");
      node.appendChild(document.createTextNode(element.name));
      container.appendChild(node);
    })
  );
