
const ReviewsDisplay = document.querySelector(".reviews");

let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;


if (numReviews !== 0) {
    ReviewsDisplay.textContent = numReviews;
} else {
    ReviewsDisplay.textContent = `First Review`;
}


numReviews++;


localStorage.setItem("numReviews-ls", numReviews);


