const userMenuBtn = document.getElementsByClassName('user-menu-btn')[0];
function closeMenu() {
  const userMenu = document.getElementsByClassName('user-menu')[0];

  userMenuBtn.classList.remove('user-menu-btn--opened');
  userMenuBtn.classList.add('user-menu-btn--closed');
  userMenuBtn.removeEventListener('click', closeMenu);
  userMenuBtn.removeEventListener('blur', closeMenu);

  userMenu.classList.add('user-menu--close');

  setTimeout(() => {
    userMenu.remove();
    // eslint-disable-next-line
    userMenuBtn.addEventListener('click', openMenu, { once: true });
  }, 560);
}
function openMenu() {
  const header = document.getElementsByClassName('header')[0];
  const userMenu = document.createElement('ul');
  const myAccount = document.createElement('li');
  const myTasks = document.createElement('li');
  const logOut = document.createElement('li');

  userMenuBtn.classList.remove('user-menu-btn--closed');
  userMenuBtn.classList.add('user-menu-btn--opened');
  userMenu.classList.add('user-menu');

  myAccount.classList.add('user-menu__item');
  myAccount.setAttribute('href', '#');
  myAccount.innerHTML = 'My account';

  myTasks.classList.add('user-menu__item');
  myTasks.setAttribute('href', '#');
  myTasks.innerHTML = 'My tasks';

  logOut.classList.add('user-menu__item');
  logOut.setAttribute('href', '#');
  logOut.innerHTML = 'Log out';

  header.append(userMenu);
  userMenu.append(myAccount);
  userMenu.append(myTasks);
  userMenu.append(logOut);
  userMenuBtn.addEventListener('click', closeMenu);
  userMenuBtn.addEventListener('blur', closeMenu);
}

userMenuBtn.addEventListener('click', openMenu, { once: true });
