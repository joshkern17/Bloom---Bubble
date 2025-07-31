const split1 = new SplitText(".sentence1", { type: "chars" });
const split2 = new SplitText(".sentence2", { type: "chars" });
const split3 = new SplitText(".sentence3", { type: "chars" });
const booking_head_split = new SplitText(".booking_text_head", { type: "words", mask: "words" });
const booking_label_split = new SplitText(".booking_text_label", { type: "words", mask: "words" });
const booking_sub_split = new SplitText(".booking_text_sub", { type: "lines", mask: "lines" });


ScrollTrigger.create({
        trigger: ".pin-height", // Monitor the position of pin-height
        start: 'top top',
        end: 'bottom bottom',
        pin: ".container" // The pinned section
    })

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".pin-height",
    start: 'top top',
    end: 'bottom bottom',
    scrub: true
  }
})

gsap.set('.testimonial_image',{
    xPercent: -40,
    yPercent: -10
})

gsap.set('.booking_preview',{
    yPercent: 30
})

// .sentence1 → .sentence2
tl.to('.sentence1', {
  yPercent: -50,
  y: '-50vh',
  ease: 'power4.in',
})

tl.to(split1.chars, {
  yPercent: -50,
  y: '-50vh',
  stagger: -0.02,
  ease: 'power2.in',
}, '<')

tl.from('.sentence2', {
  yPercent: 50,
  y: '50vh',
  ease: 'power4.out',
}, '<')

tl.from(split2.chars, {
  yPercent: 50,
  y: '50vh',
  stagger: -0.02,
  ease: 'power2.out',
}, '<')

// .sentence2 → .sentence3
tl.to('.sentence2', {
  yPercent: -50,
  y: '-50vh',
  ease: 'power4.in',
})

tl.to(split2.chars, {
  yPercent: -50,
  y: '-50vh',
  stagger: -0.02,
  ease: 'power2.in',
}, '<')

tl.from('.sentence3', {
  yPercent: 50,
  y: '50vh',
  ease: 'power4.out',
}, '<')

tl.from(split3.chars, {
  yPercent: 50,
  y: '50vh',
  stagger: -0.02,
  ease: 'power2.out',
}, '<')

tl.to('.sentence3', {
  yPercent: -50,
  y: '-50vh',
  ease: 'power4.in',
});

tl.to(split3.chars, {
  yPercent: -50,
  y: '-50vh',
  stagger: -0.02,
  ease: 'power2.in',
}, '<');

tl.fromTo('.branding_button', {
  opacity: 0,
  scale: 2,
  filter: 'blur(15px)'
}, {
  opacity: 1,
  filter: 'blur(0px)',
  ease: 'power4.out',
  duration: 1
}, '-=0.5');

tl.to('.branding_button', {
  scale: 1,
  y: '-40vh',
  ease: 'power4.inOut',
  duration: 1
}, '-=0.4');

tl.fromTo('.testimonial_image', {
  clipPath: 'inset(100% 0% 0% 0%)',
  webkitClipPath: 'inset(100% 0% 0% 0%)'
}, {
  clipPath: 'inset(0% 0% 0% 0%)',
  webkitClipPath: 'inset(0% 0% 0% 0%)',
  ease: 'power2.out',
  duration: 1
}, '-=0.6');

tl.from('.booking_preview', {
    scale: 0,
    opacity: 0
}, '-=0.5');

tl.from(booking_head_split.words, {
    yPercent: 100,
    stagger: 0.2,
    ease: 'power2.out',
    duration: 1
}, '<');

tl.from(booking_label_split.words, {
    yPercent: 100,
    stagger: 0.2,
    ease: 'power2.out',
    duration: 1
}, '-=0.5');

tl.from(booking_sub_split.lines, {
    yPercent: 100,
    ease: 'power2.out',
    stagger: 0.2,
    duration: 0.7
}, '-=0.5');

button_booking_branding

tl.from('#button_booking_branding', {
    yPercent: 50,
    ease: 'power2.out',
    opacity: 0,
    duration: 0.7
}, '-=0.5');
