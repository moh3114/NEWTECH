`use strict`

const mainTitle = document.querySelector("#mainTitle");
const featureList = document.querySelectorAll(".feature")
const descriptionParagraph = document.querySelector(".description")

console.log(mainTitle.textContent);
console.log(descriptionParagraph.innerHTML)

mainTitle.textContent = "Welcome to the Dashboard";
descriptionParagraph.textContent = "in this page we control on all features";
descriptionParagraph.classList.remove("hidden");

mainTitle.classList.add("highlight");
if(descriptionParagraph.classList.contains("hidden")){
    descriptionParagraph.classList.remove("hidden");
}

featureList.forEach(item => item.textContent.includes("REMOVE ME")? item.remove():0)

const h2Element = document.createElement("h2");
h2Element.textContent = "Available Features";
descriptionParagraph.parentElement.insertBefore(h2Element, descriptionParagraph)

const link = document.querySelector("#mainLink");
const hrefValue = link.getAttribute("href")
console.log(hrefValue);
link.setAttribute("href", "http://example.com")
link.textContent = "Go to Dashboard"


const form = document.querySelector("form");
const user = form.get("username").value
