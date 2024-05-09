gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".reveal-type");

splitTypes.forEach((char, i) => {
  const text = new SplitType(char, { types: "chars" });

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
      scrollTrigger: title,
      onComplete: () => {
        gsap.to(title, {
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      },
    }
  );
});
gsap.utils.toArray("#one").forEach((one) => {
  gsap.fromTo(
    one,
    {
      opacity: 0,
      y: -200,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: one,
      onComplete: () => {
        gsap.to(one, {
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      },
    }
  );
});
gsap.utils.toArray("#two").forEach((two) => {
  gsap.fromTo(
    two,
    {
      opacity: 0,
      x: 200,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: two,
      onComplete: () => {
        gsap.to(two, {
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      },
    }
  );
});
gsap.utils.toArray("#three").forEach((three) => {
  gsap.fromTo(
    three,
    {
      opacity: 0,
      x: -200,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: three,
      onComplete: () => {
        gsap.to(three, {
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      },
    }
  );
});
gsap.from(".image", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  delay: 1,
});