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


const landscapesOptions = [
    {
        id: "france",
        name: "France"
    },
    {
        id: "england",
        name: "Emglad"
    },
    {
        id: "germany",
        name: "Germany"
    },
    {
        id: "mexico",
        name: "Mexico"
    },
    {
        id: "peru",
        name: "Peru"
    }
];

createOptions(landscapesOptions);

function createOptions(landscapesOptions) {
    let newOption = document.querySelector("#options");
    landscapesOptions.forEach(element => {
        let option = document.createElement("option");
        option.textContent = element.name;
        option.value = element.name;
        option.id = element.id;
        newOption.appendChild(option);
    });
}

