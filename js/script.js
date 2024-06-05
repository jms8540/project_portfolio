console.log("hihi");

// scrollTrigger
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


// home
gsap.to('.arrow', { y: 0, repeat: -1, repeatDelay: 0.1, })
gsap.to('.arrow', { y: 30, repeat: -1, yoyo: true, })


//about
let about = gsap.fromTo('.innerItem > div', { opacity: 0, duration: 0.2, }, { opacity: 1, stagger: 0.2, });
ScrollTrigger.create({
    trigger: '.skillBox',
    // markers: true,
    start: "top center",
    end: "bottom center",
    animation: about,
    toggleActions: "restart none none reverse",
});


// project
// let projects = gsap.fromTo('.innerItem > div', { opacity: 0, duration: 0.2, }, { opacity: 1, stagger: 0.2, });
// ScrollTrigger.create({
//     trigger: '.skillBox',
//     markers: true,
//     start: "top center",
//     end: "bottom center",
//     animation: projects,
//     toggleActions: "restart none none reverse",
// });

// const sectionColors = [
//     "#f2eee5",
//     "#e5c1c5",
//     "#c3e2dd",
//     "#6eceda",
//     "#FB9DA7",
//     "#FCCCD4",
//     "#FBDEA2",
//     "#F2E2C6",
//     "#8EB695",
// ];

// gsap.set(".section", {
//     backgroundColor: gsap.utils.wrap(sectionColors),
// });

// const textBox = document.querySelectorAll('.textContainer')[0].offsetWidth;
// gsap.to('.textContainer', {
//     x: -(textBox - window.innerWidth),
//     scrollTrigger: {
//         trigger: ".demo-text",
//         start: "20% center",
//         end: "80% center",
//         markers: true,
//         scrub: 1,
//         onScrubComplete() {
//             console.log("Scrub running");
//         },
//     },
// });

// gsap.from('.imageContainer',
//     {
//         x: -(document.querySelector('.imageContainer').offsetWidth - innerWidth),
//         scrollTrigger: {
//             trigger: ".demo-image",
//             start: "26% center",
//             end: "74% center",
//             markers: true,
//             scrub: 3,
//         },
//     });


// blog&contact

const lists = document.querySelectorAll(".Contact_ul li");
lists.forEach((e, index) => {
    gsap.set('.Contact_ul li', { y: 80, opacity: 0, });

    gsap.to(e, {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: e,
            start: "bottom 100%",
            end: "bottom 100%",
            // markers: true,
            scrub: 1.4,
        },
    });
});


// innerHeight
// window.addEventListener('resize', () => {
//     document.body.style.height = `${window.innerHeight}px`;
// });

// document.addEventListener('DOMContentLoaded', () => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Update body height initially
//     document.body.style.height = `${window.innerHeight}px`;

//     gsap.utils.toArray('.navbar a').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             gsap.to(window, {
//                 scrollTo: { y: `#${this.dataset.target}`, autoKill: false },
//                 duration: 1
//             });
//         });
//     });

//     gsap.from(".homeText", { opacity: 0, y: -50, duration: 1, stagger: 0.2 });

//     ScrollTrigger.batch(".skill_icon", {
//         start: "top 80%",
//         onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 })
//     });

//     ScrollTrigger.batch(".projectItem", {
//         start: "top 80%",
//         onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 })
//     });

//     ScrollTrigger.batch(".Contact_ul li", {
//         start: "top 80%",
//         onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 })
//     });
// });
