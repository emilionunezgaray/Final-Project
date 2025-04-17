const API_BASE_URL = 'http://localhost:5024';

/**
 * Fetches the list of movies from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of movies.
 */
export async function getMovies() {
  try {
    const response = await fetch(`${API_BASE_URL}/movies`);
    if (!response.ok) {
      throw new Error(`Error fetching movies: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    throw error;
  }
}

/**
 * Retrieves bookings from localStorage.
 * @returns {Array} An array of booking objects.
 */
export function getBookings() {
  try {
    const bookings = localStorage.getItem('bookings');
    return bookings ? JSON.parse(bookings) : [];
  } catch (error) {
    console.error('Error retrieving bookings from localStorage:', error);
    return [];
  }
}

/**
 * Saves a new booking to localStorage.
 * @param {Object} booking - The booking object to save.
 */
export function saveBooking(booking) {
  try {
    const bookings = getBookings();
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
  } catch (error) {
    console.error('Error saving booking to localStorage:', error);
  }
}


  