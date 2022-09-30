function submitRating() {

    if (!currentRating) return;

    ratingStateContainer.classList.add("none-display");
    
    feedbackContainer.innerText = `You selected ${currentRating} out of 5`;
    thanksContainer.classList.remove("none-display");
}


const ratingOptions =  document.getElementsByClassName("ratings__option");
const submitButton = document.getElementById("submit");
const ratingStateContainer = document.querySelector(".rating-sate-container");
const thanksContainer = document.querySelector(".thanks-container");
const feedbackContainer = document.querySelector(".thanks-container__selection");

let currentRating;

for (let item of ratingOptions) {
    item.addEventListener("click", () => {
        currentRating = item.innerText;
    });
}

submitButton.addEventListener("click", submitRating);