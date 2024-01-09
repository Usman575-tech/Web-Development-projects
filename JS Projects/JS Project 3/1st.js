var btn = document.getElementById("btn1");
var inputBox = document.getElementById("todo-input");
var currentV = "";
inputBox.addEventListener("input", function (e) {
  currentV = e.target.value;
});
inputBox.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    addListItem();
  }
});

function addListItem() {
  if (currentV !== undefined && currentV !== null && currentV !== "") {
    var ul = document.getElementById("list1");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(currentV));
    ul.appendChild(li);
    inputBox.value = "";
    currentV = "";
  } else {
    alert("Please enter a valid TODO item");
  }
}

btn.addEventListener("click", addListItem);
