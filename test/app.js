const toggle = document.getElementById("toggleDark");
const body = document.body;

toggle.addEventListener('click', function () {
  this.classList.toggle("fa-sun");
  this.classList.toggle("fa-moon");

  if (body.classList.toggle("black-theme")) {
    body.style.transition = "1.4s";
  } else {
    body.style.transition = "1.4s";
  }
});

toggle.addEventListener('click', function () {
    this.classList.toggle("fa-bars");

    if (body.classList.toggle("fa-bars")) {
       
    }
});

const barras = document.getElementById('barras');
const navMenu = document.querySelector('.nav-menu');

barras.addEventListener('click', () => {
  navMenu.classList.toggle('active');
})

const frases =[
  "Night falls fast. Today is in the past",

  "Always think of what is useful and not what is beautiful. Beauty will come of its own accord.",
  
  "I say let the world go to hell, but I should always have my tea.",

  "It's precisely the disappointing stories, which have no proper ending and therefore no proper meaning, that sound true to life.",
  "We are so lightly here. It is in love that we are made. In love we disappear.",

  "I am not sure that I exist, actually. I am all the writers that I have read, all the people that I have met, all the women that I have loved; all the cities I have visited.",

  "For in his presence I grow silent, because the smallest words — yes, now, well, and, but, then, oh! — are so loaded, coming from me to him they have a hundred times their meaning",
  
  "What I want, is that you love me even unto death. For my part, it is in death I love you at this very instant. But I don't want your love unless you know I am repulsive, and love me even as you know it.",
  
  "I need silence, and to be alone and to go out, and to save one hour to consider what has happened to my world, what death has done to my world.",
  
  "The artist exists because the world is not perfect. Art would be useless if the world were perfect, as man wouldn’t look for harmony but would simply live in it."
];

function mostrarFrase() {
  const indice = Math.floor(Math.random() * frases.length);
  document.getElementById("frases").innerText = frases[indice];
}