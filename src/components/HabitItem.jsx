import React, { useState } from "react";
import habitColors from "../colors/habitColors";

import { habitIcons } from "../icons/habitIcons";
import HabitHistory from "./HabitHistory";

function HabitItem({
  habit,
  onToggle,
  onToggleDate,
  onEdit,
  onDelete,
  isCompletedToday,
}) {
  const Icon =
    habitIcons[habit.icon] || habitIcons.check;
  const colors =
    habitColors[habit.color] || habitColors.coral;


  return (
      <article
        className={
          isCompletedToday
            ? "habit-item habit-item--completed"
            : "habit-item"
        }
        style={{
          "--habit-base": colors.base,
          "--habit-accent": colors.accent,
          "--habit-completed": colors.completed,
          "--habit-completed-accent": colors.completedAccent,
        }}
      >
      <div className="habit-item__icon">
        <Icon
          size={24}
          aria-hidden="true"
        />
      </div>

      <div className="habit-item__content">
        <h2 className="habit-item__title">
          {habit.title}
        </h2>

        {habit.description && (
          <p className="habit-item__description">
            {habit.description}
          </p>
        )}

        <HabitHistory
          habit={habit}
          onToggleDate={onToggleDate}
        />
      </div>

      <div className="habit-item__actions">
        <button
          type="button"
          className="habit-item__action habit-item__action--edit"
          onClick={() => onEdit(habit)}
          aria-label={`Modifier ${habit.title}`}
        >
          ✎
        </button>

        <button
          type="button"
          className="habit-item__action habit-item__action--delete"
          onClick={() => onDelete(habit.id)}
          aria-label={`Supprimer ${habit.title}`}
        >
          ×
        </button>

        <button
          type="button"
          className="habit-item__check"
          onClick={() => onToggle(habit.id)}
          aria-label={
            isCompletedToday
              ? `Marquer ${habit.title} comme non terminée aujourd'hui`
              : `Marquer ${habit.title} comme terminée aujourd'hui`
          }
          aria-pressed={isCompletedToday}
        >
          {isCompletedToday ? "✓" : ""}
        </button>
      </div>
    </article>
  );
}

export default HabitItem;
