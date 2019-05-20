// Skills Section
const skills = data => {
  let output = "";

  for (let i = 0; i < data.length; i++) {
    output += `
        <div class="col-md-6 col-sm-6 skill-sep">
        <span><strong>${data[i].skill}</strong></span>
      <div class="progress">
        <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="${
          data[i].level
        }"
        aria-valuemin="0" aria-valuemax="100" style="max-width:${
          data[i].level
        }%">
        </div>
      </div>
      </div>
        `;
  }

  document
    .querySelector(".skills-section")
    .insertAdjacentHTML("beforeend", output);
};
