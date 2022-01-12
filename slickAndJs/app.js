let productHot = document.querySelectorAll('.productHot-item');
let buttonNavbars = document.querySelector('#nav-bars');
let productMenuitems = document.querySelectorAll('.product-menu-item');
let headerNav = document.querySelector('.header-nav');
let overLay = document.querySelector('.overlay');

for(let i = 0 ; i < productHot.length; i++){
  productHot[i].addEventListener('click',function(){
      productHot[i].classList.add('active');
      for(let j = 0; j < productHot.length; j++){
        if(productHot[i] !== productHot[j]){
          productHot[j].classList.remove('active');
        }
      }
  })
}

for(let i = 0 ; i < productMenuitems.length ; i ++){
  productMenuitems[i].addEventListener("click",function(){
    productMenuitems[i].classList.toggle("active");
    for(let j = 0 ; j < productMenuitems.length; j++){
      if(productMenuitems[i] !== productMenuitems[j]){
          productMenuitems[j].classList.remove("active");
      }
    }
  })
}

headerNav.style.left = "-1000px";
buttonNavbars.addEventListener("click",function(){
  headerNav.style.left = "0px";
  overLay.classList.remove("hidden");
})

if(!overLay.classList.contains("hidden") == false){
  overLay.addEventListener("click",function(){
    headerNav.style.left = "-1000px";
    overLay.classList.add("hidden");
  })
}







