const toggleCollapse=document.querySelector('nav .ham-burger');
const nav=document.querySelector('nav');
toggleCollapse.onclick=()=>{
    nav.classList.toggle("collapse");
    if($('.ham').hasClass("fa-bars")){
      $('.ham').addClass("fa-times").removeClass("fa-bars")
    }
    else{
      $('.ham').addClass("fa-bars").removeClass("fa-times")
    }
}
const speed = 1000;

    $('a[href*="#"]')
      .filter((i, a) => a.getAttribute('href').startsWith('#') || a.href.startsWith(`${location.href}#`))
      .unbind('click.smoothScroll')
      .bind('click.smoothScroll', event => {
        const targetId = event.currentTarget.getAttribute('href').split('#')[1];
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          event.preventDefault();
          $('html, body').animate({ scrollTop: $(targetElement).offset().top }, speed);
        }
      });
/*********************PAGE LOADER******************/
var animation=bodymovin.loadAnimation({
	container:document.getElementById('page-load'),
	loop:true,
	autoplay:true,
	path:'./js/data.json'
})
animation.setSpeed(2);
window.onload = function () {
    window.setTimeout(function () {
      $("#body").addClass("body");
    }, 1500);
  };
  window.onbeforeunload = function () {
    window.scrollTo(0,0);
};
  $(window).on("load", function () {
    $("#page-load").delay(1500).fadeOut("slow");
  });
  /***************************MAIN SLIDER TEXT*********************** */
  $('.theme-text').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    center: true,
    autoplay:true,
    dots:false,
    touchDrag:false,
    mouseDrag:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
/********************************************************************** */
/***************************************Vanilla Tilt*************************** */
// var destroyBox=document.querySelectorAll(".container");
// VanillaTilt.init(destroyBox, {
//   max: 25,
//   speed: 400
// });
// var width=screen.width;
// if(width<=1089){
//   destroyBox.vanillaTilt.destroy();
// }
const w = screen.width;
if(w > 1089) { 
  VanillaTilt.init(document.querySelectorAll(".container"), {
  max: 30,
  speed: 3000
})}
else {
    console.log(w);
 }