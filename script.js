const gif = document.querySelector('.giffy');
const yesBtn = document.querySelector('.yes');
const noBtn = document.querySelector('.no');
const question = document.querySelector('.question');
const buttons = document.querySelector('.buttons');
const text = document.querySelector('.text');
const body = document.querySelector('body');

function yes() {
    text.style.display = 'block';
    buttons.style.display = 'none';
    question.textContent = "Aeeeeeeeeeeee!!!!!";
    gif.src = 'https://i.pinimg.com/originals/2b/0f/d1/2b0fd1b5726da8a1e999a720e1bed371.gif';

    createHearts(100);

    setTimeout(function() {
        window.location.href = "./Cardmor.html";
    }, 2000); 
}

var phrase = ['pq não?', 'Você não me ama? :(', 'Ainda não?', 'Deveria ser sim!', 'Simmm ;)'];
var gifs = ['https://www.imagensanimadas.com/data/media/373/coracao-imagem-animada-0518.gif', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2S09rEoUX4dxGqu2EGWVLIh6a6NFOd2UVYLRZXFoDqg&s', 
'https://media.tenor.com/Nqf3-gUgySsAAAAM/cat-sad-gato-triste.gif', 'https://i.makeagif.com/media/8-07-2016/e6mNld.gif', 'https://64.media.tumblr.com/22abe9f6233a4c24d5cf800da704da60/tumblr_p64wsu1hFr1uoe05xo1_400.gif', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqGO5n14LBPmdGqF7swiSd8OqBkIhh0ySzUfvx2YR21A&s'];
var noCount = 0;

function no() {
    if (noCount != 5) {
        noBtn.style.position  = 'absolute';
        var newX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        var newY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.left = newX + "px";
        noBtn.style.top = newY + "px";
        noBtn.textContent = phrase[noCount];
        gif.src = gifs[noCount];
        noCount++;
    } else {
        yes();
    }
}

function createHearts(numbers) {
    for (var i = 0; i < numbers; i++) {
        var heart = document.createElement("img");

        heart.src = 'assets/Heart_corazón.svg.png';
        heart.alt = "Heart";
        heart.classList.add("heart");
        heart.classList.add("heart" + (i % 3 + 1)); // Assigning different animation classes
        var size = Math.floor(Math.random() * 51) + 50; // Random size between 50 and 100
        heart.style.width = size + "px";
        heart.style.height = size + "px";
        heart.style.left = Math.random() * (window.innerWidth - size) + "px";
        heart.style.top = Math.random() * (window.innerHeight - size) + "px";
        document.querySelector('body').appendChild(heart);
        setTimeout(function() {
            heart.remove();
        }, 1500); 
    }
}
