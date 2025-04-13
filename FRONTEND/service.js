export async function getMovies() {
    const response = await fetch("http://localhost:5024/movies");
    const movies = await response.json();
    return movies;
}