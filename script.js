const btn = document.querySelector('button');
const body = document.querySelector('body');
const color = ['blue', 'voilet','red', 'black', 'green','pink'];
body.style.backgroundColor='yellow';
document.addEventListener('click',function(){
    const colorindex = parseInt(Math.random()*color.length);
    body.style.backgroundColor= color[colorindex];
})
