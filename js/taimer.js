const timePicker = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]");

startBtn.addEventListener("click", startTimer);

startBtn.disabled = true;
let userSelectedDate;
let intervalId;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const chosenDate = selectedDates[0];
    const dataNow = new Date();
    if (dataNow.getTime() >= chosenDate.getTime()) {
      window.alert("Please choose a date in the future");
      startBtn.disabled = true;
    } else {
      userSelectedDate = chosenDate;
      startBtn.disabled = false;
    }
  },
};

flatpickr(timePicker, options);

function startTimer() {
  timePicker.disabled = true;
  startBtn.disabled = true;
  intervalId = setInterval(() => {
    const currentTime = new Date();
    const currentUserTime = userSelectedDate.getTime() - currentTime.getTime();

    if (currentUserTime <= 0) {
      clearInterval(intervalId);

      days.textContent = "00";
      hours.textContent = "00";
      minutes.textContent = "00";
      seconds.textContent = "00";

      timePicker.disabled = false;
      startBtn.disabled = true;
      return;
    }

    const objTime = convertMs(currentUserTime);

    days.textContent = objTime.days;
    hours.textContent = objTime.hours;
    minutes.textContent = objTime.minutes;
    seconds.textContent = objTime.seconds;
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}
