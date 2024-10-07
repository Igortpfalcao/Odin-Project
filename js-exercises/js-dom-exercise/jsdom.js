const button = document.querySelector("button");
const itemList = document.querySelector("ul");

const addItem = function() {
    var input = document.getElementById("item").value;
    var item = document.createElement("li");
    item.textContent = input;
    itemList.appendChild(item);
    alert("Você digitou: " + input); 
}

button.addEventListener("click", addItem);
