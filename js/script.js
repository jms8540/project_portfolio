// ScrollTrigger for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Home section animations
gsap.to('.arrow', { y: 0, repeat: -1, repeatDelay: 0.1 });
gsap.to('.arrow', { y: 30, repeat: -1, yoyo: true });

// About section animations
let about = gsap.fromTo('.innerItem > div', { opacity: 0, duration: 0.2 }, { opacity: 1, stagger: 0.2 });
ScrollTrigger.create({
    trigger: '.skillBox',
    start: "top center",
    end: "bottom center",
    animation: about,
    toggleActions: "restart none none reverse",
});

// Project section animations
let cont = document.querySelector("#projects");
gsap.to(".project_list", {
  ease: "none",
  x: () => -(cont.scrollWidth - window.innerWidth),
  scrollTrigger: {
    trigger: cont,
    pin: true, 
    start: "center center", 
    end: () => "+=" + (cont.scrollWidth - window.innerWidth), 
    scrub: true,
    invalidateOnRefresh: true,
    onLeave: () => {
        ScrollTrigger.refresh();
    },
    // markers: true,
  }
});


// Blog & Contact section animations
const lists = document.querySelectorAll(".Contact_ul li");
lists.forEach((e, index) => {
    gsap.set('.Contact_ul li', { y: 80, opacity: 0 });
    gsap.to(e, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: e,
            start: "bottom 100%",
            end: "bottom 100%",
            scrub: 1.4,
        },
    });
});
