using System;

namespace MovieTheaterBillboardApi.Models;

public class Movie
{
    public int Id {get; set;}
    public string Title {get; set;}
    public string Genre {get; set;}
    public int Price {get; set;}
    public string Time {get; set;}
    public string ImageUrl {get; set;}
}
