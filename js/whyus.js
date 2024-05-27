gsap.registerPlugin(ScrollTrigger);
const section = document.getElementById("sec");
const images = document.querySelectorAll("#images");
const text = document.getElementById("text");
let tl = gsap.timeline({
  // yes, we can add it to an entire timeline!
  scrollTrigger: {
    trigger: section,
    pin: true, // pin the trigger element while active
    start: "top top", // when the top of the trigger hits the top of the viewport
    end: "+=200", // end after scrolling 500px beyond the start
    scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    snap: {
      snapTo: "labels", // snap to the closest label in the timeline
      duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
      delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
      ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
    },
  },
});

// Images animation
images.forEach((image) => {
  image.style.transformOrigin = "center";
  tl.from(
    image,
    {
      x: 0,
      y: 0,
      duration: 1 + Math.random(),
      ease: "power1.inOut",
      delay: (index) => index * 0.1,
    },
    0
  );
});
// Text animation
tl.from(
  text,
  {
    scale: 0.2,
    autoAlpha: 0,
    duration: 1,
  },
  0.5
);
