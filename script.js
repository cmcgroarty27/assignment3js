let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    let lastIndex = allMovies.length;
    allMovies[lastIndex] = movie;
    document.write("A new movie is added<br>")
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    document.write("Printing all movies...<br>")
    for (let i = 0; i < allMovies.length; i++) {
        document.write(allMovies[i].title + ", rating of " 
        + allMovies[i].rating + ", havewatched: " + allMovies[i].haveWatched + "<br>");
    }
    document.write("<br>");
    document.write("You have " + allMovies.length + " movies in total<br>");
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    document.write("printing movie that has a rating higher than " + rating + "<br>");
    var ratingCount = 0;
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].rating > rating) {
            document.write(allMovies[i].title + " has a rating of " + allMovies[i].rating + "<br>");
            ratingCount += 1;
        }
        document.write("In total, there are " + ratingCount + " matches<br>");
    }
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("Changing the status of the movie...<br>")
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title == title) {
            allMovies[i].haveWatched = !allMovies[i].haveWatched;
            return;
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
document.write("----------------<br>");
document.write("running program......<br>");
document.write("----------------<br>");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
document.write("----------------<br>");
addMovie(movie1);
document.write("----------------<br>");



changeWatched("Spiderman<br>");
/*replace console.log with display on web page*/
document.write("----------------<br>");

printMovies();

/*replace console.log with display on web page*/
document.write("----------------<br>");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
document.write("----------------<br>");

printMovies();
/*replace console.log with display on web page*/
document.write("----------------<br>");

highRatings(3.5);