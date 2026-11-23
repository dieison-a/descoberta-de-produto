const filtros = [...document.querySelectorAll(".filtro")];
const cartoes = [...document.querySelectorAll(".cartao")];
const totalResultados = document.querySelector("#total-resultados");

function aplicarFiltro(selecionado) {
  let visiveis = 0;
  for (const cartao of cartoes) {
    const mostrar = selecionado === "todos" || cartao.dataset.tipo === selecionado;
    cartao.hidden = !mostrar;
    if (mostrar) visiveis += 1;
  }
  totalResultados.textContent = `${visiveis} ${visiveis === 1 ? "etapa" : "etapas"} em destaque`;
  for (const botao of filtros) {
    const ativo = botao.dataset.filtro === selecionado;
    botao.classList.toggle("ativo", ativo);
    botao.setAttribute("aria-pressed", String(ativo));
  }
}

for (const botao of filtros) {
  botao.addEventListener("click", () => aplicarFiltro(botao.dataset.filtro));
}

aplicarFiltro("todos");

