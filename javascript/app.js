// What do you have?
//   - jQuery to make AJAX requests to an API
//   - jQuery to work with the DOM
//   - Some existing HTML with placeholder information (.result-card)
//   - An API endpoint that has data for me "http://www.recipepuppy.com/api/?q=""
//   - A reference to how to use that API: http://www.recipepuppy.com/about/api/
//   - Knowledge that I need to use "https://cors-anywhere.herokuapp.com/" in my AJAX request
//   - A working AJAX example below


// What do you need?
// When the user clicks the search button, the following needs to happen afterwards:
//     1. I need to take the text they typed in the input box
//     2. I need to get the recipe information based on what the user typed in: "http://www.recipepuppy.com/api/?q=[USER INPUT PLACEHOLDER]"
//     2. I need to display that information using the .result-card html as a template


// How do you get there?
// I need to use this API endpoint: "http://www.recipepuppy.com/api/?q="
// I can use the URL bar in my web browser to see what comes back when I visit an end point, e.g."http://www.recipepuppy.com/api/?q=DINNER"
// I need to handle a click event on the search button
// I need to get the user information from the input box
// I need to use $.get to make an AJAX request to the endpoint with the user search info, e.g. "http://www.recipepuppy.com/api/?q=[USER INPUT PLACEHOLDER]"
// I need to use jQuery to recreate the .result-card html and all of it's nested elements
// I need to go through the data sent from the AJAX request and create a result card for each recipe
//   (For images use this URL: "https://picsum.photos/200/300" )
// I need to add each result card to the #results element.

$.get('https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=DINNER', (data) => {
    var results = JSON.parse(data) // The data comes to us in JSON format, it must be parsed in to a object that we can use
    console.log(results);
})