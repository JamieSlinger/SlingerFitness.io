let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

//animations

const tl= gsap.timeline({defaults: {ease: "power1.out"}});


tl.to('header',{x: "0%", duration:1});

tl.to('.home-text',{x: "0%", duration:1},"-=1");

gsap.registerPlugin(ScrollTrigger);


//gsap.to('.services th,td',{ScrollTrigger:{trigger: '#services', start:'top top',x: "0%", duration:1, stagger:0.25}});

gsap.to('.services th ,td',{scrollTrigger: '.services', start:'top top',x: "0%", duration:1, stagger:0.25});
//gsap.to(' .table-hidden tr',{scrollTrigger: '.services', start:'top top',x: "0%", duration:1, stagger:0.25});