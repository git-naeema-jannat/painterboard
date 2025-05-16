const app = document.getElementsByClassName('app')[0];
const word = document.getElementsByClassName('word')[0].innerHTML;
const wordarr = word.split('');
var n = 0;
var input = document.getElementsByClassName('input')[0] 
function check(){
    console.log('yes');
}


input.addEventListener('input', check);

