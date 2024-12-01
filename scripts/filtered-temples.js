const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const title = document.getElementById('tittle-album');
const menuOptions = document.querySelectorAll('a');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

navigation.addEventListener('click', function (e) {
    const clickedElement = e.target;
    title.textContent = clickedElement.textContent;
    menuOptions.forEach(element => {
        element.classList.remove('active')
    });
    clickedElement.classList.toggle('active');
})

const this_year = document.querySelector("#currentyear");
const last_modified = document.querySelector("#lastModified");

let today = new Date();
let last_date = new Date(document.lastModified);

this_year.innerHTML = today.getFullYear();
last_modified.innerHTML = `Last Modified:  <span class="highlight">${last_date}</span>`;



const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Trujillo Peru",
        location: "Trujillo, Peru",
        dedicated: "2015, June, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/trujillo-peru/2018/400x250/Trujillo-Peru-Temple07.jpg"
    },
    {
        templeName: "Arequipa Peru",
        location: "Arequipa, Peru",
        dedicated: "2019, December, 15",
        area: 26969,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/400x250/2-3c2316607190934fc0265f4107b5013b0cc4b21e.jpeg"
    },
    {
        templeName: "Córdoba Argentina",
        location: "Córdoba, Argentina",
        dedicated: "2015, May, 17",
        area: 26969,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cordoba-argentina/400x250/cordoba-argentina-temples-buildings-1436937-wallpaper.jpg"
    },
];

createTempleCard(temples)

const homeButton = document.querySelector("#home");
const oldButton = document.querySelector("#old");
const newButton = document.querySelector("#new");
const largeButton = document.querySelector("#large");
const smallButton = document.querySelector("#small");

homeButton.addEventListener("click", () => {
    createTempleCard(temples)
});

oldButton.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) <= 1990));
});

newButton.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) >= 2000));
});

largeButton.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.area) >= 90000));
});

smallButton.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => parseInt(temple.area) <= 10000));
});


function createTempleCard(filteredTemples) {
    document.querySelector(".gallery").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: </span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size: </span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".gallery").appendChild(card);
    });
}