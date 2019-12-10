document.querySelector("main#main").remove();


let newHeader = document.createElement("h1")
// created a node

newHeader.id = "victory"; // Set the id

newHeader.innerText = "arya is the champion";

document.body.appendChild(newHeader);
