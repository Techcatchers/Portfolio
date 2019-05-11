// Live Projects Section
const live_projects = data => {
    let output = "";

    for (let i = 0; i < data.length; i++) {
        output += `
        <div class="row ${i % 2 == 1 ? 'row-reverse' : ''}">
    <div class="col-md-5 col-sm-5 showcase">
      ${data[i].showcase}
    </div>
    <div class="col-md-7 col-sm-7">
      <h2 class="sub-headings">${data[i].name}</h2>
      <p class="details">${data[i].intro}</p>
      <p class="details"><strong>Main Features</strong><br>
      <ul>`

        data[i].features.forEach(feature => {
            output += `<li>
            ${feature}
          </li>`
        })

      output += `</ul></p>
      <p class="details"><strong>Technologies</strong><br>`
      
      data[i].technologies.forEach((tech, index) => {
          if (index != 0) {
              output += ', '
          }
          output += `${tech}`
      });
      
      output += `</p>
      <a href="${data[i].links[0].link}" class="detail-links btn-success" target="_blank">${data[i].links[0].name}</a>
      <a href="${data[i].links[1].link}" class="detail-links btn-primary" target="_blank">${data[i].links[1].name}</a>
    </div>
  </div>
        `
    }

    document.querySelector('.live-project-section').insertAdjacentHTML('beforeend', output);
}