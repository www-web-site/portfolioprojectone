const orderBtn = document.getElementById("orderbtn");
const orderBtn2 = document.getElementById("orderbtn2");
const orderForm = document.querySelector(".overlay");
const close = document.querySelector(".close");
const orderBtn3 = document.querySelector(".thirdOrder")

close.addEventListener("click", () => {
    orderForm.style.display = 'none'
});

orderBtn.addEventListener("click", () => {
    orderForm.style.display = 'flex'
});

orderBtn2.addEventListener("click", () => {
    orderForm.style.display = 'flex'
})

orderBtn3.addEventListener("click", () => {
    orderForm.style.display = 'flex'
})

orderForm.addEventListener("click", (e) =>{
    if(e.target === orderForm){
        orderForm.style.display = 'none'
    }
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

AOS.init({
  duration: 800, 
  once: true 
});