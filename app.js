'use strict'
const switcher = document.querySelector('.mybtn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('lightTheme');
    document.body.classList.toggle('darkTheme');

    const className = document.body.className;
    if (className == "lightTheme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});

const myModal = document.getElementById('modal')
const myInput = document.getElementById('btn btn-secondary')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
