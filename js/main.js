const btn = document.querySelector(".js-btn");
const p = document.createElement("p");
p.textContent = "Лічильник: 0";
document.body.append(p);
let count = 0;
let time = 3;
let isActiveTaimer = false;
let intervalId;
btn.addEventListener("click", () => {
  count += 1;
  p.textContent = `Лічильник: ${count}`;
  let widthBtn = getComputedStyle(btn).width;
  let heightBtn = getComputedStyle(btn).height;
  heightBtn = parseInt(heightBtn);
  widthBtn = parseInt(widthBtn);
  heightBtn += 3;
  widthBtn += 5;
  btn.style.width = widthBtn + "px";
  btn.style.height = heightBtn + "px";
  if (count >= 20) {
    btn.style.backgroundColor = "red";
  } else if (count >= 10) {
    btn.style.backgroundColor = "blue";
  } else if (count >= 5) {
    btn.style.backgroundColor = "yellow";
  }

  if (!isActiveTaimer) {
    isActiveTaimer = true;
    intervalId = setInterval(() => {
      time--;
      taimer.textContent = `Таймер: ${time}`;
      if (time === 0) {
        clearInterval(intervalId);
        btn.disabled = true;
        taimer.textContent = `Вітаю, ти наклікав ${count}`;
        btn.style = "";
        btnRestart.style.display = "block";
      }
    }, 1000);
  }
});

const text = document.querySelector(".text");

const taimer = document.createElement("p");
taimer.textContent = `Таймер: ${time}`;
text.append(taimer);

const btnRestart = document.createElement("button");
btnRestart.textContent = `Ще спроба`;
btnRestart.style.marginTop = "30px";
btn.after(btnRestart);
btnRestart.addEventListener("click", restartGame);
btnRestart.style.display = "none";
function restartGame() {
  count = 0;
  time = 3;
  isActiveTaimer = false;
  btn.disabled = false;
  btn.style = "";
  clearInterval(intervalId);
  p.textContent = "Лічильник: 0";
  taimer.textContent = `Таймер: ${time}`;
  btnRestart.style.display = "none";
}
