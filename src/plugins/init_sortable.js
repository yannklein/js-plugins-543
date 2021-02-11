import Sortable from 'sortablejs';

const initSortable = () => {
  const results = document.getElementById('results');
  // Sortable.create(results);
  Sortable.create(results, {
    ghostClass: "ghost",
    animation: 1500,
    // onEnd: (event) => {
    //   alert(`${event.oldIndex} moved to ${event.newIndex}`);
    // }
  });
};

export { initSortable };
