"use strict";
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const pontoPlayer0 = document.getElementById("score--0");
const pontoPlayer1 = document.getElementById("score--1");
const somaPontosPlayer0 = document.getElementById("current--0");
const somaPontosPlayer1 = document.getElementById("current--1");

const dado = document.querySelector(".dice");
const botaoNovoJogo = document.querySelector(".btn--new");
const botaoRolarDado = document.querySelector(".btn--roll");
const botaoSomarPontos = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, jogoAtivo;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  jogoAtivo = true;

  pontoPlayer0.textContent = 0;
  pontoPlayer1.textContent = 0;
  somaPontosPlayer0.textContent = 0;
  somaPontosPlayer1.textContent = 0;

  dado.classList.add("hidden");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
};

init();

const swithPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

botaoRolarDado.addEventListener("click", function () {
  if (jogoAtivo) {
    const numeroDado = Math.trunc(Math.random() * 6) + 1;
    dado.classList.remove("hidden");
    dado.src = `./assets/dice-${numeroDado}.png`;

    if (numeroDado !== 1) {
      currentScore += numeroDado;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      swithPlayer();
    }
  }
});
botaoSomarPontos.addEventListener("click", function () {
  if (jogoAtivo) {
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      jogoAtivo = false;
      dado.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      swithPlayer();
    }
  }
});

botaoNovoJogo.addEventListener("click", init);
