const url = "http://martineho.com/travelcoco/wp-json/wp/v2/posts";
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
          `<div class="slider">
          <a class="post">${posts[i].title}</a>
          </div>`;
      }
  



  
}
  
getPosts();