try{
const gallery = document.querySelector('.gallery-slider .gallery');
let scrollStart = 0;
let scrollDirection = 1; // 1 - вправо, -1 - влево

function startScrolling() {
    if (gallery.scrollWidth > gallery.clientWidth) {
        var scrollInterval = setInterval(scrollGallery, 10);
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


startScrolling();

function cardsSlider() {

    if (window.innerWidth <= 480) {


        document.addEventListener("DOMContentLoaded", function () {
            const cardsContainer = document.querySelector('.benefits-hosting__content');
            const cards = cardsContainer.querySelectorAll('.cards-item');
            let currentIndex = 0;
            const totalCards = cards.length;
            const gap = 22;
            const cardWidth = 100;
            const adjustedWidth = cardWidth + (gap / window.innerWidth * 100);
            function updateCardsPosition() {
                cardsContainer.style.transform = `translateX(-${currentIndex * adjustedWidth}%)`;
            }

            function moveToNextCard() {
                currentIndex = (currentIndex + 1) % totalCards;
                updateCardsPosition();
            }

            function moveToPrevCard() {
                currentIndex = (currentIndex - 1 + totalCards) % totalCards;
                updateCardsPosition();
            }

            function startAutoScroll() {
                interval = setInterval(moveToNextCard, 3000);
            }

            function resetInterval() {
                clearInterval(interval);
                startAutoScroll();
            }

            let startX = 0;
            let endX = 0;

            cardsContainer.addEventListener('touchstart', function (event) {
                startX = event.touches[0].clientX; 
            });

            cardsContainer.addEventListener('touchmove', function (event) {
                endX = event.touches[0].clientX; 
            });

            cardsContainer.addEventListener('touchend', function () {
                if (startX > endX + 50) {
                    moveToNextCard();
                } else if (startX < endX - 50) {
                    moveToPrevCard();
                }
                resetInterval(); 
            });

            startAutoScroll(); 
        });
    }
}

cardsSlider();
}catch{

}