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
