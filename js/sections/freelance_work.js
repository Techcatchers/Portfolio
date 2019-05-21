// Freelance Work Section
const freelanceWork = data => {
  let output = "";

  for (let i = 0; i < data.length; i++) {
    output += `
        <div class="row ${i % 2 == 1 ? "row-reverse" : ""}">
    <div class="col-md-5 col-sm-5 showcase">
      ${data[i].showcase}
    </div>
    <div class="col-md-7 col-sm-7">
      <h2 class="sub-headings">${data[i].name}</h2>
      <p class="details">${data[i].intro}</p>
      <p class="details"><strong>About the Project</strong><br>
      <ul>`;

    data[i].features.forEach(feature => {
      output += `<li>
            ${feature}
          </li>`;
    });

    output += `</ul></p>
      <p class="details"><strong>Technologies</strong><br>`;

    data[i].technologies.forEach((tech, index) => {
      if (index != 0) {
        output += ", ";
      }
      output += `${tech}`;
    });

    output += `</p>
      <a href="${
        data[i].links[0].link
      }" class="detail-links single btn-danger" target="_blank">${
      data[i].links[0].name
    }</a>
    </div>
  </div>
        `;
  }

  // Add Web Templates section
  output += `
    <div class="row">
    <h2 class="sub-headings"><strong>Web Templates</strong></h2>
    <div class="col-md-4 col-sm-4">
      <img src="./images/photography.gif" alt="" class="img web-template">
    </div>
    <div class="col-md-4 col-sm-4">
      <img src="./images/login.jpg" alt="" class="img web-template">
    </div>
    <div class="col-md-4 col-sm-4">
      <img src="./images/PSDhtml.gif" alt="" class="img web-template">
    </div>

    </div>
    `;

  document
    .querySelector(".freelance-work-section")
    .insertAdjacentHTML("beforeend", output);
};
