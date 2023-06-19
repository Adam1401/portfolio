const carouselImages = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselTitle = document.getElementById('carouselTitle');
const ouvrirContact = document.querySelector('.contact');
const fermerContact = document.querySelector('.fermerContact');
const bandeauFixed = document.querySelector('.bandeau-fixed');
const maPage = document.querySelector('.main');
const fermerRetex = document.querySelectorAll('.fermerRetex');

const downloadCANNAJ = document.querySelector('.download_CANNAJ');
const downloadButtons = document.querySelectorAll('.download');

const ouvrirProjets = document.querySelectorAll('.ouvrir-projet');
const pages = document.querySelectorAll('.page');

const retexCategories = document.querySelectorAll('.retex-category');
const retexImages = document.querySelectorAll('.retex-image');

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

  pages.forEach(page => {
    page.style.display = 'none';
  });

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

retexCategories.forEach(category => {
  category.addEventListener('click', () => {
    const categoryName = category.textContent.trim();

    retexImages.forEach(image => {
      if (image.classList.contains(categoryName)) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });

    carouselImages.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
});

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