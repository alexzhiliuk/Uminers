const gallery = document.querySelector('.gallery');
let scrollStart = 0;
let scrollDirection = 1; // 1 - вправо, -1 - влево

function startScrolling() {
    if (gallery.scrollWidth > gallery.clientWidth) {
        scrollInterval = setInterval(scrollGallery, 10);
    }
}

function scrollGallery() {
    const now = performance.now();
    const elapsed = now - scrollStart;
    scrollStart = now;

    const scrollAmount = elapsed * 0.1 * scrollDirection; // скорость 0.1 px/ms
    gallery.scrollLeft += scrollAmount;

    if (scrollDirection === 1 && gallery.scrollLeft >= gallery.children[0].offsetWidth + 24) {
        gallery.scrollLeft = 0;
        gallery.appendChild(gallery.children[0]);
    } else if (scrollDirection === -1 && gallery.scrollLeft <= 0) {
        gallery.scrollLeft = gallery.children[0].offsetWidth + 24;
        gallery.insertBefore(gallery.children[gallery.children.length - 1], gallery.children[0]);
    }
}

function reverseScrollDirection() {
    scrollDirection *= -1;
}

startScrolling();

// Переворачиваем направление скроллинга, когда достигаем края галереи
gallery.addEventListener('scroll', () => {
    if (gallery.scrollLeft === 0 || gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
        reverseScrollDirection();
    }
});