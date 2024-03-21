// WELCOME ZONE
const buttonProceed = function () {
  const checkbox = document.querySelector(".css-checkbox");
  const difficult = document.querySelector("#difficult");
  const quantity = document.querySelector("#quantity");

  if (checkbox.checked) {
    sessionStorage.setItem("difficult", difficult.value);
    sessionStorage.setItem("quantity", quantity.value);
    window.location.href = "Benchmark.html";
  } else {
    const obbligatorio = document.getElementById("campoObb");
    obbligatorio.innerText = "* Required field to continue";
  }
};
