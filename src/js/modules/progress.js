const graphicLine = document.querySelector('.progressBar__line_progress');
const container = document.querySelector('.progressBar')
window.addEventListener('scroll', () => {
    const graphicPosition = container.getBoundingClientRect();
    console.log(graphicPosition);
    const scrollProgress = ((window.innerHeight - graphicPosition.top)-300) / container.offsetHeight;
    graphicLine.style.width = `${50 * scrollProgress}%`;
});

