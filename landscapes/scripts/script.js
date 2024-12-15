const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const thisYear = document.querySelector("#currentyear");
const menuOptions = document.querySelectorAll('a');

let today = new Date();
thisYear.innerHTML = today.getFullYear();

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

navigation.addEventListener('click', function (e) {
    const clickedElement = e.target;
    menuOptions.forEach(element => {
        element.classList.remove('active')
    });
    clickedElement.classList.toggle('active');
})
