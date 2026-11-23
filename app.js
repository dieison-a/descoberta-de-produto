const filters = [...document.querySelectorAll(".filter")];
const cards = [...document.querySelectorAll(".card")];
const resultCount = document.querySelector("#result-count");

function applyFilter(selected) {
  let visible = 0;
  for (const card of cards) {
    const show = selected === "all" || card.dataset.kind === selected;
    card.hidden = !show;
    if (show) visible += 1;
  }
  resultCount.textContent = `${visible} ${visible === 1 ? "etapa" : "etapas"} em destaque`;
  for (const button of filters) {
    const active = button.dataset.filter === selected;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  }
}

for (const button of filters) {
  button.addEventListener("click", () => applyFilter(button.dataset.filter));
}

applyFilter("all");
