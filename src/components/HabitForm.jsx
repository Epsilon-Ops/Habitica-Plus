import React, { useEffect, useState } from 'react';
import IconPicker from './IconPicker';

import { habitIcons } from '../icons/habitIcons';
import habitColors from '../colors/habitColors';

function HabitForm({ habit, onSubmit, onCancel }) {
  const isEditing = Boolean(habit);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('check');
  const [selectedColor, setSelectedColor] = useState('coral');

  // L'icône utilisée dans l'aperçu de chaque couleur
  const PreviewIcon = habitIcons[selectedIcon] || habitIcons.check;

  useEffect(() => {
    if (habit) {
      setTitle(habit.title || '');
      setDescription(habit.description || '');
      setSelectedIcon(habit.icon || 'check');
      setSelectedColor(habit.color || 'coral');
    } else {
      setTitle('');
      setDescription('');
      setSelectedIcon('check');
      setSelectedColor('coral');
    }
  }, [habit]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (!trimmedTitle) {
      return;
    }

    onSubmit({
      title: trimmedTitle,
      description: trimmedDescription,
      icon: selectedIcon,
      color: selectedColor,
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

        <IconPicker
          selectedIcon={selectedIcon}
          onSelect={setSelectedIcon}
        />
      </div>

      <div className="habit-form__field">
        <label>Couleur</label>

        <div className="habit-color-picker">
          {Object.entries(habitColors).map(([colorKey, color]) => {
            const isSelected = selectedColor === colorKey;

            return (
              <button
                key={colorKey}
                type="button"
                className={
                  isSelected
                    ? 'habit-color-picker__option habit-color-picker__option--selected'
                    : 'habit-color-picker__option'
                }
                style={{
                  '--color-base': color.base,
                  '--color-accent': color.accent,
                  '--color-completed': color.completed,
                }}
                onClick={() => setSelectedColor(colorKey)}
                aria-label={`Couleur ${color.name}`}
                aria-pressed={isSelected}
              >
                <span className="habit-color-picker__preview">
                  <PreviewIcon
                    size={28}
                    aria-hidden="true"
                  />
                </span>

                <span className="habit-color-picker__name">
                  {color.name}
                </span>

                {isSelected && (
                  <span
                    className="habit-color-picker__check"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="habit-form__actions">
        <button type="button" onClick={onCancel}>
          Annuler
        </button>

        <button type="submit" disabled={!title.trim()}>
          {isEditing
            ? 'Enregistrer les modifications'
            : "Ajouter l'habitude"}
        </button>
      </div>
    </form>
  );
}

export default HabitForm;
