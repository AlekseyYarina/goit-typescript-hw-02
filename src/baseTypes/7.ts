/*
  Створіть функцію (), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysOfWeek {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

function isWeekend(day: DaysOfWeek): boolean {
  if (day === DaysOfWeek.saturday || day === DaysOfWeek.sunday) {
    return true;
  }
  return false;
}
