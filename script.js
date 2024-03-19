const circle = document.getElementById("base-chart__path-elapsed");
const pathRemaining = document.getElementById("base-chart-path-remaining");

//reindirizzamento prossima pagina al click del bottone
const rateButton = document.getElementById("rate-us-button");
rateButton.onclick = () => {
  window.location.href = "Feedback.html";
};

//creo oggetto con i colori da dare al grafico
const colorCodes = {
  info: {
    correctColor: "green",
  },
};

const d = 200;

pathRemaining.style.strokeDasharray = `${d} 283`;
pathRemaining.style.stroke = colorCodes.info.correctColor;

console.log(283 / 100);
console.log(66 * 2.83);
