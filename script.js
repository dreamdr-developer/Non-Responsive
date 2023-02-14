
gsap.from("#img1",{
    opacity:0,
    duration:1.5,
    delay:0.4,
    y:60
})
gsap.from("#img2",{
    opacity:0,
    duration:1.5,
    delay:0.4,
    x:60
})
gsap.from("#img3",{
    opacity:0,
    duration:1.5,
    delay:0.4,
    y:-60
})
gsap.from("h1",{
    delay:0.4,
    y:2,
    opacity:0,
    duration:1,
})
gsap.from("h4",{
    // delay:0.1,
    opacity:0,
    duration:1,
})
gsap.from("#section h3,#section p,#section #about-us", {
  opacity:0,
  // duration:1,
stagger:0.6,
  scrollTrigger:{
    trigger:"#section h3",
    start:"top 70%",
    scroller:"body",
    // markers:true
  }
})
// gsap.from("#secton3 #img1,#secton3 #img2,#secton3 #img3, #secton3#img4",{
//   opacity:0,
//   // duration:1.5,
//   // delay:0.4,
//   stagger:0.6,
//   // y:-20,
//   scrollTrigger:{
//     trigger:"#section3 img1",
//     start:"top 0%",
//     scroller:"#section3",
//     markers:true
//   }
// })
// gsap.from("#section3 #img4",{
//   opacity:0,
//   duration:1.5,
//   delay:0.4,
//   y:50
// })


function swiper(){
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      repeat:-1,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
swiper();

gsap.from("#section >h3",{
  // y:2,
  // duration:2,
  // opacity:0,
  duration:1,
  opacity:0,
  scrollTigger:{
    trigger:"#section >h3",
    scroller:"main",
    start:"top 60%",
markers:true    

  }

})


