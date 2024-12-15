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

function countVisits(event) {
    let visits = localStorage.getItem('countVisits');
    if (!visits) {
        visits = 0;
    }
    visits++;
    localStorage.setItem('countVisits', visits);
    document.querySelector('#visitors').textContent = `Welcome visitor number ${visits}.`;
}

countVisits();


const landscapesOptions = [
    {
        id: "france",
        name: "France"
    },
    {
        id: "england",
        name: "England"
    },
    {
        id: "australia",
        name: "Australia"
    },
    {
        id: "mexico",
        name: "Mexico"
    },
    {
        id: "peru",
        name: "Peru"
    },
    {
        id: "brazil",
        name: "Brazil"
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



const landscapes = [
    {
        country: "France",
        city: "Paris",
        description: "Torre Eiffel in the middle of the Paris",
        imageUrl: "images/places/paris1.png"
    },
    {
        country: "France",
        city: "Paris",
        description: "Notre Dame Cathedral",
        imageUrl: "images/places/paris2.png"
    },
    {
        country: "France",
        city: "Paris",
        description: "River Seine",
        imageUrl: "images/places/paris3.png"
    },
    {
        country: "Australia",
        city: "Camberra",
        description: "Parlament House",
        imageUrl: "images/places/australia-camberra.png"
    },
    {
        country: "Australia",
        city: "",
        description: "Australia desert",
        imageUrl: "images/places/australia-desert.png"
    },
    {
        country: "Australia",
        city: "Sydney",
        description: "Sydney Opera House",
        imageUrl: "images/places/australia-sydney.png"
    },
    {
        country: "Brazil",
        city: "Rio de Janeiro",
        description: "Christ the Redeemer",
        imageUrl: "images/places/brazil-christ.png"
    },
    {
        country: "Brazil",
        city: "Rio de Janeiro",
        description: "Rio de Janeiro",
        imageUrl: "images/places/brazil-rio-de-janeiro.png"
    },
    {
        country: "England",
        city: "London",
        description: "Big Ben in London",
        imageUrl: "images/places/england-london.png"
    },
    {
        country: "England",
        city: "London",
        description: "Buckingham Palacen",
        imageUrl: "images/places/england-palace.png"
    },
    {
        country: "England",
        city: "",
        description: "Stonehenge",
        imageUrl: "images/places/england-ruines.png"
    },
    {
        country: "England",
        city: "London",
        description: "Westminster Abbey",
        imageUrl: "images/places/england-abbey.png"
    },
    {
        country: "Mexico",
        city: "Acapulco",
        description: "Acapulco beach",
        imageUrl: "images/places/mexico-acapulco.png"
    },
    {
        country: "Mexico",
        city: "Sonora",
        description: "Sonora desert",
        imageUrl: "images/places/mexico-desert.png"
    },
    {
        country: "Mexico",
        city: "Yucatan",
        description: "Chichén Itzá",
        imageUrl: "images/places/mexico-chichenitza.png"
    },
    {
        country: "Mexico",
        city: "Mexico DF",
        description: "Angel of Independence in Mexico DF",
        imageUrl: "images/places/mexico-mexicocity.png"
    },
    {
        country: "Mexico",
        city: "Puerto Vallarta",
        description: "Puerto Vallarta",
        imageUrl: "images/places/mexico-puertovallarta.png"
    },
    {
        country: "Peru",
        city: "Arequipa",
        description: "Misti Mountain and Arequipa Cathedral",
        imageUrl: "images/places/peru-arequipa.png"
    },
    {
        country: "Peru",
        city: "Cuzco",
        description: "Machu Picchu",
        imageUrl: "images/places/peru-machupicchu.png"
    },
    {
        country: "Peru",
        city: "Nazca",
        description: "Nazca lineas",
        imageUrl: "images/places/peru-nazca.png"
    },
    {
        country: "Peru",
        city: "Iquitos",
        description: "Peruvian amazonic jungle",
        imageUrl: "images/places/peru-selva.png"
    },
];


createGalleryCard(landscapes)

const galleryButton = document.querySelector("#gallery-button");
const countrySelect = document.querySelector("#options");

galleryButton.addEventListener("click", () => {
    createGalleryCard(landscapes)
});

countrySelect.addEventListener("change", () => {
    createGalleryCard(landscapes.filter(landscape => landscape.country.toLowerCase() == countrySelect.value.toLowerCase()))
});

function createGalleryCard(landscapes) {
    document.querySelector(".gallery").innerHTML = "";
    landscapes.forEach(landscape => {
        let card = document.createElement("section");
        let description = document.createElement("p");
        let city = document.createElement("p");
        let country = document.createElement("p");
        let img = document.createElement("img");

        description.textContent = landscape.description;
        city.innerHTML = `<span class="label"> City: </span> ${landscape.city} `;
        country.innerHTML = `<span class="label"> Country: </span> ${landscape.country}`;
        img.setAttribute("src", landscape.imageUrl);
        img.setAttribute("alt", landscape.description);
        img.setAttribute("loading", "lazy");


        card.appendChild(img);
        card.appendChild(description);
        card.appendChild(city);
        card.appendChild(country);

        document.querySelector(".gallery").appendChild(card);
    });
}
