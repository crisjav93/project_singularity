$('#carouselFade').carousel();

const cards = document.querySelectorAll('.project_card')

cards.forEach((card) => {
card.addEventListener('click', () => {
    const description = card.querySelector('.description')
    
    if (!description.hasAttribute('style') && description.scrollHeight > 24) {
    description.setAttribute('style', `height: ${description.scrollHeight}px`)
    card.classList.add('-expanded')
    } else {
    description.removeAttribute('style')
    card.classList.remove('-expanded') 
    }
    
})
})