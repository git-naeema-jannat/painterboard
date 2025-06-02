var month = document.getElementsByClassName('month')[0];
var days = document.getElementsByClassName('days')[0];
var n = 0;
var colorarr = ['#C91411', '#F9CC29', '#FA6A10', '#03BE18', '#F8AECA'];
var moodarr = ['Angry', 'Meh', 'Excited', 'Happy', 'Calm']
var date = new Date();
var today = date.getDate();
month.addEventListener('click', (event)=>{
    //console.log(event.target.querySelector('p').innerHTML)
    if(today == event.target.querySelector('p').innerHTML){
        
        event.target.querySelectorAll('h2').forEach(element => {
        element.remove();
    });
    event.target.style.background = colorarr[n];
    let h2 = document.createElement('h2');
    h2.innerHTML = moodarr[n];
    event.target.appendChild(h2);
    n++;
    if(n === colorarr.length){
        n = 0;
    }
}    
})

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var now = date.getMonth();
var number = now;
console.log(months[5]);
document.getElementsByClassName('month-name')[0].innerHTML = months[now];
function prevMonth(){
    number = number -1;
    document.getElementsByClassName('month-name')[0].innerHTML = months[number];
    if (number === 0) {
  number = 11;
  //year--; // optional
}
else {
  number--;
}
}
function nextMonth(){
    number = number + 1;
    document.getElementsByClassName('month-name')[0].innerHTML = months[number];
    if (number === months.length - 1) {
  number = 0;
 // year++; // optional if you're tracking year
}
else {
  number++;
}
}