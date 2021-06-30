const aboutContainer = document.getElementById("about__container");

let details = [
  {
    image: "../assets/icon-person.svg",
    title: "Experienced Individuals",
    description:
      "Our network is made up of highly experienced professionals who are passionate about what they do.",
  },

  {
    image: "../assets/icon-cog.svg",
    title: "Easy to Implement",
    description:
      "Our processes have been refined over years of implementation meaning our teams always deliver.",
  },

  {
    image: "../assets/icon-chart.svg",
    title: "Enchanced Productivity",
    description:
      "Our customized platform with in-built analytics helps you manage your distributed teams.",
  },
];

const renderInfo = (arr) => {
  const details = arr
    .map((detail) => {
      return `
                <div class="detail__container">
                <img class="detail__container--svg" src="${detail.image}" alt="image"/>
                <h2 class="detail__container--title">${detail.title}</h2>
                <p class="detail__container--description">${detail.description}</p>
                </div>
        `;
    })
    .join("");

  aboutContainer.innerHTML = details;
};
renderInfo(details);
