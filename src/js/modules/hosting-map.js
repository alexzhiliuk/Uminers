
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth < 768) {
        const overlayPoints = document.querySelectorAll('.overlay-point');
        const overlayMobile = document.querySelectorAll('.overlay-point-mobile');

        overlayPoints.forEach((overlayPoint, index) => {
            overlayPoint.addEventListener('click', function (e) {
                overlayMobile.forEach(mobilePoint => {
                    mobilePoint.classList.remove('slide-in')
                    if (overlayPoint.dataset.country === mobilePoint.dataset.country) {
                        console.log(overlayPoint.dataset.country)
                        console.log(mobilePoint.dataset.country)
                        e.stopPropagation();
                        document.body.style.overflow = 'hidden';
                        document.querySelector('html').style.overflow = 'hidden';
                        mobilePoint.classList.add('slide-in');

                        document.addEventListener('click', function (event) {
                            if (!mobilePoint.contains(event.target) && !overlayPoint.contains(event.target)) {
                                mobilePoint.classList.remove('slide-in');
                                document.body.style.overflow = '';
                                document.querySelector('html').style.overflow = '';
                            }
                        });
                    }
                })

            });
        });
    }
});