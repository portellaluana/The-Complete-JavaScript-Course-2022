const botao = document.querySelectorAll(".mostrar-tela");
const botaoFechar = document.querySelector(".fechar-janela");
const janela = document.querySelector(".tela");
const sobreposicao = document.querySelector(".sobreposicao");

const fecharJanela = function () {
  janela.classList.add("esconder");
  sobreposicao.classList.add("esconder");
};

const abrirJanela = function () {
  janela.classList.remove("esconder");
  sobreposicao.classList.remove("esconder");
};

for (let i = 0; i < botao.length; i++)
  botao[i].addEventListener("click", abrirJanela);

botaoFechar.addEventListener("click", fecharJanela);

sobreposicao.addEventListener("click", fecharJanela);

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !janela.classList.contains("esconder")) {
    fecharJanela();
  }
});
