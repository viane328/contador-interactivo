let valor = 0;
const valorElemento = document.getElementById("valor");
const incrementar = document.getElementById("incrementar");
const decrementar = document.getElementById("decrementar");
const resetear = document.getElementById("resetear");

incrementar.addEventListener("click", () => {
  valor++;
  valorElemento.textContent = valor;
});

decrementar.addEventListener("click", () => {
  valor--;
  valorElemento.textContent = valor;
});

resetear.addEventListener("click", () => {
  valor = 0;
  valorElemento.textContent = valor;
});
