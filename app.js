const header = document.querySelector('[data-header]');
const moodButtons = [...document.querySelectorAll('[data-mood]')];
const resultTitle = document.querySelector('[data-result-title]');
const resultCopy = document.querySelector('[data-result-copy]');

const recommendations = {
  focused: ['Filter coffee + almond croissant', 'Clear, aromatic and composed—a pairing designed to stay out of the way of a good idea.'],
  adventurous: ['Seasonal pour + bakery special', 'A changing coffee and a bake with texture: two new details to notice in one visit.'],
  comforted: ['Flat white + warm pastry', 'Soft, rounded and familiar—the coffee equivalent of settling into your favourite chair.'],
  refreshed: ['Cold brew + light breakfast', 'Bright, clean and easy-going, with enough lift for the rest of the day.']
};

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

moodButtons.forEach((button) => {
  button.addEventListener('click', () => {
    moodButtons.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    const [title, copy] = recommendations[button.dataset.mood];
    resultTitle.textContent = title;
    resultCopy.textContent = copy;
  });
});
