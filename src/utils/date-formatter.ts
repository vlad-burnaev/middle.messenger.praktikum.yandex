const MONTH_MAP = new Map([
  [0, 'январь'],
  [1, 'февраль'],
  [2, 'март'],
  [3, 'апрель'],
  [4, 'май'],
  [5, 'июнь'],
  [6, 'июль'],
  [7, 'август'],
  [8, 'сентябрь'],
  [9, 'октябрь'],
  [10, 'ноябрь'],
  [11, 'декабрь'],
]);

export const getMonth = (date: Date) => {
  return MONTH_MAP.get(date.getMonth());
};

const addZero = (value: number): string => {
  if (value < 10) {
    return `0${value}`;
  }

  return `${value}`;
};

export const getTime = (date: Date) => {
  const hoursString = addZero(date.getHours());
  const minutesString = addZero(date.getMinutes());

  return `${hoursString} : ${minutesString}`;
};
