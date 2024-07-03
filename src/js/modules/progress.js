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


$(window).scroll(function() {
    let minerSection = $(".miner")[0],
        top = minerSection.getBoundingClientRect().top,
        height = minerSection.getBoundingClientRect().height,
        startGap = 300,
        trackHeight = height / 2,
        minScale = 0.8, maxScale = 1.2,
        minTop = 30, maxTop = 50

    if (top <= 0 + startGap && top > -1 * trackHeight + startGap) {
        let percentage = Math.abs(top - startGap) / trackHeight,
            scaleDelta = maxScale - minScale,
            topDelta = maxTop - minTop

        $(".miner__img").css("scale", `${minScale + scaleDelta * percentage}`).css("top", `${minTop + topDelta * percentage}%`)
    }
    
})