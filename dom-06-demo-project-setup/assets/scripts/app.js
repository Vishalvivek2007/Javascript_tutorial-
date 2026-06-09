const modal = document.getElementById('add-modal');
const addMovieBtn = document.querySelector("header button");
const backdrop = document.getElementById('backdrop');
const cancelBtn = document.querySelector('.btn--passive');
const addBtn = document.querySelector('.btn--success');
const userInputs = modal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
  entryTextSection.style.display = movies.length === 0 ? 'block' : 'none';
};

const renderNewMovieElement = (title, imageURL, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.classList.add('movie-element');
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageURL}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  document.getElementById('movie-list').append(newMovieElement);
};

const clearMovieInput = () => {
  for (const inputf of userInputs) {
    inputf.value = "";
  }
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleModal = () => {
  modal.classList.toggle('visible');
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  toggleModal();
  clearMovieInput();
};

const addMovieHandler = () => {
  const movieTitle = userInputs[0].value;
  const imageURL = userInputs[1].value;
  const rating = userInputs[2].value;

  if (
    movieTitle.trim() === "" ||
    imageURL.trim() === "" ||
    rating.trim() === "" ||
    +rating < 1 ||
    +rating > 5
  ) {
    alert("Enter valid inputs (rating between 1 and 5).");
    return;
  }

  const newMovie = {
    title: movieTitle,
    imageurl: imageURL,
    rating: rating
  };

  movies.push(newMovie);
  toggleModal();
  clearMovieInput();
  renderNewMovieElement(newMovie.title, newMovie.imageurl, newMovie.rating);
  updateUI();
};

cancelBtn.addEventListener("click", cancelAddMovieHandler);
addMovieBtn.addEventListener("click", toggleModal);
backdrop.addEventListener("click", cancelAddMovieHandler);
addBtn.addEventListener("click", addMovieHandler);