var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3500,
  },
  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
  }
})

window.onscroll = function(){
  if(document.documentElement.scrollTop  > 200){
    document.querySelector(".go-top-container").classList.add('show')
    document.querySelector(".nav-content").classList.add("fxd")
  }else{
    document.querySelector(".go-top-container").classList.remove('show')
    document.querySelector(".nav-content").classList.remove("fxd")
  }
}
document.querySelector(".go-top-container").addEventListener('click', () =>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function menu(){
  let active = "active";
  const menu = document.querySelector(".toggle");
  const barra = document.querySelector(".links")
      menu.addEventListener("click", () => {
        if(barra.classList.contains(active)){
          barra.classList.remove(active);
        }else{
          barra.classList.add(active);
        }
  });
}
menu();
