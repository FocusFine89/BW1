// WELCOME ZONE
const buttonProceed = function () {
  const checkbox = document.querySelector(".css-checkbox");
  if (checkbox.checked) {
    window.location.href = "Benchmark.html";
  } else {
    const obbligatorio = document.getElementById("campoObb");
    obbligatorio.innerText = "* campo obbligatorio per procedere";
  }
};