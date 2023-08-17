const listTasks = JSON.parse(localStorage.getItem('tasks')) || [];
const listCard = document.getElementById('list');
const insertInput = document.getElementById('insert');
const enterBtn = document.getElementById('enterBtn');

const updateIndexes = () => {
  listTasks.forEach((task, index) => {
    task.index = index;
  });
};

const updateLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(listTasks));
};

const deleteTask = (index) => {
  listTasks.splice(index, 1);
  updateIndexes();
  updateLocalStorage();
};

const renderTasks = () => {
  listCard.innerHTML = '';
  listTasks.forEach((task, index) => {
    const taskElement = document.createElement('div');
    taskElement.innerHTML = `
      <div class="card-task">
        <input type="checkbox" ${task.completed ? 'checked' : ''}>
        <div class="card list">${task.description}</div>
        <button class="btn btn-delete" type="button"></button>
      </div>`;
    const deleteButton = taskElement.querySelector('.btn-delete');
    deleteButton.addEventListener('click', () => {
      deleteTask(index);
    });
    taskElement.querySelector('input').addEventListener('change', () => {
      task.completed = !task.completed;
      updateLocalStorage();
      renderTasks();
    });
    listCard.appendChild(taskElement);
  });
};

const addTask = (description) => {
  const newTask = {
    description,
    completed: false,
    index: listTasks.length,
  };
  listTasks.push(newTask);
  updateIndexes();
  updateLocalStorage();
  renderTasks();
};

enterBtn.addEventListener('click', () => {
  const newTaskDescription = insertInput.value.trim();
  if (newTaskDescription !== '') {
    addTask(newTaskDescription);
    insertInput.value = '';
  }
});

renderTasks();
