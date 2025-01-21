"use strict";

function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return [root];
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // Преобразуем процентную ставку в диапазон от 0 до 1 и в месячную ставку
  const monthlyPercent = (percent / 100) / 12;

  // Рассчитываем тело кредита
  const loanBody = amount - contribution;

  // Если тело кредита меньше или равно нулю, возвращаем 0
  if (loanBody <= 0) {
    return 0;
  }

  // Рассчитываем ежемесячный платёж
  const monthlyPayment = loanBody * (monthlyPercent / (1 - (1 + monthlyPercent) ** (-countMonths)));

  // Рассчитываем общую сумму выплат
  const totalAmount = (monthlyPayment * countMonths);

  // Округляем результат до двух знаков после запятой
  return parseFloat(totalAmount.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 50000, 12)); // Ожидается: 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // Ожидается: 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // Ожидается: 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // Ожидается: 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // Ожидается: 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // Ожидается: 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // Ожидается: 12479.52