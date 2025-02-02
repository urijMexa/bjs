function getArrayParams(...arr) {
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  const avg = parseFloat((sum / arr.length).toFixed(2));

  return { min, max, avg };
}

// Примеры использования:
console.log(getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10)); // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5)); // { min: 5, max: 5, avg: 5 }


// Функция для суммирования элементов
function summElementsWorker(...arr) {
  if (arr.length === 0) return 0; // Если массив пуст, возвращаем 0
  return arr.reduce((sum, current) => sum + current, 0); // Суммируем элементы
}

// Функция для вычисления разницы между максимальным и минимальным элементами
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0; // Если массив пуст, возвращаем 0
  const max = Math.max(...arr); // Находим максимальный элемент
  const min = Math.min(...arr); // Находим минимальный элемент
  return max - min; // Возвращаем разницу
}

// Функция для вычисления разницы сумм чётных и нечётных элементов
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0; // Если массив пуст, возвращаем 0
  let sumEvenElement = 0; // Сумма чётных элементов
  let sumOddElement = 0; // Сумма нечётных элементов
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num; // Если элемент чётный, добавляем к sumEvenElement
    } else {
      sumOddElement += num; // Если элемент нечётный, добавляем к sumOddElement
    }
  }
  return sumEvenElement - sumOddElement; // Возвращаем разницу
}

// Функция для вычисления среднего значения чётных элементов
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0; // Если массив пуст, возвращаем 0
  let sumEvenElement = 0; // Сумма чётных элементов
  let countEvenElement = 0; // Количество чётных элементов
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num; // Если элемент чётный, добавляем к sumEvenElement
      countEvenElement++; // Увеличиваем счётчик чётных элементов
    }
  }
  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement; // Возвращаем среднее значение
}

// Примеры использования:
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 10

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // -269

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 38

function makeWork(arrOfArr, func) {
  if (arrOfArr.length === 0) return 0; // Если массив пуст, возвращаем 0

  let maxWorkerResult = -Infinity; // Инициализируем начальное значение как минимальное возможное число

  for (let subArray of arrOfArr) {
    const result = func(...subArray); // Применяем функцию-насадку к каждому подмассиву
    if (result > maxWorkerResult) {
      maxWorkerResult = result; // Обновляем максимум, если текущий результат больше
    }
  }

  return maxWorkerResult; // Возвращаем максимальный результат
}

// Пример использования:
const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62]
];

console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72