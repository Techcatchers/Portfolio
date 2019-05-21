// My Blogs Section
const blogs = data => {
  let output = "";

  for (let i = 0; i < data.length; i++) {
    output += `
        <div class="col-md-4 col-sm-6">
          <div class="card-box">
            <img data-src="${
              data[i].image
            }" alt="" srcset="" class="img" style="max-height: 180px; width: auto;">
            <h3 class="sub-headings"><a href="${
              data[i].link
            }" target="_blank">${data[i].title}</a></h3>
            <p class="details ellipsis m-4">${data[i].desc}</p>
          </div>
      </div>
        `;
  }

  document
    .querySelector(".blogs-section")
    .insertAdjacentHTML("beforeend", output);
};
