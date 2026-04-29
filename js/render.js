export function renderJobs(arr) {
  const value = {
    appliedListBox: document.querySelector("#appliedList"),
    interviewListBox: document.querySelector("#interviewList"),
    offerListBox: document.querySelector("#offerList"),
    rejectedListBox: document.querySelector("#rejectedList"),
  };

  Object.values(value).forEach((item) => (item.innerHTML = ""));

  arr.forEach((job) => {
    if (value.appliedListBox.dataset.status === job.status) {
      value.appliedListBox.innerHTML += `
    <div class="job-card">
      <h3>${job.position}</h3>
      <p>${job.company}</p>
      <p>${job.date}</p>
      <button class="delete-btn" data-id="${job.id}">Delete</button>
      <button class="edit-btn" data-id="${job.id}">Edit</button>
    </div>
  `;
    }
    if (value.interviewListBox.dataset.status === job.status) {
      value.interviewListBox.innerHTML += `
    <div class="job-card">
      <h3>${job.position}</h3>
      <p>${job.company}</p>
      <p>${job.date}</p>
      <button class="delete-btn" data-id="${job.id}">Delete</button>
      <button class="edit-btn" data-id="${job.id}">Edit</button>
    </div>
  `;
    }
    if (value.offerListBox.dataset.status === job.status) {
      value.offerListBox.innerHTML += `
    <div class="job-card">
      <h3>${job.position}</h3>
      <p>${job.company}</p>
      <p>${job.date}</p>
      <button class="delete-btn" data-id="${job.id}">Delete</button>
      <button class="edit-btn" data-id="${job.id}">Edit</button>
    </div>
  `;
    }
    if (value.rejectedListBox.dataset.status === job.status) {
      value.rejectedListBox.innerHTML += `
    <div class="job-card">
      <h3>${job.position}</h3>
      <p>${job.company}</p>
      <p>${job.date}</p>
      <button class="delete-btn" data-id="${job.id}">Delete</button>
      <button class="edit-btn" data-id="${job.id}">Edit</button>
    </div>
  `;
    }
  });
}
