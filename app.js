// App Requirements
    // Accept a user search term
    // Get JSON from the YouTube API based on the user search term
    // Display the thumbnail image of the returned videos

// app state
const appState = {
    results: [],
}

// https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyAPlQikl1ZdGR3LM-HUEAI9qNffh06jFPU&q=javascript

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
const pushData = (appState, data) => {
    appState.results.push(data);
};

// play


// render
const render = (state) => {};

// event handler
$('.js-search-form').on('submit', (event) => {
    event.preventDefault();
    const getInput = $(event.target).find('input').val();
        console.log("user submitted: " + getInput);
  //  getData(getInput, something else)    
})

// execute



// Find thumbnails -> items.snippet.thumbnails.medium.url


// 'maxResults': '25'