let numeroSecreto = Math.trunc(Math.random() * 10) + 1;

let tentativa = 10;

document.querySelector(".tentar").addEventListener("click", function () {
  const entradaTentativa = Number(
    document.querySelector(".entradaTentativa").value
  );
  //SE FOR ERRADO
  if (!entradaTentativa || entradaTentativa > 10 || entradaTentativa < 1) {
    document.querySelector(".mensagem").textContent = "❌ números entre 1 e 10";
    //SE FOR CERTO
  } else if (entradaTentativa === numeroSecreto) {
    document.querySelector(".mensagem").style.color = "#2666CF";
    document.querySelector(".mensagem").textContent = "👍🏼 acertou miserávi";
    document.querySelector("body").style.backgroundColor = "#01FFC2";
    document.querySelector(".numeroSecreto").textContent = numeroSecreto;
    //SE FOR MAIOR
  } else if (entradaTentativa > numeroSecreto) {
    if (tentativa > 1) {
      document.querySelector(".mensagem").textContent = "👀 muito alto";
      tentativa--;
      document.querySelector(".tentativa").textContent = tentativa;
    } else {
      document.querySelector(".mensagem").style.color = "#2666CF";
      document.querySelector(".mensagem").textContent = "👎🏼 Perdesse";
      document.querySelector(".tentativa").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#FF6363";
    }
    //SE FOR MENOR
  } else if (entradaTentativa < numeroSecreto) {
    if (tentativa > 1) {
      document.querySelector(".mensagem").textContent = "👀 muito baixo";
      tentativa--;
      document.querySelector(".tentativa").textContent = tentativa;
    } else {
      document.querySelector(".mensagem").style.color = "#2666CF";
      document.querySelector(".mensagem").textContent = "👎🏼 Perdesse";
      document.querySelector(".tentativa").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#FF6363";
    }
  }
});

document.querySelector(".atualizar").addEventListener("click", function () {
  tentativa = 10;
  document.querySelector(".mensagem").textContent = "tenta aí...";
  numeroSecreto = Math.trunc(Math.random() * 10) + 1;
  document.querySelector(".numeroSecreto").textContent = "?";
  document.querySelector(".entradaTentativa").textContent = "";
  document.querySelector("body").style.backgroundColor = "#2c3333";
});
