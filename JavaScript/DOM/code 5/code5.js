const images = document.querySelectorAll('.gallery-img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

images.forEach(img => {
    img.addEventListener('click', () => {
        modalImg.src = img.src;
        modal.style.display = 'flex';
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

document.querySelector('.modal-content').addEventListener('click', e => {
    e.stopPropagation();
});
