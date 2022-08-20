const button = document.querySelector(".tail")
const rec = document.querySelector(".head")
const button2 = document.querySelector(".btn")

let rotateR = 0;
button.addEventListener("click", () => {
    rotateR = rotateR + 60;
    rec.style.transform = `rotate(${rotateR}deg)`;
});

button2.addEventListener("click", function show_alert() {
    alert("click the rotate button to make movement.");
});