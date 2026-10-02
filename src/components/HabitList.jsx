import React, { useState } from "react";

import HabitItem from "./HabitItem";

function HabitList({
  habits,
  onToggle,
  onToggleDate,
  onEdit,
  onDelete,
  isHabitCompletedToday,
}) {
  return (
    <div className="habit-list">
      {habits.map(function (habit) {
        return (
          <HabitItem
            key={habit.id}
            habit={habit}
            onToggle={onToggle}
            onToggleDate={onToggleDate}
            onEdit={onEdit}
            onDelete={onDelete}
            isCompletedToday={isHabitCompletedToday(habit)}
          />
        );
      })}
    </div>
  );
}

export default HabitList;
