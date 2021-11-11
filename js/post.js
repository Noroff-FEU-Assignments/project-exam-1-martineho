const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "http://martineho.com/travelcoco/wp-json/wp/v2/posts?_embed" + id;

console.log(url);