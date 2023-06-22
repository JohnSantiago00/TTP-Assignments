// Retrieve DOM elements
const posterImage = document.getElementById("poster-image");
const posterTitle = document.getElementById("poster-title");
const posterQuote = document.getElementById("poster-quote");
const randomizeButton = document.getElementById("randomize");
const submitButton = document.getElementById("submit");
const posterFormQuote = document.getElementById("poster-form-quote");
const posterFormAuthor = document.getElementById("poster-form-author");

// Array of predefined poster objects
const posters = [
  {
    image: "https://i.ytimg.com/vi/J0BPoofmPkw/maxresdefault.jpg",
    title: "Author",
    quote: "Quote",
  },
  {
    image:
      "https://i.pinimg.com/originals/43/f9/17/43f917a9f6c982325e90737f3f95c4aa.jpg",
    title: "Author",
    quote: "Quote",
  },
  {
    image:
      "https://images.pexels.com/videos/3971351/4k-aerial-architecture-background-3971351.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Author",
    quote: "Quote",
  },
];

// Event listener for randomize button
randomizeButton.addEventListener("click", generateRandomPoster);

// Event listener for submit button
submitButton.addEventListener("click", generateCustomPoster);

// Function to generate a random poster
function generateRandomPoster() {
  const randIndex = Math.floor(Math.random() * posters.length);
  const randPoster = posters[randIndex];
  updatePoster(randPoster.image, randPoster.title, randPoster.quote);
}

// Function to generate a custom poster
function generateCustomPoster(event) {
  event.preventDefault();
  const customTxt = posterFormQuote.value;
  const customTitle = posterFormAuthor.value;
  const customPoster = {
    image: "",
    title: customTitle,
    quote: customTxt,
  };
  updatePoster(customPoster.image, customPoster.title, customPoster.quote);
}

// Function to update the poster content in the DOM
function updatePoster(imageUrl, title, quote) {
  posterImage.src = imageUrl;
  posterTitle.textContent = title;
  posterQuote.textContent = quote;
}
