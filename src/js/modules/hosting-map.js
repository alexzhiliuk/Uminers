try{
    document.addEventListener('DOMContentLoaded', function () {
        if (window.innerWidth < 768) {
            const overlayPoints = document.querySelectorAll('.overlay-point');
            const overlayMobile = document.querySelectorAll('.overlay-point-popup');
    
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
                            document.querySelector('.popup-shade').style.opacity ='1';
                            mobilePoint.classList.add('popup-show');
    
                            document.addEventListener('click', function (event) {
                                if (!mobilePoint.contains(event.target) && !overlayPoint.contains(event.target)) {
                                    mobilePoint.classList.remove('popup-show');
                                    document.querySelector('.popup-shade').style.opacity ='';
                                    document.body.style.overflow = '';
                                    document.querySelector('html').style.overflow = '';
                                }
                            });
                            mobilePoint.querySelector('.cross').addEventListener('click',()=>{
                                    mobilePoint.classList.remove('popup-show');
                                    document.querySelector('.popup-shade').style.opacity ='';
                                    document.body.style.overflow = '';
                                    document.querySelector('html').style.overflow = '';
                            })
                        }
                    })
    
                });
            });
        }
    });

    const pointsContainerMain = document.querySelector('.hosting-steps__content');
    const pointsContainer = document.querySelector('.hosting-steps__points');
    const lineWrapper = document.querySelector('.hosting-steps__bg-line-wrapper');
    const line = document.querySelector('.hosting-steps__bg-line');
    
    // Функция для обработки события прокрутки
    function handleScroll() {
        if(window.innerWidth>768){
        const pointsWidth = pointsContainer.offsetWidth;
        const sectionRect = pointsContainerMain.getBoundingClientRect();
        const top = sectionRect.top;
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - top) / sectionRect.height));
    
        // Устанавливаем ширину линии в процентном соотношении с прогрессом
        line.style.width = `${scrollProgress * pointsWidth}px`;
    }else{
        const pointsHeight = pointsContainer.offsetHeight;
        const sectionRect = pointsContainerMain.getBoundingClientRect();
        const top = sectionRect.top;
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - top) / sectionRect.height));
    
        // Устанавливаем ширину линии в процентном соотношении с прогрессом
        line.style.height = `${scrollProgress * pointsHeight}px`;
    }
    }
    
    // Добавляем обработчик события скролла
    window.addEventListener('scroll', handleScroll);
    
    // Вызываем функцию handleScroll при загрузке страницы
    handleScroll();
}catch(e){

}
