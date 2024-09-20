const bannerImg = document.querySelector(".bannerAd");
const drawButton = document.querySelector(".drawButton");
const hiltonLogo = document.querySelector(".hiltonLogo");
const forthetext = document.querySelector(".forthe");
const Play = document.querySelector("#Play");
const Stop = document.querySelector("#Stop");
const drawButton_wrapper = document.querySelector(".drawButton_wrapper");
let tl = gsap.timeline({
  ease: "power2.out",
  repeat: 2,
  repeatDelay: 4.50,
});

tl.from(".frame1 .content_one img", {
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.6,
  onComplete: () => {
    drawButton_wrapper.classList.add("R");
    gsap.to(drawButton, {
      opacity: 0,
      onComplete: () => {
        drawButton.classList.remove("animate");
      },
    });
  },
}).to([hiltonLogo, forthetext], {
  opacity: 0,
});

tl.from(".frame2", {
opacity:0,
  duration: 0.2,
  delay: 1,
})
  .from(
    ".bannerFooter",
    {
      opacity: 0,
      duration: 0.5, 
    },
    "one"
  )
  .from('.frame2 .content_one img',
    {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
    },
    "one"
  );

tl.to('.frame2 .content_one img', {}, "-=1")
  .from(
    ".drawButton",
    {
      onStart: () => {
        gsap.to(drawButton, {
          opacity: 1,
          onComplete: () => {
            drawButton.classList.add("animate");
            setTimeout(() => {
              drawButton_wrapper.classList.remove("R");
            }, 500);
          },
        });
      },

      onRepeat: function () {
        gsap.to(drawButton, {
          opacity: 1,
          onComplete: () => {
            drawButton.classList.add("animate");
            setTimeout(() => {
              drawButton_wrapper.classList.remove("R");
            }, 500);
          },
        });
      },
    },
    "-=1"
  )
  .to(
    hiltonLogo,
    {
      opacity: 1,
    },
    "-=0.3"
  )
  .to(forthetext, {
    opacity: 1,
    duration: 1.8,
  })

  .to('.frame2 .content_one img',
    {
      opacity: 0,
      duration: 0.6,
    },
    "-=0.8"
  )
  .from(".frame2 .content_two img",
    {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.6,
      delay:0.5
    }
  );

