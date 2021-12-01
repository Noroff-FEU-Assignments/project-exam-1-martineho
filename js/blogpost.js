const content = document.querySelector(".container");
const header = document.querySelector(".post-header");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (id === null) {
  location.href = "/";
}


const url = "http://martineho.com/travelcoco/wp-json/wp/v2/posts/" + id + "?_embed";
const corsUrl = "https://noroffcors.herokuapp.com/" + url;
const options = {};

// console.log(url);

async function fetchPost() {
  try {
    const response = await fetch(corsUrl, options);

    const result = await response.json();

    // console.log(result);

    const post = result;

    document.title = `${post.title.rendered}`;

    header.innerHTML = `<h1>${post.title.rendered}</h1>
                          <div class="postDetails">
                              <a>By <span>${post._embedded["author"][0].name}</span></a>
                              <a>Published <span>${post.date}</span></a>
                              <a class="categoryTag" href="">${post._embedded["wp:term"][0][0].name}</a>
                          </div>

                          <img src="${post._embedded["wp:featuredmedia"][0].source_url}" class="featured-image"> `;


    container.innerHTML = "";
    container.innerHTML += `

            <section class="text">
                <p>${post.content.rendered}</p>
            </section>
        `;
      
  } catch (error) {
    console.log("An error occured");
  }
}

fetchPost();