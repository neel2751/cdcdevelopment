$(function () {
  $("#links").load("./compenents/navbar.html");
  $("header").load("./compenents/header.html", function () {
    let navUri = window.location?.href.split("/"); // get current url
    let navUriPath = navUri[navUri.length - 1]; // get current url path
    let navUriPathArr = navUriPath.split("."); // get current url path
    const menuLinks = $(".menu a");
    menuLinks.each(function () {
      if (navUriPathArr[0] === $(this).attr("id")) {
        // check if current url path is equal to menu link href
        $(this).removeClass("text-[#141414]");
        $(this).addClass("text-electric-600 font-semibold"); // add active class to menu link
      } else {
        // if not
        $(this).addClass("text-[#141414]");
        $(this).removeClass("text-electric-600 font-semibold"); // remove active class from menu link
      }
    }); // end of each
    $("button").on("click", function () {
      $(".open").toggleClass("hidden");
      $(".close").toggleClass("hidden");
      $(".menu").toggleClass("hidden");
    });
  });
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
