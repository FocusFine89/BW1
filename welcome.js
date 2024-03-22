// WELCOME ZONE
const buttonProceed = function () {
  const checkbox = document.querySelector(".css-checkbox"); //seleziono la checkbox
  const difficult = document.querySelector("#difficult"); //seleziono il campo difficult
  const quantity = document.querySelector("#quantity"); //seleziono il campo quantity

  if (checkbox.checked) {
    // = se la checkbox risulta 'checked' allora:
    sessionStorage.setItem("difficult", difficult.value); // tramite setItem imposto alla chiave "difficult" il .value del campo difficult
    sessionStorage.setItem("quantity", quantity.value); //tramite setItem imposto alla chiave "quantity" il .value del campo quantity
    window.location.href = "Benchmark.html"; //passo alla pagina successiva (quella contenente le domande)
  } else {
    // = se la checkbox non risulta 'checked' allora:
    const obbligatorio = document.getElementById("campoObb");
    obbligatorio.innerText = "* Required field to continue"; //mostra nel "campoObb" il testo * Required field to continue
  }
};
