function primeNum(num) {
  if (num === 1 || num === 0) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }
  if (+num <= 1000 && +num !== 0 && +num !== 1) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return `Число ${num} - составное число`;
      }
    }
    return `Число ${num} - простое число`;
  }
  return 'Данные неверны';
}
module.exports = primeNum;
