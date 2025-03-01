function rowMaker (divGrid) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (i = 1; i <= size; i++) {
        divMaker(row);
    }
    divGrid.appendChild(row);
}

function divMaker(divRow) {
    const div = document.createElement("div");
    div.setAttribute("class", "square");
    div.style.padding = `${1000 / (4 * size)}px`
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    });
    divRow.appendChild(div);
}

function makeNewGrid () {
    size = +prompt("Set new square grid size (max. 100):");
    container.textContent = "";
    grid.textContent = "";
    for (u = 1; u <= size; u++) {
        rowMaker(grid);
    }
    container.appendChild(grid);
}

const container = document.querySelector(".container");
const grid = document.createElement("div");
grid.setAttribute("class", "grid");

let u;
let i;
let size = 16;

const setGridSize = document.querySelector(".set-grid-size");
setGridSize.addEventListener("click", makeNewGrid);

for (u = 1; u <= size; u++) {
    rowMaker(grid);
}

container.appendChild(grid);

