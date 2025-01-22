"use strict";

// Функция для решения квадратного уравнения
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
  // Преобразуем процентную ставку из диапазона 0–100 в диапазон 0–1 и в месячную ставку
  const monthlyPercent = (percent / 100) / 12;

  // Рассчитываем тело кредита (сумма, которую нужно вернуть банку)
  const loanBody = amount - contribution;

  // Если тело кредита меньше или равно нулю, возвращаем 0
  if (loanBody <= 0) {
    return 0;
  }

  // Рассчитываем ежемесячный платёж по формуле аннуитетного платежа
  const monthlyPayment = loanBody * (monthlyPercent / (1 - Math.pow(1 + monthlyPercent, -countMonths)));

  // Рассчитываем общую сумму, которую заплатит клиент
  const totalAmount = monthlyPayment * countMonths;

  // Округляем результат до двух знаков после запятой
  return parseFloat(totalAmount.toFixed(2));
}

// Пример использования:
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // Ожидается: 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // Ожидается: 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // Ожидается: 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // Ожидается: 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // Ожидается: 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // Ожидается: 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // Ожидается: 12479.52

// Пример использования:
console.log(solveEquation(1, -3, 2)); // [2, 1]
console.log(solveEquation(1, 2, 1));  // [-1]
console.log(solveEquation(1, 2, 3));  // []
