/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

export enum WeekDays {
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
  Sun,
}

export function isWeekend(day: WeekDays): boolean {
  // if (day === WeekDays.Sat || day === WeekDays.Sun) return true;
  // return false;

  return day === WeekDays.Sat || day === WeekDays.Sun;
}

console.log('isWeekend', isWeekend(WeekDays.Tue));
console.log('isWeekend', isWeekend(WeekDays.Sat));
console.log('isWeekend', isWeekend(WeekDays.Sun));

export {};
