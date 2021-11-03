function getHaveNoListsNotified() {
  const main = document.getElementsByClassName('main')[0];

  main.innerHTML = "<h1 class='have-no-list-notified'> You have no active list. Please press 'create new list' button.</h1>>";
}

export { getHaveNoListsNotified };
