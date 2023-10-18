const atributos = [
    {
      category: "Reaction",
      score: 80,
      icon: "./assets/images/icon-reaction.svg",
      color: "reaction"
    },
    {
      category: "Memory",
      score: 92,
      icon: "./assets/images/icon-memory.svg",
      color: "memory"
    },
    {
      category: "Verbal",
      score: 61,
      icon: "./assets/images/icon-verbal.svg",
      color: "verbal"
    },
    {
      category: "Visual",
      score: 72,
      icon: "./assets/images/icon-visual.svg",
      color: "visual"
    }
]
const contairerStats = document.querySelector('.stats')

let cards = atributos.map((atributo) => {
    return `
    <section class="stat ${atributo.color}-bg">
          <section class="atributo">
                <img src="${atributo.icon}" alt="">
                <p class="${atributo.color}">${atributo.category}</p>
          </section>
          <p>${atributo.score} <span>/ 100</span></p>
    </section>
    `
})

cards.forEach((card) => {
    contairerStats.innerHTML += card
})