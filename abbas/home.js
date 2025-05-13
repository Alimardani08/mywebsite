function showMenu(menuId) {
  document.getElementById("content").innerHTML = "";
  let content = "";
  switch (menuId) {
    case "home":
      content = `<div class="col-12 mt-5 mb-5 ">
        <h2 class="text-center">Welcome to my homepage!</h2>
        <p class="text-center">This is where you can learn more about me.</p>
      </div>`;
      break;
    case "skills":
      content = `
      <div class=" row justify-content-center mt-3 mb-5">
  <div class="col-md-6 ">
      <h3 class="progress-title">HTML</h3>
      <div class="progress">
          <div class="progress-bar" style="width:70%; background:#c0392b;">
              <div class="progress-value">70%</div>
          </div>
      </div>

      <h3 class="progress-title">CSS</h3>
      <div class="progress">
          <div class="progress-bar" style="width:65%; background:#2980b9;">
              <div class="progress-value">65%</div>
          </div>
      </div>
      <h3 class="progress-title">JavaScript</h3>
      <div class="progress">
          <div class="progress-bar" style="width:50%; background:#f39c12;">
              <div class="progress-value">50%</div>
          </div>
      </div>
      <h3 class="progress-title">Bootstrap</h3>
      <div class="progress">
          <div class="progress-bar" style="width:85%; background:#8e44ad;">
              <div class="progress-value">85%</div>
          </div>
      </div>
  </div>
</div>

      `;
      break;
    case "about me":
      content = `
            <section>
      <div class="container py-3  rounded-4 ">
        <div></div>

        <article class="postcard dark blue rounded-4">
          <a class="postcard__img_link">
            <img
              class="postcard__img"
              src="img/sami-matias-breilin-UZOpP-YHe9Q-unsplash.jpg"
              alt="Image Title"
            />
          </a>
          <div class="postcard__text  ">
            <div class="postcard__preview-txt text-center">
              Hi, my name is Amirmohammad. I am seventeen years old.<br />
               I am a beginner in programming and I am decided to improve my skills in this field.
               </br> Thank you for taking the time to visit my website.
            </div>
          </div>
        </article>
      </div>
    </section>`;
      break;
    default:
      content = '<div class="col-lg-4 col-md-12 mb-4"></div>';
      break;
  }
  document.getElementById("content").innerHTML = content;
}
