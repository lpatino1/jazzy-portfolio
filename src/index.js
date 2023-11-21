//Creating cards for projects
const cardData = [
  {
    heading: "Timed Trivia Quiz",
    body: "One of my first projects with Javascript was inspired by a popular GACHA game on the App Store known as Genshin Impact.",
    link: "https://lpatino1.github.io/timed-trivia-quiz/",
  },
  {
    heading: "Weather Dashboard",
    body: "A simple weather dashboard demonstrating API knowledge.",
    link: "https://lpatino1.github.io/weather-dashboard/",
  },
  {
    heading: "Concertopia",
    body: "A group project music app allowing users to search for both music and events near them using the following API's: The Audio DB, Lyrcs.ovh, Open Cage Data Geocoder, Ticketmaster Discovery Map Widget.",
    link: "https://lpatino1.github.io/concertopia/",
  },
  {
    heading: "Tech Blog",
    body: "this is Card body4",
    link: "https://github.com/lpatino1/tech-blog",
  },
];

const postContainer = document.querySelector(".card-container");

const postMethods = () => {
  cardData.map((postData) => {
    console.log(postData);
    const postElement = document.createElement("div");
    postElement.classList.add("card");
    postElement.innerHTML = `
    <a target= "_blank" href="${postData.link}"class="card-heading">${postData.heading}</a>
    <p class="card-body">${postData.body}</p>`;
    postContainer.appendChild(postElement);
  });
};

postMethods();
