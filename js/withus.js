gsap.registerPlugin(ScrollTrigger);

// const splitTypes = document.querySelectorAll(".reveal-type");
const splitText = document.querySelectorAll(".reveal-type");

splitText.forEach((char, i) => {
  const text = new SplitText(char, { types: "chars" });

  gsap.from(text.chars, {
    scrollTrigger: {
      trigger: char,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: false,
    },
    opacity: 0.2,
    stagger: 0.02,
  });
});
gsap.utils.toArray(".title").forEach((title) => {
  gsap.fromTo(
    title,
    {
      opacity: 0,
      x: 300,
      skewX: 30,
    },
    {
      opacity: 1,
      x: 0,
      skewX: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: title,
        start: "top 80%", // Adjust as needed
        end: "bottom 20%", // Adjust as needed
        // on enter animation start again not reserve
        onLeave: () => {
          gsap.to(title, { x: 20, autoAlpha: 0, duration: 1 });
          gsap.to(".subtitle", { y: 20, autoAlpha: 0 });
          gsap.to(".button", { y: 80, duration: 0.7 });
          // for this button scrub bing is enabled so we can drag the timeline to any position and see how it plays
          // attach this button on mousemove  event and play the timeline in it's callback
        },
        // onenterback wards and onexit are also availabl
        onEnterBack: () => {
          gsap.to(title, { x: 0, autoAlpha: 1, duration: 1 });
          gsap.to(".subtitle", { y: 0, autoAlpha: 1 });
          gsap.to(".button", { y: 0, duration: 0.7 });
        },
        // toggleActions: "play none reserve play",
        onComplete: () => {
          gsap.to(title, {
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power4.inOut",
          });
        },
      },
    }
  );
});

var workElements = document.querySelectorAll(".work");

// Initialize an empty array to store IDs
var ids = [];

// Loop through each element with the class name "work"
workElements.forEach(function (element) {
  // Get all child elements of the current "work" element
  var childElements = element.querySelectorAll("[id]");
  // we have to filter out with start with colon  because some elements don't have any ID and they are just used as containers

  // Loop through each child element and extract its ID
  childElements.forEach(function (child) {
    ids.push(child.id);
  });
});

const newIds = [...new Set(ids)]; // remove duplicates
const numOfSections = newIds.filter((option) => !option.startsWith(":"));
// in array we have to add # for lenis
const options = numOfSections.map((item) => "#" + item);

// Now, ids array contains all IDs of elements under the "work" class

options.forEach((option) => {
  gsap.from(option, {
    scale: 0.7,
    autoAlpha: 0,
    ease: "power2",
    stagger: 0.35,
    duration: 1,
    scrollTrigger: {
      trigger: option, // Set the trigger to the current section
      start: "top 80%", // Adjust as needed, starts the animation when the trigger is 80% in view
      toggleActions: "play none none reverse", // Animation plays when section enters view, reverses when section leaves view
    },
  });
});

// Add a debounced mousemove event listener to reduce the frequency of animation triggers

const test = document.getElementById("test");

gsap.to(test, {
  maxWidth: "100%",
  duration: 1,
  ease: "expo.out",
  scrollTrigger: {
    trigger: "#check", // The element that will be used as the trigger
    start: "top center", // When the user scrolls down past the trigger, the animation begins
    toggleActions: "play none none reverse", // Specifies whether the animation should play forward, pause, or reverse depending on the ScrollTrigger
    scrub: 1, // When set to 1, this means the animation will react instantly when you scroll (optional)
    end: "+=500", // Sets the ending point of the scrollTrigger (optional)
    markers: true,
  },
});

// we have to check user which site to come from  beacuse if he comes from home page then it will not show back button otherwise it will show
let pathname = location.pathname;
if (location.search) {
  pathname += `?${location.search}`;
}
if (location.hash) {
  pathname += `${location.hash}`;
}
const referer = document.referrer;
// console.log("Referer:", referer);
const list = document.querySelectorAll(".list");

var navIds = [];
const classList = [
  "text-white",
  "bg-[#703bf7]",
  "border-[#cbfb45]",
  "before:text-white",
];

list.forEach((item) => {
  // for clicking the nav and animating to the correct spot
  let trigger = ScrollTrigger.create({
    trigger: item,
    start: "top top",
  });
  item.addEventListener("click", (e) => {
    // console.log(e.target.innerText); // for onclick chnage content to main div
    e.preventDefault();
    const targetOffset = trigger.offsetTop; // Get the offsetTop of the target element
    gsap.to(window, { scrollTo: { y: targetOffset }, duration: 1 }); // Scroll to the specified position
  });

  const childElements = item.querySelectorAll("[id]");

  childElements.forEach(function (element) {
    // console.log(element.textContent);
    const ids = element.id;
    const targetClass = ids.split("#").join(".");
    const targetElement = document.querySelector(targetClass); // Select the target element using the ID
    ScrollTrigger.create({
      trigger: ids,
      start: "top 20%",
      end: "bottom 20%",
      toggleActions: "play none reverse reset",
      duration: 1,
      //   onToggle: (self) => console.log("toggled, isActive:", self.isActive),
      onToggle: ({ isActive }) => {
        if (isActive) {
          targetElement.classList.add(...classList); // Add Tailwind CSS classes when the trigger is active
        } else {
          targetElement.classList.remove(...classList); // Add Tailwind CSS classes when the trigger is active
        }
      },
      onEnter: (self) => {
        const visibleSectionId = self.trigger.id;
        // console.log(visibleSectionId + " entered!");
        const navText = document.querySelector(
          `[href="#${visibleSectionId}"]`
        ).innerText;

        // number and text to show on different p tag
        const numberText = navText.split("").slice(0, 2).join("");
        const text = navText.split("").slice(2).join("");
        document.getElementById("changeNumber").innerHTML = numberText;
        document.getElementById("changeText").innerHTML = text;
      },
      onEnterBack: (self) => {
        const visibleSectionId = self.trigger.id;
        // console.log(visibleSectionId + " entered!");
        const navText = document.querySelector(
          `[href="#${visibleSectionId}"]`
        ).innerText;
        const numberText = navText.split("").slice(0, 2).join("");
        const text = navText.split("").slice(2).join("");
        document.getElementById("changeNumber").innerHTML = numberText;
        document.getElementById("changeText").innerHTML = text;
      },

      //   once: true, // Ensure that the trigger fires only once
      //   onUpdate: (self) => {
      //     const visibleSectionId = self.trigger.getAttribute("id");
      //     const navText = document.querySelector(
      //       `[href="#${visibleSectionId}"]`
      //     ).innerText;
      //     document.getElementById("changeText").innerHTML = navText;
      //   },
    });
  });
});

const mobileNav = document.querySelector(".mobileNav");
const openNav = document.querySelector(".content");
const mobileNavClose = document.querySelector(".mobileNavClose");
// console.log(openNav);

mobileNav.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  openNav.classList.toggle("hidden");
});

mobileNavClose.addEventListener("click", () => {
  mobileNav.classList.toggle("hidden");
  openNav.classList.toggle("hidden");
});

// let pathname = location.pathname;
// we have to check to user when he come from like facebook  or other site so we will not show him the menu
// console.log(`Pathname is ${pathname}`)

// console.log(location);
let baseUrl = window.location?.href?.split("#")[1]?.split("?")[0];

lenis.scrollTo(`#${baseUrl}`, {
  // easing add
  easing: Power4.easeOut,
  // callback when the scrolling is finished
  onComplete: () => {
    console.log("Scroll Behaviour finished !");
    document.querySelector("#build").classList.add("active");
  },
});

requestAnimationFrame(raf);
const swipe = new Swiper(".proofSlides", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    slideShadows: false,
    shadow: false,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  autoplay: {
    delay: 3000,
    duration: 500,
  },

  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
  },
});
