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
    }
  }

document.addEventListener('DOMContentLoaded', () =>{
   createGrid(16); 
});