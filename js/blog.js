const url = "http://martineho.com/travelcoco/wp-json/wp/v2/posts?_embed&per_page=50";
const corsFix = "https://noroffcors.herokuapp.com/" + url;
const container = document.querySelector(".container");
const image = document.querySelector(".postImg");
const postTitle = document.querySelector(".titleText");
const item = document.querySelector(".item");
const button = document.querySelector(".more-button");

async function getPosts() {

      const response = await fetch(corsFix);
  
      const results = await response.json();
  
      console.log(results);

      const posts = results;

      container.innerHTML = "";

      for (let i = 0; i < posts.length; i++) {

        if (i === 9) {
          break;
        }
  
        container.innerHTML +=
          ` 
          <a href="post.html?id=${posts[i].id}" class="item">
                    <picture>
                          <img src="${posts[i]._embedded['wp:featuredmedia'][0].source_url}" class="postImg"> 
                    </picture>
                    <div class="title">
                        <div>>></div>
                        <p class="titleText">${posts[i].title.rendered}</p>
                    </div>
                </a>`;
      }


}

getPosts();

