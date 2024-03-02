function playSound(){
  const audio = new Audio('https://cdn.glitch.global/5d86e2b5-4513-45c2-bf63-5f7454722378/jump-sound.mp3?v=1709354914400');
  audio.play();
}
const noo = document.querySelector('img');
noo.onclick = () => {
  playSound();
  noo.style.top = '-30px';
  setTimeout(()=> {
    noo.style.top = '0px';
  },1000);
}
