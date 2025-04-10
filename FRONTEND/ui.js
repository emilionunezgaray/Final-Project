import { getMovies, addMovie, updateMovie, deleteMovie } from './service.js';

async function displayMovies() {
    const movies = await getMovies();
    const container = document.getElementById('movie-container');
    container.innerHTML = '';

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');

        const title = document.createElement('h3');
        title.textContent = movie.title;

        const genre = document.createElement('p');
        genre.textContent = `Genre: ${movie.genre}`;

        const price = document.createElement('p');
        price.textContent = `Price: $${movie.price}`;

        const time = document.createElement('p');
        time.textContent = `Time: ${movie.time}`;

        const img = document.createElement('img');
        img.src = movie.imageUrl;
        img.alt = movie.title;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => showEditForm(movie);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = async () => {
            await deleteMovie(movie.id);
            displayMovies();
        };

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(genre);
        card.appendChild(price);
        card.appendChild(time);
        card.appendChild(editButton);
        card.appendChild(deleteButton);

        container.appendChild(card);
    });
}

function showEditForm(movie) {
    const form = document.getElementById('movie-form');
    form.dataset.id = movie.id;
    form.elements['title'].value = movie.title;
    form.elements['genre'].value = movie.genre;
    form.elements['price'].value = movie.price;
    form.elements['time'].value = movie.time;
    form.elements['imageUrl'].value = movie.imageUrl;
    form.style.display = 'block';
}

document.getElementById('movie-form').onsubmit = async function(event) {
    event.preventDefault();
    const form = event.target;
    const movie = {
        title: form.elements['title'].value,
        genre: form.elements['genre'].value,
        price: parseInt(form.elements['price'].value, 10),
        time: form.elements['time'].value,
        imageUrl: form.elements['imageUrl'].value
    };

    const movieId = form.dataset.id;
    if (movieId) {
        await updateMovie(movieId, movie);
    } else {
        await addMovie(movie);
    }

    form.reset();
    form.style.display = 'none';
    displayMovies();
};

displayMovies();

