import React, { useEffect, useState } from 'react';
import IconPicker from './IconPicker';

function HabitForm({ habit, onSubmit, onCancel }) {
  const isEditing = Boolean(habit);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('check');

  useEffect(() => {
    if (habit) {
      setTitle(habit.title || '');
      setDescription(habit.description || '');
      setSelectedIcon(habit.icon || 'check');
      return;
    }

    setTitle('');
    setDescription('');
    setSelectedIcon('check');
  }, [habit]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (!trimmedTitle) {
      return;
    }

    if (isEditing) {
      onSubmit({
        title: trimmedTitle,
        description: trimmedDescription,
        icon: selectedIcon,
      });

      return;
    }

    onSubmit({
      id: crypto.randomUUID(),
      title: trimmedTitle,
      description: trimmedDescription,
      icon: selectedIcon,
    });
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <div className="habit-form__field">
        <label htmlFor="habit-title">Titre</label>

        <input
          id="habit-title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Ex. Lire 20 minutes"
          maxLength={60}
          autoFocus
          required
        />
      </div>

      <div className="habit-form__field">
        <label htmlFor="habit-description">Description</label>

        <textarea
          id="habit-description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Décris ton habitude..."
          rows={3}
          maxLength={160}
        />
      </div>

      <div className="habit-form__field">
        <label>Icône</label>

        <IconPicker selectedIcon={selectedIcon} onSelect={setSelectedIcon} />
      </div>

      <div className="habit-form__actions">
        <button type="button" onClick={onCancel}>
          Annuler
        </button>

        <button type="submit" disabled={!title.trim()}>
          {isEditing ? 'Enregistrer les modifications' : "Ajouter l'habitude"}
        </button>
      </div>
    </form>
  );
}

export default HabitForm;
