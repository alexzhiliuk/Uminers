const graphicLine = document.querySelector('.progressBar__line_progress');
const container = document.querySelector('.progressBar')
if (graphicLine && container) {
    window.addEventListener('scroll', () => {
        const graphicPosition = container.getBoundingClientRect();
        console.log(graphicPosition);
        const scrollProgress = ((window.innerHeight - graphicPosition.top)-150) / container.offsetHeight;
        graphicLine.style.width = `${65 * scrollProgress / 4}%`;
    });
}

