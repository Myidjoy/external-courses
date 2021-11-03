function checkActiveAndFinishedTasks() {
  const dataMock = JSON.parse(localStorage.getItem('dataMock'));

  const activeTasks = document.getElementsByClassName('tasks-active')[0];
  const finishedTasks = document.getElementsByClassName('tasks-finished')[0];

  if (dataMock.length === 0) {
    activeTasks.innerText = 'Active tasks: 0';

    return;
  }

  activeTasks.innerText = `Active tasks: ${String(dataMock[0].issues.length)}`;

  if (dataMock.length <= 1) {
    finishedTasks.innerText = 'Finished tasks: 0';

    return;
  }

  finishedTasks.innerText = `Finished tasks: ${String(dataMock[dataMock.length - 1].issues.length)}`;
}

export { checkActiveAndFinishedTasks };
