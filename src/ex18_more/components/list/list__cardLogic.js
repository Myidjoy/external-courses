import { checkActiveAndFinishedTasks } from './list__checkActiveAndFinishedTasks.js';
import { getHaveNoListsNotified } from './list__haveNoLists.js';

if (localStorage.getItem('dataMock') === null) {
  const dataMock = [
    {
      title: 'backlog',
      issues: [],
    },
    {
      title: 'ready',
      issues: [],
    },
    {
      title: 'in Progress',
      issues: [],
    },
    {
      title: 'Finished',
      issues: [],
    },
  ];
  localStorage.setItem('dataMock', JSON.stringify(dataMock));
}

function createLists() {
  const dataMock = JSON.parse(localStorage.getItem('dataMock'));

  if (dataMock.length === 0) {
    getHaveNoListsNotified();

    return;
  }

  for (let i = 0; i < dataMock.length; i++) {
    const main = document.getElementsByClassName('main')[0];
    const list = document.createElement('div');
    list.classList.add('list');

    const listName = document.createElement('div');
    listName.classList.add('list__name');
    listName.innerHTML = `${dataMock[i].title}`;

    const listMenuBtn = document.createElement('button');
    listMenuBtn.classList.add('list__menu-btn');
    listMenuBtn.innerHTML = '...';

    const listItemWrapper = document.createElement('ul');
    listItemWrapper.classList.add('list__item-wrapper');

    main.append(list);
    list.append(listName);
    list.append(listMenuBtn);
    list.append(listItemWrapper);

    for (let y = 0; y < dataMock[i].issues.length; y++) {
      const listItem = document.createElement('li');
      listItem.classList.add('list__item');
      listItem.innerHTML = dataMock[i].issues[y].name;
      listItemWrapper.append(listItem);
    }

    const addCardBtn = document.createElement('button');
    addCardBtn.classList.add('list__add-card-btn');
    addCardBtn.innerHTML = 'Add card';
    addCardBtn.id = `${i}`;
    list.append(addCardBtn);
  }

  checkActiveAndFinishedTasks();
}

createLists();

function addEventListeners() {
  const dataMock = JSON.parse(localStorage.getItem('dataMock'));

  if (dataMock.length === 0) {
    return;
  }

  const backlogAddCardBtn = document.getElementsByClassName('list__add-card-btn')[0];

  backlogAddCardBtn.classList.add('list__add-card-btn--active');

  backlogAddCardBtn.addEventListener('click', addCardBacklog);

  const addCardBtns = document.getElementsByClassName('list__add-card-btn');

  for (let i = 1; i < addCardBtns.length; i++) {
    addCardBtns[i].addEventListener('click', addCard);
  }
}

addEventListeners();

function addCardBacklog() {
  const backlog = document.getElementsByClassName('list__item-wrapper')[0];
  const input = document.createElement('input');
  input.classList.add('list__item');

  backlog.append(input);

  input.focus();

  input.addEventListener('blur', addTask);

  input.addEventListener('keydown', addTaskPressEnter);

  function addTaskPressEnter(e) {
    if (e.code === 'Enter') {
      addTask();
    }
  }

  function addTask() {
    input.removeEventListener('blur', addTask);
    input.removeEventListener('keydown', addTaskPressEnter);

    if (input.value.trim().length === 0) {
      input.remove();
      return;
    }

    const li = document.createElement('li');
    li.classList.add('list__item');
    li.innerHTML = `${input.value}`;

    input.remove();
    backlog.append(li);

    const dataMock = JSON.parse(localStorage.getItem('dataMock'));

    dataMock[0].issues.push({
      name: input.value,
    });

    localStorage.setItem('dataMock', JSON.stringify(dataMock));

    const addCardBtns = document.getElementsByClassName('list__add-card-btn');

    if (dataMock.length > 1) {
      addCardBtns[1].classList.remove('list__add-card-btn--disabled');
      addCardBtns[1].classList.add('list__add-card-btn--active');
      addCardBtns[1].disabled = false;
    }

    checkActiveAndFinishedTasks();
  }
}

function addCard() {
  const dataMock = JSON.parse(localStorage.getItem('dataMock'));
  const select = document.createElement('select');

  select.classList.add('list__item', 'list__item--select');

  this.previousSibling.append(select);

  const id = this.id;
  const previousListIndex = id - 1;

  for (let taskIndex = 0; taskIndex < dataMock[previousListIndex].issues.length; taskIndex++) {
    const option = document.createElement('option');

    option.innerHTML = dataMock[previousListIndex].issues[taskIndex].name;
    option.setAttribute('value', dataMock[previousListIndex].issues[taskIndex].name);
    option.id = `${previousListIndex} ${taskIndex}`;

    select.append(option);
  }

  select.focus();

  select.addEventListener('blur', addTask, { once: true });

  function addTask() {
    const options = document.getElementsByClassName('list__item--select')[0];
    const listIndex = options[this.selectedIndex].id[0];
    const taskIndex = options[this.selectedIndex].id[2];

    dataMock[listIndex].issues.splice(taskIndex, 1);

    const card = document.getElementsByClassName('list__item-wrapper')[listIndex];
    const task = card.getElementsByClassName('list__item')[taskIndex];

    task.remove();
    select.remove();

    const listItem = document.createElement('li');

    listItem.classList.add('list__item');
    listItem.innerHTML = this.value;

    const list = document.getElementsByClassName('list__item-wrapper')[id];

    list.append(listItem);
    dataMock[id].issues.push({
      name: this.value,
    });

    localStorage.setItem('dataMock', JSON.stringify(dataMock));

    checkAddCardBtns();

    checkActiveAndFinishedTasks();
  }
}

function checkAddCardBtns() {
  const dataMock = JSON.parse(localStorage.getItem('dataMock'));
  const addCardBtns = document.getElementsByClassName('list__add-card-btn');

  for (let i = 1; i < dataMock.length; i++) {
    if (dataMock[i - 1].issues.length === 0) {
      addCardBtns[i].disabled = true;
      addCardBtns[i].classList.remove('list__add-card-btn--active');
      addCardBtns[i].classList.add('list__add-card-btn--disabled');
    } else {
      addCardBtns[i].classList.remove('list__add-card-btn--disabled');
      addCardBtns[i].classList.add('list__add-card-btn--active');
      addCardBtns[i].disabled = false;
    }
  }
}

checkAddCardBtns();

export { addCardBacklog, addCard, checkAddCardBtns };
