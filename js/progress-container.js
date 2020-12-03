// When the user scrolls the page, execute myFunction
window.onscroll = miFunction; 
function miFunction(){
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scroll / height) * 100;
  document.getElementById("barra").style.width = scrolled + "%";
}