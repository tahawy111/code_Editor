
let textArea = document.getElementById("textarea");
let button = document.getElementById("button");
let output = document.getElementById("output");
if (localStorage.getItem("result")) {
  textArea.value = localStorage.getItem("result");
}
button.addEventListener("click", () => {
  output.innerHTML = textArea.value;
  localStorage.setItem("result", textArea.value);
});
