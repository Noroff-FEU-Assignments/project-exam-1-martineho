const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (id === null) {
    location.href = "/";
}

const url = "http://martineho.com/travelcoco/wp-json/wp/v2/posts?_embed/" + id;

const container = document.querySelector(".container");

console.log(url);

async function fetchPost(){

    try {

        const response = await fetch(url);
    
        const result = await response.json();
    
        console.log(result);

        const post = result[0];

        createHtml(post);

        }   

        catch (error) {
            // console.log("An error occured");
            // container.innerHTML = displayError("Ops... An error occured while fetching data...");
        }
    }

fetchPost();

function createHtml(post) {

    document.title = `${post.title.rendered}` ;

    container.innerHTML += 
    `
    <div class="breadcrumbs">
      
            <a href="">Blog</a>
            <a class="active">${post.title.rendered}</a>
       
    </div>
        <header>
            <h1>${post.title.rendered}</h1>
                <div class="postDetails">
                    <a>By <span>${post.author}</span></a>
                    <a>Published <span>${post.date}</span></a>
                    <a class="categoryTag" href="">${post.category}</a>
                </div>
        </header>

        <picture>
            <img src="">
        </picture>

        <section class="text">
            <p>${post.content.rendered}</p>
        </section>
    `;
}