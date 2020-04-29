import "../styles/index.scss";

function init() {
  const randomNumber = 5;
  const input = document.getElementById("checkField");
  const checkBtn = document.getElementById("checkBtn");

  checkBtn.addEventListener("click", () => {
    checkNumber(input);
  });
}

function checkNumber(input) {
  console.log(input.value);
}
