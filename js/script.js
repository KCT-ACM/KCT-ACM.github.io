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
/*********************PAGE LOADER******************/
var animation=bodymovin.loadAnimation({
	container:document.getElementById('page-load'),
	loop:true,
	autoplay:true,
	path:'./js/data.json'
})
window.onload = function () {
    window.setTimeout(function () {
      $("#body").addClass("body");
    }, 1000);
  };
  $(window).on("load", function () {
    $("#page-load").delay(1000).fadeOut("slow");
  });