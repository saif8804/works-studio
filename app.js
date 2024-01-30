function loading(){

let tl = gsap.timeline();

tl.to(".yellow-1",{
      top: "-100%",
      delay: 0.5,
      duration: 0.5,
      ease:"expo.out"
})
 
tl.from(".yellow-2",{
    top: "100%",
    delay: 0.3,
    duration: 0.5,
    ease:"expo.out"
},"anim")

tl.to(".loader h1",{
    delay:0.2,
    duration:0.5,
    color: "black",
},"anim")

tl.to(".loader",{
    opacity:0
})
tl.to(".loader",{
    display: "none"
})

}

loading();


function loco(){
    let elems = document.querySelectorAll(".elem");
let page2 = document.querySelector(".page-2");

elems.forEach((ele)=>{
   ele.addEventListener("mouseenter",()=>{
      let bgImg = ele.getAttribute("data-img");
      page2.style.backgroundImage = ` url(${bgImg}) `;
   })
})

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

document.querySelector(".footer h2").addEventListener("click",()=>{
     scroll.scrollTo(0)
})
}

loco();