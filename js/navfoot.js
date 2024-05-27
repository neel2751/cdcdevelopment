$(function () {
  $("#links").load("./compenents/navbar.html");
  // $("#header").load("compenents/header.html");
  $("header").load("./compenents/header.html");
  //   $("#content").load("index.html").insertAfter($("#navbar"));
  $("footer").load("./compenents/footer.html");
});

// window.addEventListener('pageswap', async (e) => {
//   if(e.viewTransition) {
//     const url = new URL(e.activation.entry.url);
//     const profile = extractProfileFromURL(url);
//     document.querySelector(`#${profile} span`)
//     .style.viewTransitionName = 'profile-name';
//     document.querySelector(`#${profile} img`).style.viewTransitionName = 'profile-avatar'
//   }
// })
