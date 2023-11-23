//below code is used to create a responsive navigation menu for a web page.

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header=document.querySelector('.header');

menu.onclick = () =>{
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');
}

/* it will be remove whenever you want to show the team section */
window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

 if(window.scrollY > 0){
    header.classList.add('active');
 }else{
    header.classList.remove('active');
 }

}







/*it is used for team section - 2 */
/*var swiper = new Swiper(".team-slider",{
  loop:true,
  grabCursor:true,
  spaceBetween:20,
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      991: {
          slidesPerView: 3,
      },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

*/
/*So, in summary, the first part of the code imports the Swiper library, 
while the second part initializes and configures a Swiper instance for an HTML element 
with the "team-slider" class, which creates a responsive carousel/slider for your team section 
that can scroll left and right. The Swiper library is responsible for the core functionality
 of the slider, while the initialization code customizes its behavior and appearance.*/




/* it is for automatic scrolling image/
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}*/


