const Btn = document.getElementById("btn")
const Input = document.getElementById("input")
const Btn2 = document.getElementById("Btn2")

Btn.addEventListener("click", () => {
    Input.classList.toggle("active");
    Input.focus();
})

Btn2.addEventListener("click", () => {
    Input.classList.toggle("active");
    Input.focus();

})