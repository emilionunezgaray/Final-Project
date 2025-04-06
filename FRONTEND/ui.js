function displayMovies(movies) {
    const container = document.getElementById("movie-container");
    container.innerHTML = "";

    movies.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");
        card.innerHTML = `<h3>${movie.title}</h3>
        <p>Genre: ${movie.genre}</p>
      <p>Price: $${movie.price}</p>
      <p>Time: ${movie.time}</p>`;
      container.appendChild(card);
    });
}

function applyFilters() {
    const genre = document.getElementById("genreFilter").value;
    const price = parseFloat(document.getElementById("priceFilter").value);
    const time = document.getElementById("timeFilter").value;

    getMovies().then(movies => {
        let filtered = movies;

        if(genre) filtered = filtered.filter(m => m.genre === genre);
        if(!isNaN(price)) filtered = filtered.filter(m => m.price <= price);
        if (time) filtered = filtered.filter(m => m.time === time);

        displayMovies(filtered);
    });
}

function searchMovies() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();

    getMovies().then(movies => {
      const filtered = movies.filter(m => 
        m.title.toLowerCase().includes(searchTerm)
      );
      displayMovies(filtered);
    });
}
