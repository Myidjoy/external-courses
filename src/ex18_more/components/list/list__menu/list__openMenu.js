import { deleteList } from '../list__deleteList.js';

const listMenuBtns = document.getElementsByClassName('list__menu-btn');

for (let i = 0; i < listMenuBtns.length; i++) {
  listMenuBtns[i].addEventListener('click', openMenu);
}

function openMenu() {
  this.removeEventListener('click', openMenu);

  const ul = document.createElement('ul');
  ul.classList.add('list__menu');

  const liDelete = document.createElement('li');
  liDelete.innerText = 'Delete';

  this.after(ul);
  ul.append(liDelete);

  this.addEventListener('click', closeMenu);
  liDelete.addEventListener('click', deleteList);

  function closeMenu() {
    this.removeEventListener('click', closeMenu);
    ul.classList.add('list__menu--close');

    setTimeout(finishClose.bind(this), 550);

    function finishClose() {
      ul.remove();
      this.addEventListener('click', openMenu);
    }
  }
}

export { openMenu };
