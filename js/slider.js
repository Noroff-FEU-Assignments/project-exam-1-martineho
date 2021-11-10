const url = "http://martineho.com/travelcoco/wp-json/wp/v2/posts?_embed";
const container = document.querySelector(".slider");
const image = document.querySelector(".postImg");
const btnLeft = document.querySelector("#left-button");
const btnRight = document.querySelector("#right-button");

async function getPosts() {

      const response = await fetch(url);
  
      const results = await response.json();
  
      console.log(results);

      const posts = results;

      container.innerHTML = "";

      for (let i = 0; i < posts.length; i++) {

        if (i === 8) {
          break;
        }
  
        container.innerHTML +=
          ` 
          <a href="" class="item">
                    <picture>
                          <img src="${posts[i]._embedded['wp:featuredmedia'][0].source_url}" class="postImg"> 
                    </picture>
                    <div class="title">
                        <p>${posts[i].title.rendered}</p>
                    </div>
                </a>`;
      }

}

getPosts();


btnRight.addEventListener("click", () => {

  container.scrollLeft += 1200;

});

btnLeft.addEventListener("click", () => {

  container.scrollLeft -= 1200;

});


// <img src="${posts[i]._embedded['wp:featuredmedia'][0].source_url}" class="postImg"> 
// <img src="${posts[i]._embedded['wp:featuredmedia'][0].source_url}" class="postImg"> 

// <div class="postImg">${posts[i]._embedded.wp:featuredmedia[i].source_url}</div> 