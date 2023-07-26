import './style.css';

const listTasks = [
  {
    description: 'Going to Office',
    completed: false,
    index: 0,
  },
  {
    description: 'Meeting with ali',
    completed: false,
    index: 1,
  },
  {
    description: 'Go to market',
    completed: false,
    index: 2,
  },

];
const listCard = document.getElementById('list');
listTasks.forEach((arr) => {
  const task = `
    <div class="card-task">
        <input type="checkbox">
        <div class="card list">${arr.description}</div>
        <button class="btn btn-drag" type="button"></button>
    <div>
  `;
  listCard.insertAdjacentHTML('beforeend', task);
});
