async function getMovies() {
    try {
        const response = await fetch(" http://localhost:5500");
        const movies = await response.json();
        return movies;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
}