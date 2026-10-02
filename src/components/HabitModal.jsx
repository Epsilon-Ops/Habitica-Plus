import React, { useState } from "react";

import HabitForm from "./HabitForm";

function HabitModal({
habit,
onClose,
onAdd,
onUpdate,
}) {
const isEditing = Boolean(habit);

const handleOverlayClick = (event) => {
if (event.target === event.currentTarget) {
onClose();
}
};

const handleSubmit = (formData) => {
if (isEditing) {
onUpdate(formData);
return;
}

onAdd(formData);


};

return (
<div className="habit-modal" role="presentation" onMouseDown={handleOverlayClick} >
<div className="habit-modal__content" role="dialog" aria-modal="true" aria-labelledby="habit-modal-title" >
<header className="habit-modal__header">
<div>
<h2 id="habit-modal-title">
{isEditing
? "Modifier l'habitude"
: "Nouvelle habitude"}
</h2>

        <p>
          {isEditing
            ? "Modifie les informations de ton habitude."
            : "Crée une habitude à suivre au quotidien."}
        </p>
      </div>

      <button
        type="button"
        className="habit-modal__close"
        onClick={onClose}
        aria-label="Fermer"
      >
        ×
      </button>
    </header>

    <HabitForm
      habit={habit}
      onSubmit={handleSubmit}
      onCancel={onClose}
    />
  </div>
</div>


);
}

export default HabitModal;