const btnRetour = document.querySelector('#btn-retour');

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    btnRetour.style.display = 'flex';
  } else {
    btnRetour.style.display = 'none';
  }
});

btnRetour.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const btnFiltre = document.querySelectorAll('.filtre-btn');
const commandCards = document.querySelectorAll('#commandes article');

btnFiltre.forEach((button) => {
  button.addEventListener('click', function () {
    const filtreSelectionnee = button.dataset.filter;

    btnFiltre.forEach((btn) => {
      btn.classList.remove('active');
    });

    button.classList.add('active');
    commandCards.forEach((card) => {
      const CategorieCarte = card.dataset.category;

      if (
        filtreSelectionnee === 'all' ||
        filtreSelectionnee === CategorieCarte
      ) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
