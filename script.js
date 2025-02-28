function rowMaker (divGrid) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    for (let i = 1; i <= 16; i++) {
        divMaker(row);
    }
    divGrid.appendChild(row);
}

function divMaker(divRow) {
    const div = document.createElement("div");
    div.setAttribute("class", "square")
    div.addEventListener("hover", () => {
        div.setAttribute("style","background-color = 'black'");
    });
    divRow.appendChild(div);
}

const container = document.querySelector(".container");
const grid = document.createElement("div");
grid.setAttribute("class", "grid");

for (let u = 1; u <= 16; u++) {
    rowMaker(grid);
}

container.appendChild(grid);