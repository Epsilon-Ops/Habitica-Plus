import React, { useState } from 'react';

import HabitHistoryCalendar from './HabitHistoryCalendar';

function HabitHistory({ habit, onToggleDate }) {
  const [isOpen, setIsOpen] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(() => new Date());

  const handlePreviousMonth = () => {
    setCurrentMonth((currentMonth) => {
      return new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        1
      );
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((currentMonth) => {
      return new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        1
      );
    });
  };

  const handleToggleDate = (date) => {
    onToggleDate(habit.id, date);
  };

  return (
    <div className="habit-history">
      <button
        type="button"
        className="habit-history__toggle"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
      >
        <span className="habit-history__toggle-icon">{isOpen ? '⌃' : '▦'}</span>

        <span>{isOpen ? "Masquer l'historique" : "Voir l'historique"}</span>
      </button>

      {isOpen && (
        <div className="habit-history__content">
          <HabitHistoryCalendar
            completedDates={habit.completedDates}
            month={currentMonth}
            onPreviousMonth={handlePreviousMonth}
            onNextMonth={handleNextMonth}
            onToggleDate={handleToggleDate}
          />
        </div>
      )}
    </div>
  );
}

export default HabitHistory;
