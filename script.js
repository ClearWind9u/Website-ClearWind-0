function playSound(){
  const audio = new Audio('https://cdn.glitch.global/5d86e2b5-4513-45c2-bf63-5f7454722378/jump-sound.mp3?v=1709354914400');
  audio.play();
}
const lee = document.querySelector('#Lee');
lee.onclick = () => {
  playSound();
  lee.style.top = '-30px';
  setTimeout(()=> {
    lee.style.top = '0px';
  },1000);
}
lee.onmouseover = () =>{
  lee.style.width = '300px';
}
lee.onmouseleave = () =>{
  lee.style.width = '250px';
}
const bb = document.querySelector('#BB');
bb.onclick = () => {
  playSound();
  bb.style.top = '-30px';
  setTimeout(()=> {
    bb.style.top = '0px';
  },1000);
}
bb.onmouseover = () =>{
  bb.style.width = '280px';
}
bb.onmouseleave = () =>{
  bb.style.width = '230px';
}
const noo = document.querySelector('#Noo');
noo.onclick = () => {
  playSound();
  noo.style.top = '-30px';
  setTimeout(()=> {
    noo.style.top = '0px';
  },1000);
}
noo.onmouseover = () =>{
  noo.style.width = '290px';
}
noo.onmouseleave = () =>{
  noo.style.width = '240px';
}
const duy = document.querySelector('#Duy');
duy.onclick = () => {
  playSound();
  duy.style.top = '-30px';
  setTimeout(()=> {
    duy.style.top = '0px';
  },1000);
}
duy.onmouseover = () =>{
  duy.style.width = '300px';
}
duy.onmouseleave = () =>{
  duy.style.width = '250px';
}