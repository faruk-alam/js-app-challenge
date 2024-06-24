const labelCount = document.getElementById("labelCount")
const btnUp = document.getElementById("btnUp")
const btnReset = document.getElementById("btnReset")
const btnDown = document.getElementById("btnDown")
let count = 0;

btnUp.addEventListener("click", () => {
    count++;
    labelCount.textContent = count;
})
btnReset.addEventListener("click", () => {
    count = 0;
    labelCount.textContent = count;
})
btnDown.addEventListener("click", () => {
    count--;
    labelCount.textContent = count;
})