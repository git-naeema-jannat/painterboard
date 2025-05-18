var testStirng = "The mind is not a vessel to be filled, but a fire to be kindled. In the quiet hours of the morning, ambition flickers like a candle- fragile, but bright. Every keystroke you make is a tiny defiance against the ordinary. So type, stumble, try again. You're not just writing words; you're writing who you become";
var testStirngArr = testStirng.split('. ');
console.log(testStirng);
const app = document.getElementsByClassName('app')[0];
var gameStart = false;
var n = 0;
var p = 0;
var input = document.getElementsByClassName('input')[0];
var sentence = document.getElementsByClassName('word')[0];
sentence.innerHTML = testStirngArr[n];
function check(){
    if (testStirngArr[n] === input.value.trim()) {
            n++;
            p += input.value.trim().length;
            //document.getElementsByClassName('word')[0].innerHTML = 0;
            document.getElementsByClassName('input')[0].value = '';
            sentence.innerHTML = testStirngArr[n];
            console.log('yes');
    }else{
        console.log('no');
    }
    if (!gameStart && input.value.length > 0) {
        gameStart = true;
        setTimeout(timer, 60000); // 60s
      }
}

function timer(){
    input.disabled = true;
    let btn = document.createElement('button');
    btn.innerHTML = 'Rematch?';
    btn.id = 'rematch';
    btn.setAttribute("onclick", "rematch()");
    let h1 = document.createElement('h1');
    h1.innerHTML ='Times Up! Your WPM = ' +  p / 5;
    h1.id = 'nice-job'
    app.appendChild(btn);
    app.appendChild(h1);
}
input.addEventListener('input', check);

function rematch(){
    input.disabled = false;
    n = 0;
    document.getElementById('rematch').remove();
    document.getElementById('nice-job').remove();
    gameStart = false;
    input.value = '';
}
