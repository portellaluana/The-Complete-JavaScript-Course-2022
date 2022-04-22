let numeroSecreto = Math.trunc(Math.random() * 10) + 1;
let tentativa = 10;
const mensagemUsuario = function (mensagem) {
  document.querySelector(".mensagem").textContent = mensagem;
};

document.querySelector(".tentar").addEventListener("click", function () {
  const entradaTentativa = Number(
    document.querySelector(".entradaTentativa").value
  );
  //SE FOR ERRADO
  if (!entradaTentativa || entradaTentativa > 10 || entradaTentativa < 1) {
    mensagemUsuario("❌ números entre 1 e 10");
    //NUMERO SECRETO CERTO
  } else if (entradaTentativa === numeroSecreto) {
    document.querySelector(".mensagem").style.color = "#2666CF";
    mensagemUsuario("👍🏼 acertou miserávi");
    document.querySelector("body").style.backgroundColor = "#01FFC2";
    document.querySelector(".numeroSecreto").textContent = numeroSecreto;

    //NUMERO SECRETO DIFERENTE DO CERTO
  } else if (entradaTentativa !== numeroSecreto) {
    mensagemUsuario(
      entradaTentativa > numeroSecreto ? "👀 muito alto" : "👀 muito baixo"
    );
    tentativa--;
    document.querySelector(".tentativa").textContent = tentativa;
    //ACABARAM AS TENTATIVAS
    if (tentativa < 1) {
      document.querySelector(".mensagem").style.color = "#2666CF";
      mensagemUsuario("👎🏼 Perdesse");
      document.querySelector(".tentativa").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#FF6363";
    }
  }
});
//ATUALIZAR
document.querySelector(".atualizar").addEventListener("click", function () {
  tentativa = 10;
  document.querySelector(".tentativa").textContent = "10";
  mensagemUsuario("tenta aí...");
  numeroSecreto = Math.trunc(Math.random() * 10) + 1;
  document.querySelector(".numeroSecreto").textContent = "?";
  document.querySelector(".entradaTentativa").textContent = "";
  document.querySelector("body").style.backgroundColor = "#2c3333";
});
