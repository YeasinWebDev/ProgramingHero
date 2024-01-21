function loader() {
    disableScroll()
    const tl = gsap.timeline()
    tl.from(".loader h1", {
        y: 200,
        duration: 1,
        stagger: 0.25,
        opacity: -2
    })

    tl.to(".loader h1", {
        y: -200,
        duration: 2,
        stagger: 0.2,
        opacity: -2
    })

    tl.to(".loader", {
        duration: 1,
        top: "-100vh",
        delay: -1.2,
        onComplete: enableScroll
    })

    tl.from(".hero-text h1 span , .hero-text p, .hero-text button", {
        x: -200,
        duration: 1,
        opacity: -2,
        stagger: 0.35,
        delay: -1.2
    })

    tl.from(".hero .img img, .hero .img div", {
        x: 200,
        duration: 1,
        opacity: -2,
        stagger: 0.35,
        delay: -0.8
    })

}



function disableScroll() {
    // Add a class to the body to prevent scrolling
    document.body.classList.add("no-scroll");
    
    // Save the current scroll position
    const scrollY = window.scrollY;

    // Set the body position to fixed and top to the negative value of the current scroll position
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
}

function enableScroll() {
    // Remove the class to allow scrolling
    document.body.classList.remove("no-scroll");

    // Retrieve the saved scroll position and reset the body's position and top
    const scrollY = parseInt(document.body.style.top, 10) || 0;
    document.body.style.position = "";
    document.body.style.top = "";

    // Scroll to the saved position
    window.scrollTo(0, scrollY);
}


// page 2 scroll
const featured = () => {
    const tl = gsap.timeline()

    tl.from(".featured-cont div", {
        y: 200,
        duration: 1,
        opacity: -2,
        stagger: 0.25,
        scrollTrigger: {
            trigger: ".featured-cont",
            scroller: "body",
            start: "top 80% ",
            end: "top 75% ",
            // markers: true,
            scrub: 2
        }

    })
}


const freshly = () => {
    const tl = gsap.timeline()

    tl.from(".freshly-img div , .freshly-img img", {
        x: 200,
        duration: 1,
        opacity: -2,
        stagger: 0.25,
        scrollTrigger: {
            trigger: ".freshly-img",
            scroller: "body",
            start: "top 60% ",
            end: "top 70% ",
            // markers: true,
            scrub: 2
        }

    })

    tl.from(".freshly-text h1, .freshly-text p, .freshly-text h4",{
        x: -200,
        duration: 2,
        opacity: -2,
        stagger: 0.25,
        scrollTrigger: {
            trigger: ".freshly-text",
            scroller: "body",
            start: "top 65% ",
            end: "top 70% ",
            // markers: true,
            scrub: 2
        }
    })
}

const client =() =>{
    const tl = gsap.timeline()

    tl.from(".client", {
        duration: 1,
        scale:1.2,
        opacity: -2,
        stagger: 0.25,
        scrollTrigger: {
            trigger: ".client",
            scroller: "body",
            start: "top 85% ",
            end: "top 90% ",
            // markers: true,
            scrub: 2
        }

    })

    tl.from(" .right-1, .right-2,  .right-3", {
        duration: 2,
        scale:-0.5,
        opacity: -2,
        stagger: 0.25,
        scrollTrigger: {
            trigger: ".client",
            scroller: "body",
            start: "top 75% ",
            end: "top 80% ",
            // markers: true,
            scrub: 2
        }

    })
}


const news =() =>{
    const tl = gsap.timeline()

    tl.from(".news h2, .news p", {
        y:200,
        duration: 1,
        opacity: -2,
        // stagger:0.25,
        scrollTrigger: {
            trigger: ".news",
            scroller: "body",
            start: "top 85% ",
            end: "top 90% ",
            // markers: true,
            scrub: 2
        }

    })

    tl.from(" .newsimg .card", {
        duration: 2,
        scale:-0.5,
        opacity: -2,
        stagger: 0.25,
        scrollTrigger: {
            trigger: ".news",
            scroller: "body",
            start: "top 85% ",
            end: "top 90% ",
            // markers: true,
            scrub: 2
        }

    })
}



news()
client()
freshly()
featured()
loader()
