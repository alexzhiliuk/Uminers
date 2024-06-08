const graphicLine = document.querySelector('.graphic__lineWrapper');
const container = document.querySelector('.graphic__body')
window.addEventListener('scroll', () => {
    const graphicPosition = container.getBoundingClientRect();
    console.log(graphicPosition);
    const scrollProgress = (window.innerHeight - graphicPosition.top) / container.offsetHeight;
    graphicLine.style.width = `${50 * scrollProgress}%`;
});