export const modal = document.querySelector(".modal");

export function openModal() {
  modal.classList.add("active");
}

export function closeModal() {
  modal.classList.remove("active");
}
