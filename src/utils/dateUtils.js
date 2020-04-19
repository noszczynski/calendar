export const getFirstDayOfMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

export const getLastDayOfMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

export const getDayPlusDays = (date, days) => {
  return new Date(new Date(date).setDate(date.getDate() + days)).getDate();
};

export const getTodayAsNumber = () => {
  return new Date().getDate();
};

export const getCalendar = () => {
  const date = getFirstDayOfMonth(new Date());
  const schema = [];
  const dayOfWeek = date.getDay() > 0 ? date.getDay() - 1 : 6; // monday is 0, sunday is 6

  // Days before first day of current month
  for (let i = dayOfWeek; i > 0; i--) {
    schema.push({
      name: getDayPlusDays(date, -i),
      outOfMonth: true,
    });
  }

  // Days of current end next month
  for (let i = 0; i < 6 * 7 - dayOfWeek; i++) {
    schema.push({
      name: getDayPlusDays(date, i),
      outOfMonth: i >= getLastDayOfMonth(date).getDate(),
    });
  }

  return schema;
};
