function createGrid(x) {
    const gridSize = parseInt(x);

    const gridContainer = document.getElementById("container");
    gridContainer.innerHTML = ""; 

    // Create the grid based on the parameter value
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridContainer.appendChild(gridItem);

      gridItem.addEventListener("mouseenter", function () {
        gridItem.classList.add("hovered");
      });
    }
  }

function promptUser(){
    const gridSize = prompt("Enter new grid size: ");
    if((gridSize <= 100) && (gridSize < 1)){
        createGrid(gridSize);
    }
    else{
        return;
    }
}

document.addEventListener('DOMContentLoaded', () =>{
   createGrid(16); 
});