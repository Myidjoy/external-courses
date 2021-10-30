import { addCard, addCardBacklog, checkAddCardBtns } from './list__cardLogic.js';
import { checkActiveAndFinishedTasks } from './list__checkActiveAndFinishedTasks.js';
import { getHaveNoListsNotified } from './list__haveNoLists.js';

function deleteList() {
  this.removeEventListener('click', deleteList);

  let id = this.parentNode.nextSibling.nextSibling.id;
  const addCardBtns = document.getElementsByClassName('list__add-card-btn');
  const dataMock = JSON.parse(localStorage.getItem('dataMock'));

  if (id === '0' && dataMock.length > 1) {
    addCardBtns[1].removeEventListener('click', addCard);
    addCardBtns[1].addEventListener('click', addCardBacklog);
  }

  dataMock.splice(id, 1);

  for (id + 1; id < addCardBtns.length; id++) {
    addCardBtns[id].id = String(Number(addCardBtns[id].id) - 1);
  }

  localStorage.setItem('dataMock', JSON.stringify(dataMock));

  this.parentNode.parentNode.remove();

  checkAddCardBtns();

  checkActiveAndFinishedTasks();

  if (dataMock.length === 0) {
    getHaveNoListsNotified();
  }
}

export { deleteList };
