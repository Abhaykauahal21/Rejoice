function locoScroll(){
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
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();
}

locoScroll();

function cursorEffect(){
    let page1Content = document.querySelector("#page1-content");
    // let page4 = document.querySelector("#page4")
let cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
        
    })
})
page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1
        
        
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0
        
    })
})
}

cursorEffect();


function page2Animation() {
    gsap.from(".elem h1", {
        y:200,
        stagger: 0.2,
        duratin: 1,
        ScrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 47%",
        end: "top 46%",
        markers: true,
        scrub:2
        }
    })
}

function slideAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
}

slideAnimation();

let tl = gsap.timeline()
tl.from("#loader h3",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1

})

tl.to("#loader h3",{
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.1
})

tl.to("#loader",{
    opacity:0
})

tl.to("#loader",{
    display:"none"
})

tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1
})

tl.from("#page2 .content h3",{
    y:100,
    duration:1,
    stagger:0.2,
})
