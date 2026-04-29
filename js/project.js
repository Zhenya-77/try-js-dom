import { openModal, closeModal, modal } from "./modal.js";

const openModalBtn = document.querySelector("#openFormBtn");
const closeModalBtn = document.querySelector("#closeModalBtn");
const boardSection = document.querySelector(".board");

openModalBtn.addEventListener("click", () => {
  resetFormMode();
  openModal();
});

closeModalBtn.addEventListener("click", () => {
  closeModal();
  resetFormMode();
});
boardSection.addEventListener("click", handleClickDelete);
boardSection.addEventListener("click", startEditJob);

import { renderJobs } from "./render.js";

const form = document.querySelector("#jobForm");

export let jobs = [];

const savedJobs = localStorage.getItem("Jobs");

if (savedJobs) {
  jobs = JSON.parse(savedJobs);
}

renderJobs(jobs);

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (form.jobId.value) {
    const currentIdJob = Number(form.jobId.value);
    const updatedJob = {
      id: currentIdJob,
      position: event.target.positionInput.value,
      company: event.target.companyInput.value,
      date: event.target.dateInput.value,
      status: event.target.statusInput.value,
      notes: event.target.notesInput.value,
    };
    jobs = jobs.map((obj) => {
      if (obj.id === currentIdJob) {
        return updatedJob;
      } else {
        return obj;
      }
    });
  } else {
    const newJob = {
      id: Date.now(),
      position: event.target.positionInput.value,
      company: event.target.companyInput.value,
      date: event.target.dateInput.value,
      status: event.target.statusInput.value,
      notes: event.target.notesInput.value,
    };

    jobs.push(newJob);
  }

  localStorage.setItem("Jobs", JSON.stringify(jobs));
  renderJobs(jobs);

  closeModal();
  resetFormMode();
}

function handleClickDelete(event) {
  if (!event.target.classList.contains("delete-btn")) {
    return;
  }

  const deletebtnId = Number(event.target.dataset.id);
  jobs = jobs.filter(({ id }) => deletebtnId !== id);
  localStorage.setItem("Jobs", JSON.stringify(jobs));
  renderJobs(jobs);
}

function startEditJob(event) {
  if (!event.target.classList.contains("edit-btn")) {
    return;
  }

  const editBtnId = Number(event.target.dataset.id);
  const editingJob = jobs.find(({ id }) => editBtnId === id);

  form.positionInput.value = editingJob.position;
  form.companyInput.value = editingJob.company;
  form.dateInput.value = editingJob.date;
  form.statusInput.value = editingJob.status;
  form.notesInput.value = editingJob.notes;
  form.jobId.value = editingJob.id;

  const modalTitle = modal.querySelector("#modalTitle");
  modalTitle.textContent = "Edit Job";
  openModal();
}

export function resetFormMode() {
  form.reset();
  form.jobId.value = "";

  const modalTitle = modal.querySelector("#modalTitle");
  modalTitle.textContent = "Add Job";
}
