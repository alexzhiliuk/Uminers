try{
const graphicLine = document.querySelector('.progressBar__line_progress');
const container = document.querySelector('.progressBar')

const progress = () => {
    if (document.body.offsetWidth < 1600) {
        if (graphicLine && container) {
            window.addEventListener('scroll', () => {
                const graphicPosition = container.getBoundingClientRect();
                const scrollProgress = ((window.innerHeight - graphicPosition.top) + 150) / container.offsetHeight;
                graphicLine.style.width = `${65 * scrollProgress / 4}%`;
            });
        }
    }
    else {
        graphicLine.style.maxWidth = 60 + 'vw';
        if (graphicLine && container) {
            window.addEventListener('scroll', () => {
                const graphicPosition = container.getBoundingClientRect();
                const scrollProgress = ((window.innerHeight - graphicPosition.top) + 150) / container.offsetHeight;
                graphicLine.style.width = `${65 * scrollProgress / 4}%`;
            });
        }
    }
}

progress();

window.addEventListener('resize', () => {
    progress();
})
}catch{
    console.clear()
}