document.addEventListener("DOMContentLoaded", function(){
    const images = ["images/ball1.png", "images/ball2.png", "images/ball3.png", "images/ball4.png", "images/ball5.png"];
    const magicImg = document.getElementById('img');
    const click = document.getElementById('click');

    click.addEventListener('click', () => {
        let value = Math.floor(Math.random () * 5) + 1;

        magicImg.src = images[value - 1];
    })
})