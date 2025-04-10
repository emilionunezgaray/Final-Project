const apiUrl = 'http://localhost:5024/movies';

export async function getMovies() {
        const response = await fetch(apiUrl);
        return await response.json();
}

export async function addMovie(movie) {
    await fetch(apiUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(movie)
    });
}

export async function updateMovie(id, movie) {
    await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie)
    });
}

export async function deleteMovie(id) {
    await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    });
}