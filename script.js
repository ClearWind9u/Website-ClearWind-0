function Bounce(){
  const audio = new Audio('https://cdn.glitch.global/5d86e2b5-4513-45c2-bf63-5f7454722378/jump-sound.mp3?v=1709354914400');
  audio.play();
}
function Correct(){
  const audio = new Audio('https://cdn.glitch.global/5d86e2b5-4513-45c2-bf63-5f7454722378/correct.mp3?v=1709380688044');
  audio.play();
}
const status = document.querySelector('#status');
const lee = document.querySelector('#Lee');
lee.onclick = () => {
  Bounce();
  lee.style.top = '-30px';
  setTimeout(()=> {
    lee.style.top = '0px';
  },1000);
  status.innerText = "Sai rồi";
}
lee.onmouseover = () =>{
  lee.style.width = '300px';
}
lee.onmouseleave = () =>{
  lee.style.width = '250px';
  status.innerText = "Đâu là trai thẳng?";
}
const bb = document.querySelector('#BB');
bb.onclick = () => {
  Bounce();
  bb.style.top = '-30px';
  setTimeout(()=> {
    bb.style.top = '0px';
  },1000);
status.innerText = "Sai rồi";
}
bb.onmouseover = () =>{
  bb.style.width = '280px';
}
bb.onmouseleave = () =>{
  bb.style.width = '230px';
  status.innerText = "Đâu là trai thẳng?";
}
const noo = document.querySelector('#Noo');
noo.onclick = () => {
  Correct();
  noo.style.top = '-30px';
  setTimeout(()=> {
    noo.style.top = '0px';
  },1000);
  status.innerText = "Chính xác";
}
noo.onmouseover = () =>{
  noo.style.width = '290px';
}
noo.onmouseleave = () =>{
  noo.style.width = '240px';
  status.innerText = "Đâu là trai thẳng?";
}
const duy = document.querySelector('#Duy');
duy.onclick = () => {
  Bounce();
  duy.style.top = '-30px';
  setTimeout(()=> {
    duy.style.top = '0px';
  },1000);
  status.innerText = "Sai rồi";
}
duy.onmouseover = () =>{
  duy.style.width = '300px';
}
duy.onmouseleave = () =>{
  duy.style.width = '250px';
  status.innerText = "Đâu là trai thẳng?";
}