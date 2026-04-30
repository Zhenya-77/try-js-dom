const form = document.querySelector(".form");

form.addEventListener("submit", makeMesPromise);

function makeMesPromise(event) {
  event.preventDefault();

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then((delay) => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });

  form.reset();
}

// Promise(makeMesPromise())
