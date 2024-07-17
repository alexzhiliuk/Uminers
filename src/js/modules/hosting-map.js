$(document).ready(function(){
    $('.overlay-point').hover( function(){
        $('.overlay-point__body').addClass('show');
    }, function(){
        $('.overlay-point__body').removeClass('show');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const overlayPoints = document.querySelectorAll('.overlay-point');
    const overlayPointMobiles = document.querySelectorAll('.overlay-point-mobile');

    console.log(overlayPoints)
    console.log(overlayPointMobiles)
    overlayPoints.forEach(function(overlayPoint, index) {
        overlayPoint.addEventListener('click', function() {
            // Скрыть все overlay-point-mobile
            overlayPointMobiles.forEach(function(overlayPointMobile) {
                overlayPointMobile.classList.remove('show-popup');
            });

            // Показать соответствующий overlay-point-mobile
            overlayPointMobiles[index].classList.add('show-popup');
        });
    });
});