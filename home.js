let x = document.getElementById('menu');
let menuBtn = document.querySelector('#option');
let closeBtn = document.querySelector('#closeBtn');

function showMenu(){
menuBtn.style.display = 'none';
closeBtn.style.display = 'block';

    x.style.display = 'block';

}
function closeMenu(){
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
    x.style.display = 'none';
}