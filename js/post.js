const container = document.querySelector(".container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "http://martineho.com/travelcoco/wp-json/wp/v2/posts?_embed" + id;

console.log(url);

async function fetchPost(){

    try {

        const response = await fetch(url);
    
        const json = await response.json();
    
        // console.log(json);
    
        document.title = `${json.title}` ;
    
        container.innerHTML = "";
    
        container.innerHTML += 
        `<header>
            <h1>${json.title}</h1>
                <div class="postDetails">
                    <a>By <span>Name</span></a>
                    <a>Published <span>Date</span></a>
                    <a class="categoryTag" href="">Category</a>
                </div>
        </header>

         <picture>
            <img src="">
        </picture>

        <section class="text">
            <p>fill text here</p>
        </section>
        `;

        }   
    
        catch (error) {
            // console.log("An error occured");
            // container.innerHTML = displayError("Ops... An error occured while fetching data...");
        }
    }
    
fetchPost();