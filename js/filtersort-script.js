document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('projects-container');
  const cards = Array.from(container.querySelectorAll('.card'));
  const filterButtons = document.querySelectorAll('.filter-btn');
  const sortSelect = document.getElementById('sort-select');

  let activeFilter = 'all';

  const getSortValue = (card) => {
    const year = Number(card.dataset.year) || 0;
    const termOrder = Number(card.dataset.term) || 0;
    return year * 10 + termOrder;
  };

  const sortCards = (sortType) => {
    const sorted = [...cards].sort((a, b) => {
      if (sortType === 'newest') {
        return getSortValue(b) - getSortValue(a);
      }
      if (sortType === 'oldest') {
        return getSortValue(a) - getSortValue(b);
      }
      if (sortType === 'title-asc') {
        return a.dataset.title.localeCompare(b.dataset.title);
      }
      if (sortType === 'title-desc') {
        return b.dataset.title.localeCompare(a.dataset.title);
      }
      return 0;
    });

    sorted.forEach(card => container.appendChild(card));
  };

  const filterCards = () => {
    cards.forEach(card => {
      const categories = (card.dataset.category || '').split(' ');
      const matches = activeFilter === 'all' || categories.includes(activeFilter);
      card.classList.toggle('hidden', !matches);
    });
  };

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      filterCards();
    });
  });

  sortSelect.addEventListener('change', (event) => {
    sortCards(event.target.value);
    filterCards();
  });

  sortCards(sortSelect.value);
  filterCards();
});