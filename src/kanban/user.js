const userMenuBtn = document.querySelector('.user-menu-btn');

//   eslint-disable-next-line
userMenuBtn.addEventListener('click', openMenu, { once: true });
function openMenu() {
  userMenuBtn.classList.remove('user-menu-btn--closed');
  userMenuBtn.classList.add('user-menu-btn--opened');

  const main = document.querySelector('.main');
  const userMenu = document.createElement('nav');
  const myAccount = document.createElement('a');
  const myTasks = document.createElement('a');
  const logOut = document.createElement('a');

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

  main.prepend(userMenu);
  userMenu.append(myAccount);
  userMenu.append(myTasks);
  userMenu.append(logOut);
  //   eslint-disable-next-line
  userMenuBtn.addEventListener('click', closeMenu, { once: true });
}
function closeMenu() {
  userMenuBtn.classList.remove('user-menu-btn--opened');
  userMenuBtn.classList.add('user-menu-btn--closed');

  const userMenu = document.querySelector('.user-menu');
  userMenu.classList.add('user-menu--close');
  setTimeout(() => {
    userMenu.remove();
    userMenuBtn.addEventListener('click', openMenu, { once: true });
  }, 600);
}
