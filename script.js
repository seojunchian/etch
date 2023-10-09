const rangeNumber = document.querySelector(".rangeNumber");
const range = document.querySelector(".range");
const square = document.querySelector(".square");

rangeNumber.textContent = `${range.value}x${range.value}`;

const rangeChange = range.addEventListener("click", () => {
    rangeNumber.textContent = `${range.value}x${range.value}`;
    createSquare();
})

function createSquare() {
    for(let i=0; i<range.value-1; i++){
        const div = document.createElement("div");
        div.style.width = 410 / range.value;
        div.style.height = 410 / range.value;
        div.style.backgroundColor = "red";
        square.appendChild(div);
    }
}