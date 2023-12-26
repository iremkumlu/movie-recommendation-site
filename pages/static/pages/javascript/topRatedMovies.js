// topRatedMovies.js
var scrollPerClickMovies;
var ImagePaddingMovies = 20;

showTopRatedMovies('topRatedMoviesCarousel');

function sliderScrollLeftMovies(carouselId) {
    const sliders = document.getElementById(carouselId);
    var scrollAmount = sliders.scrollLeft;

    sliders.scrollTo({
        left: (scrollAmount -= scrollPerClickMovies),
        behavior: "smooth",
    });

    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
}

function sliderScrollRightMovies(carouselId) {
    const sliders = document.getElementById(carouselId);
    var scrollAmount = sliders.scrollLeft;

    if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
            left: (scrollAmount += scrollPerClickMovies),
            behavior: "smooth",
        });
    }
}

async function showTopRatedMovies(carouselId) {
    const api_key = "b90bdf04cf5e01e0cf212ba008168764";

    try {
        var result = await axios.get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`
        );

        result = result.data.results;
        const sliders = document.getElementById(carouselId);

        result.map(function (cur, index) {
            sliders.insertAdjacentHTML(
                "beforeend",
                `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
            );
        });

        scrollPerClickMovies = 400;
    } catch (error) {
        console.error("Error fetching top-rated movies data:", error);
    }
}