window.addEventListener("DOMContentLoaded", () => {
  // Animate header
  gsap.from("header h1", {
    opacity: 0,
    y: -50,
    duration: 1
  });

  gsap.from("header p", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.5
  });

  // Animate sections on scroll
  gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 90%",
      },
      opacity: 0,
      y: 50,
      duration: 1
    });
  });
});
