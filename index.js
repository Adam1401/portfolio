const carouselImages = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselTitle = document.getElementById('carouselTitle');
const ouvrirContact = document.querySelector('.contact');
const fermerContact = document.querySelector('.fermerContact');
const bandeauFixed = document.querySelector('.bandeau-fixed');
const maPage = document.querySelector('.page');
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

const pageBiosphere = document.querySelector('.biosphere');
const pageOdomo = document.querySelector('.odomo');
const pageCannaj = document.querySelector('.cannaj');
const pageExterne = document.querySelector('.externe');
const pageVmware = document.querySelector('.vmware');
const pageBillet = document.querySelector('.billet');

const ouvrirBiosphere = document.querySelector('.BIOSPHERE');
const ouvrirOdomo = document.querySelector('.ODOMO');
const ouvrirCannaj = document.querySelector('.CANNAJ');
const ouvrirExterne = document.querySelector('.EXTERNE');
const ouvrirVmware = document.querySelector('.VMWARE');
const ouvrirBillet = document.querySelector('.BILLET');

const downloadBIOSPHERE = document.querySelector('.download_BIOSPHERE');
const downloadODOMO = document.querySelector('.download_ODOMO');
const downloadCANNAJ = document.querySelector('.download_CANNAJ');
const downloadEXTERNE = document.querySelector('.download_EXTERNE');
const downloadVMWARE = document.querySelector('.download_VMWARE');
const downloadBILLET = document.querySelector('.download_BILLET');

let scrollAmount = 0;
const step = carouselImages.offsetWidth;

downloadODOMO.addEventListener('click', () => {
  window.open("retex/ODOMO.pdf", "_blank");
})

downloadBIOSPHERE.addEventListener('click', () => {
  window.open("retex/BIOSPHERE.pdf", "_blank");
})

downloadCANNAJ.addEventListener('click', () => {
  window.open("retex/CANNAJ/accueil.html", "_blank");
})

downloadEXTERNE.addEventListener('click', () => {
  window.open("retex/EXTERNE.pdf", "_blank");
})

downloadVMWARE.addEventListener('click', () => {
  window.open("retex/VMWARE.pdf", "_blank");
})

downloadBILLET.addEventListener('click', () => {
  window.open("retex/BILLET.pdf", "_blank");
})

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

ouvrirOdomo.addEventListener('click', () => {//-----------------odomo
  document.body.classList.add('fond-sombre');

  pageOdomo.style.display = 'block';
  bandeauFixed.style.opacity = 0.3;
  maPage.style.opacity = 0.3;
  infoContact.style.display = 'none'
});

ouvrirBiosphere.addEventListener('click', () => {//---------------Biosphere
  document.body.classList.add('fond-sombre');

  pageBiosphere.style.display = 'block';
  bandeauFixed.style.opacity = 0.3;
  maPage.style.opacity = 0.3;
  infoContact.style.display = 'none'
});

ouvrirCannaj.addEventListener('click', () => {//--------------Cannaj web
  document.body.classList.add('fond-sombre');

  pageCannaj.style.display = 'block';
  bandeauFixed.style.opacity = 0.3;
  maPage.style.opacity = 0.3;
  infoContact.style.display = 'none'
});

ouvrirExterne.addEventListener('click', () => {//---------------analyse externe cannaj
  document.body.classList.add('fond-sombre');

  pageExterne.style.display = 'block';
  bandeauFixed.style.opacity = 0.3;
  maPage.style.opacity = 0.3;
  infoContact.style.display = 'none'
});

ouvrirBillet.addEventListener('click', () => {//------------------------billeterie 
  document.body.classList.add('fond-sombre');

  pageBillet.style.display = 'block';
  bandeauFixed.style.opacity = 0.3;
  maPage.style.opacity = 0.3;
  infoContact.style.display = 'none'
});

ouvrirVmware.addEventListener('click', () => {//------------------------vmware
  document.body.classList.add('fond-sombre');

  pageVmware.style.display = 'block';
  bandeauFixed.style.opacity = 0.3;
  maPage.style.opacity = 0.3;
  infoContact.style.display = 'none'
});

//--------------------------------------------------------------------------------------------------------------Language

retexJava.addEventListener('click', () => { //---------------Java
  retexBiosphere.style.display = 'block';
  retexOdomo.style.display = 'block';
  retexBillet.style.display = 'none';
  retexVmware.style.display = 'none';
  retexCannaj.style.display = 'none';
  retexExterne.style.display = 'none';
  carouselImages.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

retexRecents.addEventListener('click', () => { //--------------TOUT
  retexBiosphere.style.display = 'block';
  retexOdomo.style.display = 'block';
  retexBillet.style.display = 'block';
  retexVmware.style.display = 'block';
  retexCannaj.style.display = 'block';
  retexExterne.style.display = 'block';
  carouselImages.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

retexSql.addEventListener('click', () => { //-------------------BDD
  retexBiosphere.style.display = 'none';
  retexOdomo.style.display = 'none';
  retexBillet.style.display = 'block';
  retexVmware.style.display = 'none';
  retexCannaj.style.display = 'none';
  retexExterne.style.display = 'none';
  carouselImages.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

retexPerso.addEventListener('click', () => { //-------------------Perso
  retexBiosphere.style.display = 'none';
  retexOdomo.style.display = 'none';
  retexBillet.style.display = 'none';
  retexVmware.style.display = 'none';
  retexCannaj.style.display = 'none';
  retexExterne.style.display = 'none';
  carouselImages.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}); 

retexCom.addEventListener('click', () => { //------------------Communication
  retexBiosphere.style.display = 'none';
  retexOdomo.style.display = 'none';
  retexBillet.style.display = 'none';
  retexVmware.style.display = 'none';
  retexCannaj.style.display = 'none';
  retexExterne.style.display = 'block';
  carouselImages.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

retexGestion.addEventListener('click', () => { //---------------------Gestion
  retexBiosphere.style.display = 'none';
  retexOdomo.style.display = 'none';
  retexBillet.style.display = 'block';
  retexVmware.style.display = 'none';
  retexCannaj.style.display = 'none';
  retexExterne.style.display = 'block';
  carouselImages.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

retexWeb.addEventListener('click', () => { //--------------------WEB
  retexBiosphere.style.display = 'none';
  retexOdomo.style.display = 'none';
  retexBillet.style.display = 'none';
  retexVmware.style.display = 'none';
  retexCannaj.style.display = 'block';
  retexExterne.style.display = 'none';
  carouselImages.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

retexBash.addEventListener('click', () => { //----------------Bash
  retexBiosphere.style.display = 'none';
  retexOdomo.style.display = 'none';
  retexBillet.style.display = 'none';
  retexVmware.style.display = 'block';
  retexCannaj.style.display = 'none';
  retexExterne.style.display = 'none';
  carouselImages.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});




fermerRetex.forEach(bouton => {
  bouton.addEventListener('click', () => {
    pageOdomo.style.display = 'none';
    pageBiosphere.style.display = 'none';
    pageCannaj.style.display = 'none';
    pageExterne.style.display = 'none';
    pageVmware.style.display = 'none';
    pageBillet.style.display = 'none'; 
    
    bandeauFixed.style.opacity = 1;
    maPage.style.opacity = 1;
  });
});