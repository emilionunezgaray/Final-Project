using System;

namespace MovieTheaterBillboardApi.Models;

/// here is the part where I decided to put the comments and documentation (as it was stated in my readme file proposal)
/// this is to describe the purpose and usage of classes and their members.
/// <summary>
/// Represents a movie with its details
/// </summary>
public class Movie
{
    /// <summary>
    /// This is a unique identifier for each movie in specific
    /// </summary>
    public int Id {get; set;}
    /// <summary>
    /// title of the movie
    /// </summary>
    public string Title {get; set;}
    /// <summary>
    /// Genre of the movie
    /// </summary>
    public string Genre {get; set;}
    /// <summary>
    /// Price of the movie ticket
    /// </summary>
    public int Price {get; set;}
    /// <summary>
    /// Showtime of each movie
    /// </summary>
    public string Time {get; set;}
    /// <summary>
    /// this is the url that gives the movie poster or image
    /// </summary>
    public string ImageUrl {get; set;}
}
