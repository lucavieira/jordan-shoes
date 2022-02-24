for(i = 1; i <= 8; i++) {
    let container = document.getElementById('container-cards')
    
    let cards = document.createElement('div')
    let image_shoes = document.createElement('img')
    
    cards.classList.add('cards')

    image_shoes.src = `../images/shoes/air-jordan-0${i}.png`
    
    cards.appendChild(image_shoes)
    container.appendChild(cards)
}