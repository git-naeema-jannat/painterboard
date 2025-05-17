var testStirng = 'I am not much of a good programmer, it sounds silly that i am so ambitious';
//var testStirngArr = testStirng.split(' ');
console.log(testStirng);
const app = document.getElementsByClassName('app')[0];

var n = 0;
var input = document.getElementsByClassName('input')[0];

function check(){
        if(testStirng === input.value.trim()){
            n++;
            //document.getElementsByClassName('word')[0].innerHTML = 0;
            document.getElementsByClassName('input')[0].value = '';
            console.log('yes');
    }else{
        console.log('no');
    }
}


input.addEventListener('input', check);

