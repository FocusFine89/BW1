//GENERALE
const circle = document.getElementById("base-chart__path-elapsed");
const pathRemaining = document.getElementById("base-chart-path-remaining");

//REINDIRIZZO ALLA PROSSIMA PAGINA AL CLICK DEL BOTTONE
const rateButton = document.getElementById("rate-us-button");
rateButton.onclick = () => {
  window.location.href = "Feedback.html";
};

//COLORE DELLE RISPOSTE CORRETTE DEL GRAFICO, HO FATTO UN OGGETTO PERCHè ALL'INIZIO PENSAVO SERVISSERO PIù COLORI
const colorCodes = {
  info: {
    correctColor: "#00FFFF",
  },
};

const d = 200; //

//IMPORTANTE! MOSTRA PROGRESSO DEL GRAFICO
pathRemaining.style.strokeDasharray = `${d} 283`;
pathRemaining.style.stroke = colorCodes.info.correctColor;

//2.83 EQUIVALE ALL'1% DI 283

//CODICE QUANTE DOMANDE SONO STATE RISPOSTE GIUSTE E QUANTE SBAGLIATE (es.4/6 giuste)

//CODICE PER CALCOLARE LA PERCENTUALE DI RISPOSTE GIUSTE E DI RISPOSTE GIUSTE E SBAGLIATE
//calcolare la percentuale in base a quante domande ci sono nell'array
