const container = document.querySelector(".about-content");

const url = "http://martineho.com/travelcoco/wp-json/wp/v2/pages/18";
const corsFix = "https://noroffcors.herokuapp.com/" + url;

async function getContent() {

    const response = await fetch(corsFix);

    const content= await response.json();

    console.log(content);

    container.innerHTML +=
        ` <div class="text">
                <h1>${content.title.rendered}</h1>
                <p>${content.content.rendered}</p>
            </div>
            <div class="visuals">
            <figure></figure>
          </div>`;
}
getContent();