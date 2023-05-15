var gridContainer = document.getElementById("grid-container");

for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    var gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    gridItem.textContent = "Row " + (i + 1) + " - Column " + (j + 1);
    gridContainer.appendChild(gridItem);
  }
}

