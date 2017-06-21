// App Requirements
// Accept a user search term [done]
// Get JSON from the YouTube API based on the user search term [done]
// Display the thumbnail image of the returned videos [done]

// Optional
// Make the images clickable, leading to the YouTube video, on YouTube [done]
// Make the images clickable, playing them in a lightbox
// Show a link for more from the channel that each video came from [done]
// Show buttons to get more results (using the previous and next page links from the JSON) (max results)

// app state
const appState = {
    results: [],
    // 'maxResults': '25'
}

// https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyBlKXL_oW-vqf4DFrs6dov1ddwSt6fyscI&q=javascript


// controller (mvc)
// getting data from api
function getData(endpointURL, searchTerm, callback) {
    //const url = "https://www.googleapis.com/youtube/v3/search";
    const query = {
        part: 'snippet',
        key: 'AIzaSyBlKXL_oW-vqf4DFrs6dov1ddwSt6fyscI',
        q: searchTerm,
    }
    $.getJSON(endpointURL, query, callback);
}

// state mod functions
function storeData(data) {
    appState.results = data.items;
    render(appState);
}

// render
const render = (appState) => {
    var searchResults = "";
    appState.results.forEach(function (items) {
        searchResults += (`
        <a class="link" href="https://www.youtube.com/watch?v=${items.id.videoId}">
            <h3>${items.snippet.title}</h3>
            <img class="thumbnail" src=${items.snippet.thumbnails.medium.url}>
        </a>
        <br>
        <a class="link" href="https://www.youtube.com/channel/${items.snippet.channelId}">
            More from the ${items.snippet.channelTitle} Channel
        </a>
        `)});
    $('.js-search-results').html(searchResults)
};


// event handler
$('.js-search-form').on('submit', (event) => {
    event.preventDefault();
    const endpointURL = $(event.target).attr('action')
    const getInput = $(event.target).find('input').val();
    getData(endpointURL, getInput, storeData)
})

/* 
on click -> grab input value -> runs getDate with input value & holds on to storeData -> once inside getData, takes input value and create URL, calls URL -> runs storeData -> take results and add to appState results [] -> render appState -> create empty container -> grabs results and runs function for each result passed it, function is create template and inputs the values for each result in its own template -> prints the results container to the html

*/