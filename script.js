const rangeNumber = document.querySelector(".rangeNumber");
const range = document.querySelector(".range");
const square = document.querySelector(".square");

rangeNumber.textContent = `${range.value}x${range.value}`;

const rangeChange = range.addEventListener("click", () => {
    rangeNumber.textContent = `${range.value}x${range.value}`;
    createSquare();
})

function createSquare() {
    for(let i=1; i<range.value; i++){
        const div = document.createElement("div");
        div.style.width = square.width / range.value;
        div.style.height = square.width / range.value;
        div.style.backgroundColor = "red";
        div.style.zIndex = "1";
        document.appendChild(div);
    }
}