const cards = document.querySelectorAll('.card');
const newItems = Array.from(cards).slice(0, 3);
newItems.forEach(card => {
    const h3 = card.querySelector('h3');
    const newLabel = document.createElement('span');
    newLabel.classList.add('new-label');
    newLabel.textContent = 'Новинка!';
    h3.appendChild(newLabel);
    // h3.insertBefore(newLabel, h3.firstChild);
});



const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(query) ? 'block' : 'none';
    });
});
