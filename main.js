// function input() {
//   let textArea = document.getElementById("textarea").value;
//   let output = document.getElementById("output");

//   output.innerHTML = textArea;
// }

let textArea = document.getElementById("textarea").value;
let button = document.getElementById("button");
let output = document.getElementById("output");
// window.localStorage.setItem("textValue", textArea);

button.addEventListener("click", () => {
  if (window.localStorage.getItem("textValue") !== textArea) {
    let output = document.getElementById("output");
    let textArea = document.getElementById("textarea").value;
    window.localStorage.setItem("textValue", textArea);
    output.innerHTML = window.localStorage.getItem("textValue");
    console.log("no");
  } else if (window.localStorage.getItem("textValue") === textArea) {
    let textArea = document.getElementById("textarea").value;
    let output = document.getElementById("output");
    output.innerHTML = window.localStorage.getItem("textValue");
    console.log("yes");
  }
});

// document.addEventListener("load", () => {
//   output.innerHTML = window.localStorage.getItem("textValue");
// });
