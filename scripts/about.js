const directorsContainer = document.getElementById("directors__cardBox");

const directorsArr = [
  {
    image: "../assets/avatar-nikita.jpg",
    name: "Nikita Marks",
    role: "Founder & CEO",
    icon: "../assets/icon-cross.svg",
  },
  {
    image: "../assets/avatar-christian.jpg",
    name: "Cristian Duncan",
    role: "Co-founder & COO",
    icon: "../assets/icon-cross.svg",
  },
  {
    image: "../assets/avatar-cruz.jpg",
    name: "Cruz Hamer",
    role: "Co-founder & CTO",
    icon: "../assets/icon-cross.svg",
  },
  {
    image: "../assets/avatar-drake.jpg",
    name: "Drake Heaton",
    role: "Business Development Lead",
    icon: "../assets/icon-cross.svg",
  },
  {
    image: "../assets/avatar-griffin.jpg",
    name: "Griffin Wise",
    role: "Lead Marketing",
    icon: "../assets/icon-cross.svg",
  },
];

const renderCards = (arr) => {
  const cards = arr
    .map((card) => {
      return `
                <div class="director__card">
                <img class="director__card--avatar" src="${card.image}" alt="director-img" />
                <h1 class="director__card--title">${card.name}</h1>
                <p class="director__card--role">${card.role}</p>
                <img class="director__card--icon" src="${card.icon}" alt="icon" />
                </div>
        
        
        `;
    })
    .join("");

  directorsContainer.innerHTML = cards;
};

renderCards(directorsArr);
