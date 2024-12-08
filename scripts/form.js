const this_year = document.querySelector("#currentyear");
const last_modified = document.querySelector("#lastModified");

let today = new Date();
let last_date = new Date(document.lastModified);

this_year.innerHTML = today.getFullYear();
last_modified.innerHTML = `Last Modified:  <span class="highlight">${last_date}</span>`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

createOptions(products);

function createOptions(productOptions) {
    let newProduct = document.querySelector("#product");
    productOptions.forEach(element => {
        let option = document.createElement("option");
        option.textContent = element.name;
        option.value = element.name;
        option.id = element.id;
        newProduct.appendChild(option);
    });
}

