const aboutContainer = document.getElementById("about__container");
const quotesContainer = document.getElementById("quotes__container");
console.log(quotesContainer);

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

let quotes = [
  {
    quoteImg: "../assets/icon-quotes.svg",
    description:
      "“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
    name: "Kady Baker",
    position: "Product Manager at Bookmark",
    image: "../assets/avatar-kady.jpg",
  },
  {
    quoteImg: "../assets/icon-quotes.svg",
    description:
      "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
    name: "Aiysha Reese",
    position: "Founder of Manage",
    image: "../assets/avatar-aiysha.jpg",
  },
  {
    quoteImg: "../assets/icon-quotes.svg",
    description:
      "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
    name: "Arthur Clarke",
    position: "Co-founder of MyPhysio",
    image: "../assets/avatar-arthur.jpg",
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

const renderQuotes = (arr) => {
  const quotes = arr
    .map((quote) => {
      return `
                <div class="quote__container">
                <img class="quote__container--quoteImg" src="${quote.quoteImg}" alt="quote-img"/>
                <p class="quote__container--description">${quote.description}</p>
                <h2 class="quote__container--title">${quote.name}</h2>
                <p class="quote__container--position">${quote.position}</p>
                <img class="quote__container--svg" src="${quote.image}" alt="image"/>
                </div>
        `;
    })
    .join("");

  quotesContainer.innerHTML = quotes;
};
renderQuotes(quotes);
