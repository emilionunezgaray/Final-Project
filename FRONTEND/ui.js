import {getMovies, saveBooking} from "./service.js";

const container = document.getElementById("movie-container");
const genreInput = document.getElementById("genreFilter");
const priceInput = document.getElementById("priceFilter");
const timeInput = document.getElementById("timeFilter");
const searchInput = document.getElementById("searchInput");
const applyFiltersBtn = document.getElementById("applyFiltersBtn");

const bookingModal = document.getElementById("bookingModal");
const closeModalBtn = document.getElementById("closeModal");
const seatMap = document.getElementById("seatMap");
const selectedSeatsDisplay = document.getElementById("selectedSeats");
const totalPriceDisplay = document.getElementById("totalPrice");
const confirmBookingBtn = document.getElementById("confirmBookingBtn");
const bookingTitle = document.getElementById("bookingTitle");

let selectedSeats = [];
let currentMovie = null;


/**
 * Creates and appends a movie card to the container
 * @param {object} movie - The movie object
 */
function createMovieCard(movie) {
  const card = document.createElement("div");
  card.classList.add("movie-card");

  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = movie.imageUrl;
  img.alt = movie.title;
  const caption = document.createElement("figcaption");
  caption.textContent = movie.title;
  figure.appendChild(img);
  figure.appendChild(caption);
  
  const genre = document.createElement("p");
  genre.textContent = `Genre: ${movie.genre}`;
  
  const price = document.createElement("p");
  price.textContent = `Price: $${movie.price}`;
  
  const time = document.createElement("p");
  time.textContent = `Time: ${movie.time}`;
  
  const bookBtn = document.createElement("button");
  bookBtn.textContent = "Book Seats";
  bookBtn.classList.add("book-button");
  bookBtn.addEventListener("click", () => openBookingModal(movie));
  
  card.appendChild(figure);
  card.appendChild(genre);
  card.appendChild(price);
  card.appendChild(time);
  card.appendChild(bookBtn);
  
  container.appendChild(card);
}

/**
 * Opens the booking modal for the selected movie
 * @param {object} movie - The selected movie object 
 */
function openBookingModal(movie) {
  currentMovie = movie;
  selectedSeats = [];
  bookingTitle.textContent = `Book Seats for ${movie.title}`;
  updateSelectedSeatsDisplay();
  generateSeatMap();
  bookingModal.style.display = "block";
}

/**
 * Closes the booking modal
 */
function closeBookingModal() {
  bookingModal.style.display = "none";
}

/**
 * Generates the seat map for selection
 */
function generateSeatMap() {
  seatMap.innerHTML = "";
  const rows = 5;
  const cols = 8;
  for(let i = 0; i < rows * cols; i++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");
    seat.dataset.seatNumber = i + 1;
    seat.addEventListener("click", () => toggleSeatSelection(seat));
    seatMap.appendChild(seat);
  }
}

/**
 * Toggles the selection state of a seat
 * @param {HTMLElement} seat - The seat element
 */
function toggleSeatSelection(seat) {
  const seatNumber = seat.dataset.seatNumber;
  if (seat.classList.contains("selected")) {
    seat.classList.remove("selected");
    selectedSeats = selectedSeats.filter((s) => s !== seatNumber);
  } else {
    seat.classList.add("selected");
    selectedSeats.push(seatNumber);
  }
  updateSelectedSeatsDisplay();
}

/**
 * Updates the display of selected seats and total price
 */
function updateSelectedSeatsDisplay() {
  selectedSeatsDisplay.textContent = selectedSeats.length > 0 ? `Selected Seats: ${selectedSeats.join(", ")}` : "Selected Seats: None";
  const total = selectedSeats.length * (currentMovie?.price || 0);
  totalPriceDisplay.textContent = `Total Price: $${total}`;
}

// Confirms the booking and saves it to localStorage
confirmBookingBtn.addEventListener('click', () => {
  if(selectedSeats.length === 0) {
    alert('Please select at least one seat');
    return;
  }

  const booking = {
    movieId: currentMovie.id,
    title: currentMovie.title,
    seats: selectedSeats,
    pricePerSeat: currentMovie.price,
    total: selectedSeats.length * currentMovie.price,
    time: currentMovie.time,
    timestamp: new Date().toISOString(), 
  };

  saveBooking(booking);

  alert(`Booking confirmed for ${selectedSeats.length} seat(s) for "${currentMovie.title}". Total price: $${booking.total}`);
  closeBookingModal();
});

// Handles form submission for applying filters
filtersForm.addEventListener("submit", (event) => {
  event.preventDefault();
  loadMovies();
});

// Handles form reset to reload movies
filtersForm.addEventListener("reset", () => {
  loadMovies();
});

// Loads movies and applies filters
async function loadMovies() {
  try {
    const movies = await getMovies();
    const filteredMovies = applyFilters(movies);
    container.innerHTML = '';
    filteredMovies.forEach(createMovieCard);
  } catch (error) {
    container.innerHTML = '<p>Error loading movies. Please try again later.</p>';
    console.error('Error loading movies:', error);
  }
}

// Applies genre, price, time, and search filters
function applyFilters(movies) {
  const genre = genreInput.value.toLowerCase();
  const maxPrice = parseFloat(priceInput.value);
  const time = timeInput.value;
  const searchTerm = searchInput.value.toLowerCase();

  return movies.filter((movie) => {
  const matchesGenre = genre ? movie.genre.toLowerCase() === genre : true;
  const matchesPrice = !isNaN(maxPrice) ? movie.price <= maxPrice : true;
  const matchesTime = time ? movie.time === time : true;
  const matchesSearch = movie.title.toLowerCase().includes(searchTerm);
  return matchesGenre && matchesPrice && matchesTime && matchesSearch;
  });
}

loadMovies();



