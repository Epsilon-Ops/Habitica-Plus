import { useEffect, useState } from "react";

const STORAGE_KEY = "habit-tracker-habits";

function getToday() {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function createHabitId() {
  return crypto.randomUUID();
}

function useHabits() {
  const [habits, setHabits] = useState(function () {
    try {
      const savedHabits = localStorage.getItem(STORAGE_KEY);

      if (!savedHabits) {
        return [];
      }

      const parsedHabits = JSON.parse(savedHabits);

      if (!Array.isArray(parsedHabits)) {
        return [];
      }

      return parsedHabits.map(function (habit) {
        return {
          ...habit,

          // Donne un ID aux anciennes habitudes qui n'en ont pas
          id: habit.id || createHabitId(),

          color: habit.color || "coral",

          completedDates: Array.isArray(habit.completedDates)
            ? habit.completedDates
            : [],
        };
      });
    } catch (error) {
      console.error(
        "Impossible de charger les habitudes :",
        error
      );

      return [];
    }
  });

  useEffect(
    function () {
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(habits)
        );
      } catch (error) {
        console.error(
          "Impossible de sauvegarder les habitudes :",
          error
        );
      }
    },
    [habits]
  );

  function addHabit(habit) {
    setHabits(function (currentHabits) {
      const newHabit = {
        ...habit,

        // ID unique pour la nouvelle habitude
        id: createHabitId(),

        color: habit.color || "coral",

        completedDates: [],
      };

      return [
        ...currentHabits,
        newHabit,
      ];
    });
  }

  function deleteHabit(habitId) {
    setHabits(function (currentHabits) {
      return currentHabits.filter(function (habit) {
        return habit.id !== habitId;
      });
    });
  }

  function updateHabit(habitId, updates) {
    setHabits(function (currentHabits) {
      return currentHabits.map(function (habit) {
        if (habit.id !== habitId) {
          return habit;
        }

        return {
          ...habit,
          ...updates,

          // On s'assure que l'ID ne peut pas être écrasé
          id: habit.id,
        };
      });
    });
  }

  function toggleHabit(habitId, date = getToday()) {
    setHabits(function (currentHabits) {
      return currentHabits.map(function (habit) {
        if (habit.id !== habitId) {
          return habit;
        }

        const completedDates = Array.isArray(
          habit.completedDates
        )
          ? habit.completedDates
          : [];

        const isCompleted = completedDates.includes(date);

        let newCompletedDates;

        if (isCompleted) {
          newCompletedDates = completedDates.filter(
            function (completedDate) {
              return completedDate !== date;
            }
          );
        } else {
          newCompletedDates = [
            ...completedDates,
            date,
          ];
        }

        return {
          ...habit,
          completedDates: newCompletedDates,
        };
      });
    });
  }

  function isHabitCompletedToday(habit) {
    const completedDates = Array.isArray(
      habit.completedDates
    )
      ? habit.completedDates
      : [];

    return completedDates.includes(getToday());
  }

  return {
    habits,
    addHabit,
    deleteHabit,
    updateHabit,
    toggleHabit,
    isHabitCompletedToday,
  };
}

export default useHabits;
