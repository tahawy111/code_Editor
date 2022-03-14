function input() {
  let textArea = document.getElementById("textarea").value;
  let output = document.getElementById("output");
  window.localStorage.setItem("textValue", textArea);
  output.innerHTML = window.localStorage.getItem("textValue");
}

function CodeEditor() {
  let textArea = document.getElementById("textarea").value;
  let button = document.getElementById("button");
  let output = document.getElementById("output");
  if (window.localStorage.getItem("textValue")) {
    // update localstorage value
    let textArea = document.getElementById("textarea").value;
    if (window.localStorage.getItem("textValue") !== textArea) {
      window.localStorage.setItem("textValue", textArea);
      output.innerHTML = window.localStorage.getItem("textValue");
    } else {
      output.innerHTML = window.localStorage.getItem("textValue");
    }
  }
  button.addEventListener("click", function () {
    let textArea = document.getElementById("textarea").value;
    let output = document.getElementById("output");
    // update localstorage value
    if (window.localStorage.getItem("textValue") !== textArea) {
      window.localStorage.setItem("textValue", textArea);
      output.innerHTML = window.localStorage.getItem("textValue");
    } else {
      output.innerHTML = window.localStorage.getItem("textValue");
    }

    //     console.log(window.localStorage.getItem("textValue"));
    //     console.log(textArea);
  });
}
CodeEditor();
