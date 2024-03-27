const button = document.querySelector(".sort");
function sortear() {
  const inputEntre = Math.ceil(
    document.querySelector(".entre-com-numero").value
  );
  const inputE = Math.floor(
    document.querySelector(".entre-com-segundo-numero").value
  );
  const result = Math.floor(Math.random() * (inputEntre - inputE) + inputE);

  const p = document.querySelector(".number-sort");
  p.innerHTML = `O numero sorteado foi ${result}`;
}
button.addEventListener("click", sortear);
