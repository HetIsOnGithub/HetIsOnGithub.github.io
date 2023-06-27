const moviesContainer = document.getElementById('movies-container');

// Sample movie data
const movies = [
  {
    title: 'Movie 1',
    image: 'https://github.com/HetIsOnGithub/hetisongithub.github.io/blob/main/img/fastXthumb.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    title: 'Movie 2',
    image: 'https://example.com/movie2.jpg',
    description: 'Nullam euismod nunc in lacus volutpat, sit amet dapibus lectus mattis.'
  },
  {
    title: 'Movie 3',
    image: 'https://example.com/movie3.jpg',
    description: 'Fusce rutrum leo nec lacinia feugiat. Sed non nulla et nisl mattis tincidunt.'
  }
];

// Render movies
movies.forEach(movie => {
  const movieCard = document.createElement('div');
  movieCard.classList.add('movie-card');

  const movieImage = document.createElement('img');
  movieImage.src = movie.image;
  movieCard.appendChild(movieImage);

  const movieTitle = document.createElement('h2');
  movieTitle.textContent = movie.title;
  movieCard.appendChild(movieTitle);

  const movieDescription = document.createElement('p');
  movieDescription.textContent = movie.description;
  movieCard.appendChild(movieDescription);

  moviesContainer.appendChild(movieCard);
});
