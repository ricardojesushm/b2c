
/*----------  SLIDER PRINCIPAL  -----------------*/
const btn_L = document.querySelector(".btn_L")
const btn_R = document.querySelector(".btn_R")
const slides=document.querySelector(".slides")
const slide=document.querySelectorAll(".slide")

btn_L.addEventListener("click", e => moverIzquierda())
btn_R.addEventListener("click", e => moverDerecha())

/* transición automática */
  setInterval(() => {
    moverDerecha()
  }, 6500);
/*---------- fn --------*/

let cont=0;
let counter=0;
let widhtImg=100/slide.length;

function moverDerecha(){
  if (counter >= slide.length-1){
    counter=0;
    cont=0;
    slides.style.transform = `translate(-${cont}%)`;
    slides.style.transition = "none"
  } else {
    counter++;
    cont = cont + widhtImg;
    slides.style.transform = `translate(-${cont}%)`;
    slides.style.transition = "all ease .6s"
  }
}

function moverIzquierda(){
  counter--;
  if (counter<0){
    counter=slide.length-1;
    cont=widhtImg*(slide.length-1)
    slides.style.transform = `translate(-${cont}%)`;
    slides.style.transition = "none"
  }else{
    cont = cont - widhtImg;
    slides.style.transform = `translate(-${cont}%)`;
    slides.style.transition = "all ease .6s"
  }
}
/*------------  fn SLIDER PRINCIPAL  -----------------*/