const btn=document.querySelector('.share');

btn.addEventListener('click', ()=>{
    handleClick(btn);
})
const handleClick = event => {
   event.classList.toggle('shareDisplay');

document.querySelector('.social').classList.toggle('active');
  };
 