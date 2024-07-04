let popup = document.getElementById('popup');
let overlay = document.getElementById('main-overlay');
let close = document.getElementById('close');
let submit = document.getElementById('submit');

submit.onclick = (e) => {
     popup.style.display = 'flex';
     overlay.style.display = 'block';
};

close.onclick = (e) => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
};