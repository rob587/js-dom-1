const accendiBtn = document.getElementById('btn-on')
const spegniBtn = document.getElementById('btn-off')
const image = document.getElementById('image')

accendiBtn.addEventListener('click', function(){
    image.src = 'img/yellow_lamp.png'
});

spegniBtn.addEventListener('click', function(){
    image.src = 'img/white_lamp.png'
});

