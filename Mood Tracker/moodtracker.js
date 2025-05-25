var month = document.getElementsByClassName('month')[0];
var days = document.getElementsByClassName('days')[0];

month.addEventListener('click', (event)=>{
    event.target.style.background = 'red';
})