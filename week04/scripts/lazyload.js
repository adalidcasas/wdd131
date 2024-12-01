const this_year = document.querySelector("#currentyear");
const last_modified = document.querySelector("#lastModified");

let today = new Date();
let last_date = new Date(document.lastModified);

this_year.innerHTML = today.getFullYear();
last_modified.innerHTML = `Last Modified:  <span class="highlight">${last_date}</span>`;