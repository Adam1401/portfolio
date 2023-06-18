const carouselImages = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselTitle = document.getElementById('carouselTitle');
const ouvrirContact = document.querySelector('.contact');
const fermerContact = document.querySelector('.fermerContact');
const bandeauFixed = document.querySelector('.bandeau-fixed');
const maPage = document.querySelector('.main');
const fermerRetex = document.querySelectorAll('.fermerRetex');

const retexJava = document.querySelector('.java');
const retexSql = document.querySelector('.sql');
const retexWeb = document.querySelector('.web');
const retexCom = document.querySelector('.communication');
const retexGestion = document.querySelector('.gestion');
const retexRecents = document.querySelector('.recents');
const retexPerso = document.querySelector('.perso');
const retexBash = document.querySelector('.bash');

const retexOdomo = document.querySelector('.imageOdomo');
const retexBiosphere = document.querySelector('.imageBiosphere');
const retexCannaj = document.querySelector('.imageCannaj');
const retexExterne = document.querySelector('.imageExterne');
const retexVmware = document.querySelector('.imageVmware');
const retexBillet = document.querySelector('.imageBillet');

const downloadCANNAJ = document.querySelector('.download_CANNAJ');
const downloadButtons = document.querySelectorAll('.download');

const ouvrirProjets = document.querySelectorAll('.ouvrir-projet');
const pages = document.querySelectorAll('.page');

let scrollAmount = 0;
const step = carouselImages.offsetWidth;

downloadCANNAJ.addEventListener('click', () => {
  window.open("retex/CANNAJ/accueil.html", "_blank");
})

downloadButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filePath = button.classList[1].replace('download_', '');
    window.open(`retex/${filePath}.pdf`, "_blank");
  });
});

prevButton.addEventListener('click', () => {
  if (scrollAmount > 0) {
    scrollAmount -= carouselImages.offsetWidth;
    carouselImages.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
});

nextButton.addEventListener('click', () => {
  if (scrollAmount < carouselImages.scrollWidth - carouselImages.offsetWidth) {
    scrollAmount += carouselImages.offsetWidth;
    carouselImages.scrollTo({
      top: 0,
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
});

//------------------------------------------------------------------------------------Contact

ouvrirContact.addEventListener('click', () => {
  document.body.classList.add('fond-sombre');
  infoContact.style.display = 'block';
  bandeauFixed.style.opacity = 0.3;
  maPage.style.opacity = 0.3;
  pageOdomo.style.display = 'none'
  pageBiosphere.style.display = 'none'
  pageBillet.style.display = 'none'
  pageCannaj.style.display = 'none'
  pageExterne.style.display = 'none'
  pageVmware.style.display = 'none'

});

fermerContact.addEventListener('click', () => {
  infoContact.style.display = 'none';
  bandeauFixed.style.opacity = 1;
  maPage.style.opacity = 1;
});

//----------------------------------------------------------------------------------------------------------Projets

ouvrirProjets.forEach((bouton, index) => {
  bouton.addEventListener('click', () => {
    document.body.classList.add('fond-sombre');

    pages.forEach(page => {
      page.style.display = 'none';
    });

    pages[index].style.display = 'block';
    bandeauFixed.style.opacity = 0.3;
    maPage.style.opacity = 0.3;
    infoContact.style.display = 'none';
  });
});

//--------------------------------------------------------------------------------------------------------------Language

const retexOptions = {
  java: {
    images: [retexBiosphere, retexOdomo],
    display: ['block', 'block'],
    hide: [retexBillet, retexVmware, retexCannaj, retexExterne]
  },
  recents: {
    images: [retexBiosphere, retexOdomo, retexBillet, retexVmware, retexCannaj, retexExterne],
    display: ['block', 'block', 'block', 'block', 'block', 'block'],
    hide: []
  },
  sql: {
    images: [retexBillet],
    display: ['block'],
    hide: [retexBiosphere, retexOdomo, retexVmware, retexCannaj, retexExterne],
  },
  perso: {
    images: [],
    display: [],
    hide: [retexBiosphere, retexOdomo, retexBillet, retexVmware, retexCannaj, retexExterne],
  },
  communication: {
    images: [retexExterne],
    display: ['block'],
    hide: [retexBiosphere, retexOdomo, retexBillet, retexVmware, retexCannaj],
  },
  gestion: {
    images: [retexExterne, retexBillet],
    display: ['block', 'block'],
    hide: [retexBiosphere, retexOdomo, retexVmware, retexCannaj],
  },
  web: {
    images: [retexCannaj],
    display: ['block'],
    hide: [retexBiosphere, retexOdomo, retexBillet, retexVmware, retexExterne],
  },
  bash: {
    images: [retexVmware],
    display: ['block'],
    hide: [retexBiosphere, retexOdomo, retexBillet, retexCannaj, retexExterne],
  },
};

function updateRetexDisplay(images, display, hide) {
  images.forEach((image, index) => {
    image.style.display = display[index];
  });

  hide.forEach(element => {
    element.style.display = 'none';
  });

  carouselImages.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

function addRetexClickEvent(bouton, options) {
  bouton.addEventListener('click', () => {
    updateRetexDisplay(options.images, options.display, options.hide);
  });
}

addRetexClickEvent(retexJava, retexOptions.java);
addRetexClickEvent(retexRecents, retexOptions.recents);
addRetexClickEvent(retexSql, retexOptions.sql);
addRetexClickEvent(retexPerso, retexOptions.perso);
addRetexClickEvent(retexCom, retexOptions.communication);
addRetexClickEvent(retexGestion, retexOptions.gestion);
addRetexClickEvent(retexWeb, retexOptions.web);
addRetexClickEvent(retexBash, retexOptions.bash);

fermerRetex.forEach(bouton => {
  bouton.addEventListener('click', () => {
    pages.forEach(page => {
      page.style.display = 'none';
    });

    // Rétablir l'opacité normale des éléments
    bandeauFixed.style.opacity = 1;
    maPage.style.opacity = 1;
  });
});