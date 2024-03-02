function playSound (){
  const audio = new Audio('https://www.youtube.com/watch?v=OY_mJkgRxuM');
  audio.play();
}
const noo = document.querySelector('#noo');
noo.onclick = () => {
  playSound();
  noo.style.top = '-50px';
}
