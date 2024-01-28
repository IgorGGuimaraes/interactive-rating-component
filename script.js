const rating = document.querySelector('.rating');
const thankyou = document.querySelector('.thank-you');
const submitBt = document.querySelector('#button-submit');

const radioboxes = document.querySelectorAll('.radiobox');
const buttons = document.querySelectorAll('.button-rate');

const x = document.querySelector('#x');




function resetBtn(){
    for(i=0; i<buttons.length; i++){
        buttons[i].classList.remove('active');
    }
}

buttons.forEach(function(e){
    e.addEventListener('click', resetBtn)
    e.addEventListener('click', function(){
        x.textContent=` ${e.classList[2]} `
    })
    e.addEventListener('click', function(){
        e.classList.add('active');
    })
})

function switchContent(){
    if (buttons[0].classList.contains('active') || buttons[1].classList.contains('active') || buttons[2].classList.contains('active') || buttons[3].classList.contains('active') || buttons[4].classList.contains('active')){
        rating.classList.add('hide')
        thankyou.classList.remove('hide')
    } else {
        alert('Please choose a number bellow')
    }
}

submitBt.addEventListener('click', switchContent)

