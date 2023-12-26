// trendingTVShows.js
var scrollPerClickTVShows;
var ImagePaddingTVShows = 20;

showData('tvShowCarousel', 'tv');

function sliderScrollLeftTVShows(carouselId) {
    const sliders = document.getElementById(carouselId);
    var scrollAmount = sliders.scrollLeft;

    sliders.scrollTo({
        left: (scrollAmount -= scrollPerClickTVShows),
        behavior: "smooth",
    });

    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
}

function sliderScrollRightTVShows(carouselId) {
    const sliders = document.getElementById(carouselId);
    var scrollAmount = sliders.scrollLeft;

    if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
            left: (scrollAmount += scrollPerClickTVShows),
            behavior: "smooth",
        });
    }
}

async function showData(carouselId, type) {
    const api_key = "b90bdf04cf5e01e0cf212ba008168764";
    const endpoint = type === 'movie' ? 'movie' : 'tv';

    try {
        var result = await axios.get(
            `https://api.themoviedb.org/3/discover/${endpoint}?api_key=${api_key}&sort_by=popularity.desc`
        );

        result = result.data.results;
        const sliders = document.getElementById(carouselId);

        result.map(function (cur, index) {
            sliders.insertAdjacentHTML(
                "beforeend",
                `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
            );
        });

        if (type === 'tv') {
            scrollPerClickTVShows = 400;
        }
    } catch (error) {
        console.error(`Error fetching ${type} data:`, error);
    }
}