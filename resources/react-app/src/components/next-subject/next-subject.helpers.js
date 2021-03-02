const weekDays = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const subjectToDate = (subject) => {
  const now = new Date();
  const dateOffset = 86400000 * now.getDay();

  const startOfWeek = new Date(Date.now() - dateOffset);
  startOfWeek.setHours(0, 15, 0, 0);

  const dayOfClass = new Date(
    (24 * weekDays.indexOf(subject.weekDay) + subject.time) * 60 * 60 * 1000 +
      startOfWeek.getTime()
  );

  return dayOfClass;
};

const movePastSubjectsToFuture = (schedule) => {
  const mappedSchedule = schedule.map((subject) => {
    const subjectDate = subjectToDate(subject);
    subject.date = subjectDate;
    if (subjectDate.getTime() - Date.now() - 60 * 1000 * 60 < 0) {
      // The subject is in the past and should be moved to the next week
      subject.date = subjectDate.getTime() + 7 * 86400000;
    }

    return subject;
  });

  mappedSchedule.sort((first, second) => first.date - second.date);
  return mappedSchedule;
};

const getWeekOfYear = (date) => {
  let firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  return Math.ceil(
    ((date - firstDayOfYear) / 86400000 + firstDayOfYear.getDay() + 1) / 7
  );
};

export const getWeek = () => {
  let date = new Date();

  // Offset to be manually tweaked to adjust week of term
  const weekOffset = 1;
  return ((getWeekOfYear(date) + weekOffset) % 2) + 1;
};

export const getNextClass = (schedule, settings) => {
  return movePastSubjectsToFuture(schedule)
    .filter(
      (x) =>
        (x.group === 0 || x.group === settings.group) &&
        (x.week === 0 || x.week === getWeek())
    )
    .slice(0, 2);
};

export const localize = (date) => {
  const weekDays = [
    "Неделя",
    "Понеделник",
    "Вторник",
    "Сряда",
    "Четвъртък",
    "Петък",
    "Събота",
  ];

  let localizedDate = weekDays[date.getDay()];

  const today = new Date();
  // Is date today?
  if (date.getDate() === today.getDate()) {
    localizedDate = "Днес";
  } else if (date.getDate() === today.getDate() + 1) {
    localizedDate = "Утре";
  }

  return localizedDate;
};
