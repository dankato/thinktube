// App Requirements
    // Accept a user search term
    // Get JSON from the YouTube API based on the user search term
    // Display the thumbnail image of the returned videos

// app state
const appState = {
    results: [],
}

// state mod functions

// getting data from api
function getData(searchTerm, callback) {
    const url = "https://www.googleapis.com/youtube/v3/search";
    const query = {
        part: 'snippet',
        key: 'AIzaSyAPlQikl1ZdGR3LM-HUEAI9qNffh06jFPU',
        q: searchTerm,
    }
    $.getJSON(URL, query, callback);
}

// push


// play


// render
const render = (state) => {};

// event handler


// execute



// Find thumbnails -> items.snippet.thumbnails.medium.url