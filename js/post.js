const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (id === null) {
  location.href = "/";
}

const url = "http://martineho.com/travelcoco/wp-json/wp/v2/posts/" + id + "?_embed";
const corsUrl = "https://noroffcors.herokuapp.com/" + url;
const options = {};

const container = document.querySelector(".container");
const featured = document.querySelector(".featured-media");
const modal = document.querySelector(".modal-container");
const title = document.querySelector("title");
// console.log(url);

async function fetchPost() {

    const response = await fetch(corsUrl, options);
    const result = await response.json();
    // console.log(result);
    const post = result;

    document.title = `${post.title.rendered}`;
    title.innerHTML = `${post.title.rendered}`;

    featured.innerHTML += ` 
    <h1>${post.title.rendered}</h1>

                            <div class="postDetails">
                                  <a>By <span>${post._embedded["author"][0].name}</span></a>
                                    <a>Published <span>${post.date}</span></a>
                                  <a class="categoryTag" href="">${post._embedded["wp:term"][0][0].name}</a>
                            </div>
                            <img src="${post._embedded["wp:featuredmedia"][0].source_url}" class="featured-image"> 
                            `;

    container.innerHTML = "";
    container.innerHTML += `${post.content.rendered}`;

    modal.innerHTML += `<span class="close">&times;</span>
                        <img src="" class="modal-content" id="modal-img">
                        <div class="caption"></div>`;

                      

    document.querySelector(".img").onclick = displayModal;
    const img = document.querySelector(".modal-img");
    const modalContent = document.querySelector(".modal-content")
    const imgCap = document.querySelector(".caption")
    const figcaption = document.querySelector("figcaption");

    function displayModal () {
      modal.style.display = "block";
      modalContent.src = img.src;
      imgCap.innerHTML = figcaption.innerText;
    }

    modal.onclick = function() {
      modal.style.display = "none";
    } 


} 

fetchPost();


/*
var img = document.querySelectorAll('figure img');  
img.addEventListener("click", displayModal);


document.querySelector(".img").onClick = displayModal;


function displayModal () {

  console.log("displayModal has triggered");
  modal.style.display = "block";
}

console.log(modal);
*/ 