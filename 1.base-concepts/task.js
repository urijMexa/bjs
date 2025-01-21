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
  // Проверка входных данных
  if (typeof percent !== 'number' || percent < 0) {
    return "Ошибка: Процентная ставка должна быть неотрицательным числом.";
  }
  if (typeof contribution !== 'number' || contribution < 0) {
    return "Ошибка: Первоначальный взнос должен быть неотрицательным числом.";
  }
  if (typeof amount !== 'number' || amount <= 0) {
    return "Ошибка: Сумма кредита должна быть положительным числом.";
  }
  if (typeof countMonths !== 'number' || countMonths <= 0) {
    return "Ошибка: Количество месяцев должно быть положительным числом.";
  }

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
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // Пример вызова функции