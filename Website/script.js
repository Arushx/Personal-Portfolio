document.addEventListener('mousemove', (event) => {
    const face = document.getElementById('centerFace');
    const quote = document.getElementById('quote');
    const leftText = document.querySelector('.left-text');
    const rightText = document.querySelector('.right-text');
    const { clientX: mouseX, clientY: mouseY } = event;
    const { innerWidth: width, innerHeight: height } = window;

    const offsetX = ((mouseX / width) - 0.5) * 20;
    const offsetY = ((mouseY / height) - 0.5) * 20;

    face.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
    quote.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
    leftText.style.transform = `translateY(-50%) translate(${offsetX}px, ${offsetY}px)`;
    rightText.style.transform = `translateY(-50%) translate(${offsetX}px, ${offsetY}px)`;
});
