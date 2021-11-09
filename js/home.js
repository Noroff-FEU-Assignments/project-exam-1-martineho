const url = "http://martineho.com/travelcoco/wp-json/wp/v2/posts?_embed";
const postsContainer = document.querySelector(".latestPosts");

async function getPosts() {

      const response = await fetch(url);
  
      const results = await response.json();
  
      console.log(results);

      const posts = results;

      postsContainer.innerHTML = "";

      for (let i = 0; i < posts.length; i++) {

        if (i === 8) {
          break;
        }
  
        postsContainer.innerHTML +=
          `<a class="post">
                <div class="postImg"><img src="${posts[i]._embedded['wp:featuredmedia'][0].source_url}" class="postImg"> </div>
                  <h4 class="postTitle">${posts[i].title.rendered}</h4>
              </a>`;
      }

}

getPosts();

// <img src="${posts[i]._embedded['wp:featuredmedia'][0].source_url}" class="postImg"> 
// <img src="${posts[i]._embedded['wp:featuredmedia'][0].source_url}" class="postImg"> 

// <div class="postImg">${posts[i]._embedded.wp:featuredmedia[i].source_url}</div> 