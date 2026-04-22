const btn = document.querySelector(".game-btn");
const backLink = document.querySelector("a");
let count = 4;
let intervalId;
let taimForGame = 10;
let gameTimerId;
const taimerForGame = document.createElement("p");
taimerForGame.textContent = `Час: ${taimForGame}`;
btn.addEventListener("click", letGames);
function letGames(event) {
  btn.disabled = true;
  backLink.style.display = "none";
  intervalId = setInterval(() => {
    count--;
    btn.textContent = count;
    if (count === 0) {
      btn.textContent = "Run!";
      clearInterval(intervalId);

      setTimeout(() => {
        btn.classList.add("is-hidden");
        document.body.style.backgroundColor = "cadetblue";
        renderGameBtn();
      }, 500);
    }
  }, 1000);
}
let timeoutId;
function renderGameBtn() {
  const gameBtn = document.createElement("button");
  gameBtn.textContent = "take me";
  gameBtn.style.backgroundColor = "blue";
  gameBtn.style.position = "absolute";
  gameBtn.style.transition = "all 0.2s";

  const text = document.querySelector(".text");
  text.after(taimerForGame);
  text.after(gameBtn);

  gameTimerId = setInterval(() => {
    taimForGame--;
    taimerForGame.textContent = `Час: ${taimForGame}`;

    if (taimForGame === 0) {
      clearInterval(gameTimerId);

      setTimeout(() => {
        alert(`Гру завершено! Ти наклікав: ${value}`);
        gameBtn.remove();
        btn.classList.remove("is-hidden");
        btn.textContent = "Play";
        btn.disabled = false;
        backLink.style.display = "block";
        document.body.style.backgroundColor = "cornsilk";
        taimerForGame.remove();
        count = 4;
        taimForGame = 10;
        value = 0;
      }, 1000);
    }
  }, 1000);

  gameBtn.addEventListener("mouseover", () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const maxWidth = window.innerWidth - 100;
      const maxHeight = window.innerHeight - 50;

      const randomX = Math.random() * maxWidth;
      const randomY = Math.random() * maxHeight;

      gameBtn.style.left = randomX + "px";
      gameBtn.style.top = randomY + "px";
    }, 150);
  });
  gameBtn.addEventListener("click", countClick);
}
let value = 0;
function countClick(event) {
  event.target.textContent = `take me (${(value += 1)})`;
  if (value === 10) {
    event.target.style.backgroundColor = "yellow";
  }
}
