const directorsContainer = document.getElementById("directors__cardBox");
const toggleBtn = document.getElementsByClassName("director__card--iconBox");
console.log(toggleBtn);

const directorsArr = [
  {
    image: "../assets/avatar-nikita.jpg",
    name: "Nikita Marks",
    role: "Founder & CEO",
    icon: "../assets/icon-cross.svg",
    quote:
      "'It always amazes me how much talent there is in every corner of the globe.'",
    twitterIcon: "../assets/icon-twitter.svg",
    linkedinIcon: "../assets/icon-linkedin.svg",
  },
  {
    image: "../assets/avatar-christian.jpg",
    name: "Cristian Duncan",
    role: "Co-founder & COO",
    icon: "../assets/icon-cross.svg",
    quote:
      "'Distributed teams required unique processes. You need to approach work in a new way.'",
    twitterIcon: "../assets/icon-twitter.svg",
    linkedinIcon: "../assets/icon-linkedin.svg",
  },
  {
    image: "../assets/avatar-cruz.jpg",
    name: "Cruz Hamer",
    role: "Co-founder & CTO",
    icon: "../assets/icon-cross.svg",
    quote:
      "'Technology is at the forefront of enabling distributed teams. That's where we come in.'",
    twitterIcon: "../assets/icon-twitter.svg",
    linkedinIcon: "../assets/icon-linkedin.svg",
  },
  {
    image: "../assets/avatar-drake.jpg",
    name: "Drake Heaton",
    role: "Business Development Lead",
    icon: "../assets/icon-cross.svg",
    quote:
      "'Hiring similar people from similar backgrounds is a surefire way to stunt innovation.'",
    twitterIcon: "../assets/icon-twitter.svg",
    linkedinIcon: "../assets/icon-linkedin.svg",
  },
  {
    image: "../assets/avatar-griffin.jpg",
    name: "Griffin Wise",
    role: "Lead Marketing",
    icon: "../assets/icon-cross.svg",
    quote:
      "'Unique perspectives shape unique products, which is what you need to survive these days.'",
    twitterIcon: "../assets/icon-twitter.svg",
    linkedinIcon: "../assets/icon-linkedin.svg",
  },
  {
    image: "../assets/avatar-aden.jpg",
    name: "Aden Allan",
    role: "Head of Talent",
    icon: "../assets/icon-cross.svg",
    quote:
      "'Empowered teams create truly amazing products. Set the north star and let them follow it.'",
    twitterIcon: "../assets/icon-twitter.svg",
    linkedinIcon: "../assets/icon-linkedin.svg",
  },
];

const renderCards = (arr) => {
  const cards = arr
    .map((card) => {
      return `
                <div class="director__card">
                <div class="director__card--frontside">
                <img class="director__card--avatar" src="${card.image}" alt="director-img" />
                <h1 class="director__card--title">${card.name}</h1>
                <p class="director__card--role">${card.role}</p>
                <div class="director__card--iconBox">
                <img class="director__card--icon" src="${card.icon}" alt="icon" />
                </div>
                </div>
                <div class="director__card--backside">
                <h1 class="director__card--backTitle">${card.name}</h1>
                <p class="director__card--backQuote">${card.quote}</p>
                <div class="director__card--backIcons">
                <img class="director__card--backIcon" src="${card.twitterIcon}" alt="twitter"/>
                <img class="director__card--backIcon" src="${card.linkedinIcon}" alt="linked"/>
                </div>
                </div>
                </div>
        
        
        `;
    })
    .join("");

  directorsContainer.innerHTML = cards;
};

renderCards(directorsArr);

Array.from(toggleBtn).forEach((el) =>
  el.addEventListener("click", (event) => {
    const card = event.target.closest(".director__card");
    card.classList.toggle("flipped");
    if (card.classList.contains("flipped")) {
      const iconBox = event.target.closest(".director__card--iconBox");
      iconBox.classList.add("switched");
    } else {
      iconBox.classList.remove("switched");
    }
  })
);
