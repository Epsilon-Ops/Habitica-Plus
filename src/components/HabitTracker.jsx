import React, { useState } from "react";

import useHabits from "../hooks/useHabits";

import HabitList from "./HabitList";
import EmptyState from "./EmptyState";
import AddHabitButton from "./AddHabitButton";
import HabitModal from "./HabitModal";
import ConfirmModal from "./ConfirmModal";

function HabitTracker() {
const [isModalOpen, setIsModalOpen] = useState(false);
const [editingHabit, setEditingHabit] = useState(null);
const [deletingHabit, setDeletingHabit] = useState(null);

const {
habits,
addHabit,
deleteHabit,
updateHabit,
toggleHabit,
isHabitCompletedToday,
} = useHabits();

const handleOpenModal = () => {
setEditingHabit(null);
setIsModalOpen(true);
};

const handleCloseModal = () => {
setIsModalOpen(false);
setEditingHabit(null);
};

const handleAddHabit = (habit) => {
addHabit(habit);
handleCloseModal();
};

const handleEditHabit = (habit) => {
setEditingHabit(habit);
setIsModalOpen(true);
};

const handleUpdateHabit = (updates) => {
if (!editingHabit) {
return;
}

updateHabit(editingHabit.id, updates);
handleCloseModal();


};

const handleDeleteHabit = (habitId) => {
const habit = habits.find(
(currentHabit) => currentHabit.id === habitId
);

if (!habit) {
  return;
}

setDeletingHabit(habit);


};

const handleConfirmDelete = () => {
if (!deletingHabit) {
return;
}

deleteHabit(deletingHabit.id);
setDeletingHabit(null);


};

const handleCancelDelete = () => {
setDeletingHabit(null);
};

return (
<main className="habit-tracker">
<header className="habit-tracker__header">
<h1>Mes habitudes</h1>

    <p>
      Construis de bonnes habitudes, un jour après l'autre.
    </p>
  </header>

  <section className="habit-tracker__content">
    {habits.length > 0 ? (
    <HabitList
      habits={habits}
      onToggle={toggleHabit}
      onToggleDate={toggleHabit}
      onEdit={handleEditHabit}
      onDelete={handleDeleteHabit}
      isHabitCompletedToday={isHabitCompletedToday}
    />
    ) : (
      <EmptyState />
    )}
  </section>

  <AddHabitButton onClick={handleOpenModal} />

  {isModalOpen && (
    <HabitModal
      habit={editingHabit}
      onClose={handleCloseModal}
      onAdd={handleAddHabit}
      onUpdate={handleUpdateHabit}
    />
  )}

  {deletingHabit && (
    <ConfirmModal
      title="Supprimer cette habitude ?"
      message={`L'habitude « ${deletingHabit.title} » sera définitivement supprimée.`}
      confirmLabel="Supprimer"
      cancelLabel="Annuler"
      onConfirm={handleConfirmDelete}
      onCancel={handleCancelDelete}
    />
  )}
</main>


);
}

export default HabitTracker;