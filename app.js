function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);


    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
locomotiveAnimation();

function videoPlayIcon() {
    var vdoCon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");

    vdoCon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            opacity: 1,
            scale: 1
        })
    })
    vdoCon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            opacity: 0,
            scale: 0
        })
    })
    vdoCon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 70,
            top: dets.y - 80
        })
    })
}
videoPlayIcon();


function headingTextAnimation() {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        stagger: 0.3
    })
    gsap.from("#page1 #video-container", {
        scale: 0.3,
        opacity: 0,
        delay: 1.3,
        duration: 0.5
    })
}
headingTextAnimation();


function cursorAnnimation() {
    document.addEventListener("mousemove", (dets) => {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        })
    })

    document.querySelectorAll(".child").forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to("#cursor", {
                transform: "translate(-50%,-50%) scale(1)",
            });
        });
        elem.addEventListener("mouseleave", function () {
            gsap.to("#cursor", {
                transform: "translate(-50%,-50%) scale(0)",
            });
        });
    });
}
cursorAnnimation();



function navBarAnimation() {

    gsap.to("#nav-part1 svg", {
        transform: "translateY(-100%)",
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            start: "top 0",
            end: "top -4%",
            scrub: true,
        },
    });
    gsap.to("#nav-part2 #links", {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
            trigger: "#page1",
            scroller: "#main",
            start: "top 0",
            end: "top -5%",
            scrub: true,
        },
    });

}
navBarAnimation();


gsap.from(".bottom-part h1", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.3,
    scrollTrigger:{
        trigger:".bottom-part",
        scroller: "#main",
        start:"top 90%",
        end:"top 0%",
       
    }
})
gsap.from(".bottom-part p",".bottom-part a", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    delay: 0.5,
    stagger: 0.3,
    scrollTrigger:{
        trigger:".bottom-part",
        scroller: "#main",
        start:"top 90%",
        end:"top 0%",
        scrub:true
    }
})