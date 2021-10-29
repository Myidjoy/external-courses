// eslint-disable-next-line
import { addCardBacklog, addCard, checkAddCardBtns } from '../../list/list__cardLogic.js';
// eslint-disable-next-line
import { openMenu } from '../../list/list__menu/list__openMenu.js';
// eslint-disable-next-line
import { checkActiveAndFinishedTasks } from '../../list/list__checkActiveAndFinishedTasks.js';

const createListBtn = document.getElementsByClassName('create-list__button')[0];

function createList() {
  const main = document.getElementsByClassName('main')[0];
  const list = document.createElement('div');
  list.classList.add('list');

  const input = document.createElement('input');
  input.classList.add('list__name', 'list__name-input');

  const listMenuBtn = document.createElement('button');
  listMenuBtn.classList.add('list__menu-btn');
  listMenuBtn.innerHTML = '...';

  main.prepend(list);
  list.append(input);
  list.append(listMenuBtn);

  input.focus();

  input.addEventListener('blur', finishCreateList);

  const dataMock = JSON.parse(localStorage.getItem('dataMock'));

  if (dataMock.length === 0) {
    const notified = document.getElementsByClassName('have-no-list-notified')[0];
    notified.innerText = 'Enter list name.';
  }

  function finishCreateList() {
    input.removeEventListener('blur', finishCreateList);

    if (input.value.trim().length === 0) {
      list.remove();

      if (dataMock.length === 0) {
        const notified = document.getElementsByClassName('have-no-list-notified')[0];
        notified.innerText = "You have no active list. Please press 'create new list' button.";
      }

      return;
    }

    if (dataMock.length === 0) {
      const notified = document.getElementsByClassName('have-no-list-notified')[0];
      notified.remove();
    }

    const listName = document.createElement('div');
    listName.classList.add('list__name');
    listName.innerHTML = input.value;

    input.remove();

    const listItemWrapper = document.createElement('ul');
    listItemWrapper.classList.add('list__item-wrapper');

    list.prepend(listName);
    list.append(listItemWrapper);

    const addCardBtn = document.createElement('button');
    addCardBtn.classList.add('list__add-card-btn', 'list__add-card-btn--active');
    addCardBtn.innerHTML = 'Add card';
    addCardBtn.id = '0';
    list.append(addCardBtn);

    const addCardBtns = document.getElementsByClassName('list__add-card-btn');

    for (let i = 1; i < addCardBtns.length; i++) {
      addCardBtns[i].id = String(Number(addCardBtns[i].id) + 1);
    }

    dataMock.splice(0, 0, {
      title: input.value,
      issues: [],
    });
    localStorage.setItem('dataMock', JSON.stringify(dataMock));

    if (dataMock.length > 1) {
      addCardBtns[1].removeEventListener('click', addCardBacklog);
      addCardBtns[1].addEventListener('click', addCard);
    }
    addCardBtns[0].addEventListener('click', addCardBacklog);

    checkAddCardBtns();

    listMenuBtn.addEventListener('click', openMenu);

    checkActiveAndFinishedTasks();
  }
}

createListBtn.onclick = createList;
