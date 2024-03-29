// FEEDBACK ZONE

const colorStars = function (indexStar) {
  const star = document.querySelectorAll(".star path");
  star.forEach((star, i) => {
    if (i <= indexStar) {
      star.style.fill = "#00ffff";
    } else {
      star.style.fill = "#032b59";
    }
  });
};

const addsStars = function () {
  const starsDiv = document.querySelector(".stars");
  let indexStar = null;

  for (let i = 0; i < 10; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.setAttribute("index-data", i);
    star.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="47" height="46" viewBox="0 0 47 46" fill="none"> <path d="M22.2044 1.55551C22.6143 0.569963 24.0104 0.569964 24.4203 1.55552L29.9874 14.9402C30.1602 15.3557 30.5509 15.6396 30.9994 15.6756L45.4494 16.834C46.5134 16.9193 46.9448 18.2471 46.1341 18.9415L35.1248 28.3722C34.7831 28.6649 34.6338 29.1242 34.7382 29.5619L38.1018 43.6626C38.3494 44.7009 37.2199 45.5215 36.309 44.9651L23.9379 37.4089C23.5538 37.1743 23.0709 37.1743 22.6868 37.4089L10.3157 44.9651C9.40478 45.5215 8.27528 44.7009 8.52295 43.6626L11.8865 29.5619C11.9909 29.1242 11.8416 28.6649 11.4999 28.3722L0.490575 18.9415C-0.320069 18.2471 0.111362 16.9193 1.17535 16.834L15.6253 15.6756C16.0738 15.6396 16.4645 15.3557 16.6374 14.9402L22.2044 1.55551Z" fill="#032b59"/>';
    starsDiv.appendChild(star);

    star.addEventListener("mouseover", function (event) {
      const indexStarHovered = parseInt(
        event.currentTarget.getAttribute("index-data")
      );
      if (indexStarHovered >= indexStar) {
        colorStars(indexStarHovered);
      }
    });

    star.addEventListener("click", function (event) {
      const indexStarClicked = parseInt(
        event.currentTarget.getAttribute("index-data")
      );
      colorStars(indexStarClicked);
      indexStar = indexStarClicked;
    });
  }
};

addsStars();

document.getElementById("btn-info").style.display = "none";
document.querySelector(".copyright").style.display = "none";

const btnFeedback = document.getElementById("btn-enter");
btnFeedback.addEventListener("click", function () {
  document.getElementById("feedback-container").style.display = "none";
  document.getElementById("btn-info").style.display = "inline";
  document.querySelector(".copyright").style.display = "block";
  let feedback = document.createElement("p");
  let newTry = document.createElement("span");
  let btnNewTry = document.createElement("button");
  let moreInfoOur = document.createElement("p");
  moreInfoOur.classList.add("moreInfoOur");
  feedback.innerText = "Thanks for your feedback! Hope you enjoyed that!";
  newTry.innerText = "Do you want try again?";
  btnNewTry.innerText = "Welcome Page";
  btnNewTry.classList.add("btn-newtry");
  moreInfoOur.innerText =
    "If you want more information about our courses and our history click here!";
  btnNewTry.addEventListener("click", function () {
    window.location.href = "Welcome.html";
  });
  document.querySelector(".thanks-container").appendChild(feedback);
  document.querySelector(".thanks-container").appendChild(newTry);
  document.querySelector(".thanks-container").appendChild(btnNewTry);
  document.querySelector(".thanks-container").appendChild(moreInfoOur);
  document.getElementById("btn-enter").style.display = "none";
});

const btnInfo = document.getElementById("btn-info");
btnInfo.addEventListener("click", function () {
  window.open("https://epicode.com/it/", "_blank");
});
