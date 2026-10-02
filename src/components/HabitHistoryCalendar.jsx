import React, { useState } from "react";

function HabitHistoryCalendar({
  completedDates = [],
  month,
  onPreviousMonth,
  onNextMonth,
  onToggleDate,
}) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();

  const today = new Date();

  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();

  const firstDay = new Date(
    year,
    monthIndex,
    1
  );

  const daysInMonth = new Date(
    year,
    monthIndex + 1,
    0
  ).getDate();

  const firstDayOfWeek =
    (firstDay.getDay() + 6) % 7;

  const days = [];

  for (
    let index = 0;
    index < firstDayOfWeek;
    index += 1
  ) {
    days.push(null);
  }

  for (
    let day = 1;
    day <= daysInMonth;
    day += 1
  ) {
    days.push(day);
  }

  const monthName = month.toLocaleDateString(
    "fr-FR",
    {
      month: "long",
      year: "numeric",
    }
  );

  const normalizedMonthName =
    monthName.charAt(0).toUpperCase() +
    monthName.slice(1);

  const getDateString = (day) => {
    return `${year}-${String(
      monthIndex + 1
    ).padStart(2, "0")}-${String(day).padStart(
      2,
      "0"
    )}`;
  };

  const isCompleted = (day) => {
    if (!day) {
      return false;
    }

    return completedDates.includes(
      getDateString(day)
    );
  };

  const isToday = (day) => {
    return (
      day === todayDay &&
      monthIndex === todayMonth &&
      year === todayYear
    );
  };

  const isFuture = (day) => {
    if (!day) {
      return false;
    }

    const date = new Date(
      year,
      monthIndex,
      day
    );

    const todayStart = new Date(
      todayYear,
      todayMonth,
      todayDay
    );

    return date > todayStart;
  };

  const completedDaysThisMonth =
    completedDates.filter((dateString) => {
      return dateString.startsWith(
        `${year}-${String(monthIndex + 1).padStart(
          2,
          "0"
        )}-`
      );
    }).length;

  return (
    <section className="habit-history-calendar">
      <header className="habit-history-calendar__header">
        <button
          type="button"
          className="habit-history-calendar__nav"
          onClick={onPreviousMonth}
          aria-label="Mois précédent"
        >
          ‹
        </button>

        <div className="habit-history-calendar__title">
          <h3>{normalizedMonthName}</h3>

          <span>
            {completedDaysThisMonth}{" "}
            {completedDaysThisMonth === 1
              ? "jour accompli"
              : "jours accomplis"}
          </span>
        </div>

        <button
          type="button"
          className="habit-history-calendar__nav"
          onClick={onNextMonth}
          aria-label="Mois suivant"
        >
          ›
        </button>
      </header>

      <div className="habit-history-calendar__weekdays">
        <span>L</span>
        <span>M</span>
        <span>M</span>
        <span>J</span>
        <span>V</span>
        <span>S</span>
        <span>D</span>
      </div>

      <div className="habit-history-calendar__days">
        {days.map((day, index) => {
          if (!day) {
            return (
              <div
                key={`empty-${index}`}
                className="habit-history-calendar__day habit-history-calendar__day--empty"
              />
            );
          }

          const completed = isCompleted(day);
          const todayDayCell = isToday(day);
          const future = isFuture(day);

          return (
            <button
              type="button"
              key={`day-${day}`}
              className={[
                "habit-history-calendar__day",
                completed
                  ? "habit-history-calendar__day--completed"
                  : "",
                todayDayCell
                  ? "habit-history-calendar__day--today"
                  : "",
                future
                  ? "habit-history-calendar__day--future"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              disabled={future}
              onClick={() =>
                onToggleDate(getDateString(day))
              }
              aria-label={`${day} ${normalizedMonthName}${
                completed
                  ? ", accompli"
                  : ", non accompli"
              }`}
              aria-pressed={completed}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div className="habit-history-calendar__legend">
        <span>
          <i className="habit-history-calendar__legend-dot habit-history-calendar__legend-dot--completed" />
          Accompli
        </span>

        <span>
          <i className="habit-history-calendar__legend-dot habit-history-calendar__legend-dot--today" />
          Aujourd'hui
        </span>
      </div>
    </section>
  );
}

export default HabitHistoryCalendar;
