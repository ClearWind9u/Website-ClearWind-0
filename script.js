const noo = document.querySelector('#Noo');
noo.onclick = () => {
  noo.style.top = '-50px';
  setTimeout(()=> {
    noo.style.top = '0px';
  },1000);
}
