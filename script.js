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
    div.style.opacity = 0;
    div.style.padding = `${1000 / (4 * size)}px`
    div.addEventListener("mouseover", () => {
        let op = +div.style.opacity;
        if (isColorful) {
            div.style.backgroundColor = `rgb(${(Math.random() * 255).toFixed(0)}, 
            ${(Math.random() * 255).toFixed(0)} ,
            ${(Math.random() * 255).toFixed(0)})`;
            div.style.opacity = op + 0.1;
       } else {
            div.style.backgroundColor = "black";
            div.style.opacity = op + 0.1;
       }
    });
    divRow.appendChild(div);
}

function makeNewGrid (skipPrompt) {
    (skipPrompt) ? size = size : size = +prompt("Set new square grid size (max. 100):");
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
let isColorful = false;

const setGridSize = document.querySelector(".set-grid-size");
setGridSize.addEventListener("click", () => {
    makeNewGrid(false)
});

const colorToggle = document.querySelector(".color-toggle");
colorToggle.addEventListener("click", () => {
    if (isColorful) {
        colorToggle.textContent = "Colorful";
        isColorful = false;
        makeNewGrid(true);
    } else {
        colorToggle.textContent = "Monochrome";
        isColorful = true;
        makeNewGrid(true);
    }
});

for (u = 1; u <= size; u++) {
    rowMaker(grid);
}

container.appendChild(grid);

