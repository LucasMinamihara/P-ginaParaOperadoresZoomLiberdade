let actualLogin;
const cards = document.querySelectorAll(".card");
cards.forEach((eachCard) => {
  eachCard.addEventListener("click", start);
});

async function start() {
  if (this.textContent.includes("Lucas")) actualLogin = "Lucas Hideki";
  if (this.textContent.includes("Felipe")) actualLogin = "Felipe Duarte";
  if (this.textContent.includes("Ricardo")) actualLogin = "Ricardo Peres";
  if (this.textContent.includes("Erik")) actualLogin = "Erik Nascimento";
  if (this.textContent.includes("Franksuel")) actualLogin = "Franksuel Leite";
  if (this.textContent.includes("Tiago Marques")) actualLogin = "Tiago Marques";
  if (this.textContent.includes("Tiago Costa")) actualLogin = "Tiago Costa";
  if (this.textContent.includes("Michel")) actualLogin = "Michel Silva";
  if (this.textContent.includes("Rafael")) actualLogin = "Rafael Vinicius";
  await actualLogin;
  exportando(actualLogin);
}
// Need fix export error on console
export default function exportando(actualLogin) {
  location.href = "countPage.html";
  return actualLogin;
}
