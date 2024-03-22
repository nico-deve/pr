// für Navigation 
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const listContainer = document.getElementsByClassName('button-container')[0]

toggleButton.addEventListener('click', () => {
    listContainer.classList.toggle('active')
});


