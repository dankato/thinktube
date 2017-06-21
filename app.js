// App Requirements
// Accept a user search term [done]
// Get JSON from the YouTube API based on the user search term [done]
// Display the thumbnail image of the returned videos [done]

// Optional
// Make the images clickable, leading to the YouTube video, on YouTube [done]
// Make the images clickable, playing them in a lightbox
// Show a link for more from the channel that each video came from
// Show buttons to get more results (using the previous and next page links from the JSON) (max results)

// app state
const appState = {
    results: [],
    // 'maxResults': '25'
}

// https://www.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyBlKXL_oW-vqf4DFrs6dov1ddwSt6fyscI&q=javascript

// state mod functions

// getting data from api
function getData(searchTerm, callback) {
    const url = "https://www.googleapis.com/youtube/v3/search";
    const query = {
        part: 'snippet',
        key: 'AIzaSyBlKXL_oW-vqf4DFrs6dov1ddwSt6fyscI',
        q: searchTerm,
    }
    $.getJSON(url, query, callback);
}


function storeData (data) {
    console.log('i am in storeData');
    console.log(data);
    appState.results = data.items; // not sure how to write this out 
    // console.log("appstate", appState.results);
    // console.log("data items", data.items);
    render(appState);
}


// render
const render = (appState) => {
    console.log('im in render');
    var searchResults = "";
    console.log('search results:' + searchResults);
    appState.results.forEach(function (items) {
        console.log($(items))
        searchResults += `<h3>${items.snippet.title}</h3>
        <a class="link" href="https://www.youtube.com/watch?v=${items.id.videoId}">
     <img class="thumbnail" src=${items.snippet.thumbnails.medium.url}></a>
        <br>
        <a class="link" href="https://www.youtube.com/channel/${items.snippet.channelId}">More from the ${items.snippet.channelTitle} Channel</a>
        `});
    $('.js-search-results').html(searchResults)
};


// event handler
$('.js-search-form').on('submit', (event) => {
    event.preventDefault();
    const getInput = $(event.target).find('input').val();
    console.log("user submitted: " + getInput);
    getData(getInput, storeData)   
})

// execute

/*
      //${items.snippet.thumbnails.medium.url}
        `<a href="https://www.youtube.com/watch?v=${items.id.videoId}">link</a>

*/