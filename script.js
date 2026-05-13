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
const commandCount = document.querySelector('#command-count');
const commandSearch = document.querySelector('#command-search');
let currentFilter = 'all';

function updateCommandeCount(count) {
  commandCount.textContent = `Commandes affichées : ${count}`;
}

function updateCommandDisplay() {
  const searchValue = commandSearch.value.toLowerCase();
  let count = 0;

  commandCards.forEach((card) => {
    const cardCategory = card.dataset.category;
    const cardText = card.textContent.toLowerCase();
    const matchFilter =
      currentFilter === 'all' || currentFilter === cardCategory;
    const matchSearch = cardText.includes(searchValue);

    if (matchFilter && matchSearch) {
      card.style.display = 'block';
      count++;
    } else {
      card.style.display = 'none';
    }
  });
  updateCommandeCount(count);
}

btnFiltre.forEach((button) => {
  button.addEventListener('click', function () {
    currentFilter = button.dataset.filter;

    btnFiltre.forEach((btn) => {
      btn.classList.remove('active');
    });

    button.classList.add('active');

    updateCommandDisplay();
  });
});

commandSearch.addEventListener('input', function () {
  updateCommandDisplay();
});

updateCommandDisplay();
