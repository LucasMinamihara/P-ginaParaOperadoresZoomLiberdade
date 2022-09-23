const introduction = document.querySelector(".introdution");
const skipIntroduction = document.querySelector(".skipIntroduction");
introduction.addEventListener("click", function () {
  window.location.href = "introduction.html";
});
skipIntroduction.addEventListener("click", function () {
  window.location.href = "application.html";
});
