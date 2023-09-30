const containerElm = document.querySelector('.container');
const form = document.querySelector('form');
const email = document.querySelector('#email');

const zpracujOdeslani = (event) => {
  event.preventDefault();
  return (containerElm.innerHTML = `<p>
Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email.value}</p>`);
};

form.addEventListener('submit', zpracujOdeslani);
