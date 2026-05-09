const track = document.getElementById('gallery-track');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let index = 0;

// Movement logic
nextBtn.addEventListener('click', () => {
    const cardWidth = document.querySelector('.card').offsetWidth + 20;
    const maxIndex = track.children.length - 1;
    
    if (index < maxIndex) {
        index++;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    const cardWidth = document.querySelector('.card').offsetWidth + 20;
    
    if (index > 0) {
        index--;
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
});

// Lightbox logic
function openLightbox(src) {
    const lb = document.getElementById('lb');
    const lbImg = document.getElementById('lb-img');
    lbImg.src = src;
    lb.style.display = 'flex';
}
