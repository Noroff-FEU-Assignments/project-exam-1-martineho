const url = "http://martineho.com/travelcoco/wp-json/wp/v2/pages/";
const corsFix = "https://noroffcors.herokuapp.com/" + url;
const container = document.querySelector(".about-content");

console.log(url);

async function getContent() {

    const response = await fetch(corsFix);

    const results = await response.json();

    console.log(results);

    const about = results;

    container.innerHTML = "";

    for (let i = 0; i < about.length; i++) {

      if (i === 8) {
        break;
      }

      container.innerHTML +=
        ` 
        <div class="text">
                <h1>About us</h1>
                <p>Are you a traveller and wanna share your story? Send us an email to collab@travelcoco.com </p>
            </div>
            <div class="visuals">
            </div>`;
    }

}

getContent();