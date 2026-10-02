import React, { useEffect, useState } from 'react';
import IconPicker from './IconPicker';

import { habitIcons } from '../icons/habitIcons';
import habitColors from '../colors/habitColors';
import {
  HABIT_TYPES,
  HABIT_TYPE_OPTIONS,
} from '../constants/habitTypes';

function HabitForm({ habit, onSubmit, onCancel }) {
  const isEditing = Boolean(habit);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedType, setSelectedType] = useState(HABIT_TYPES.TODO);
  const [selectedIcon, setSelectedIcon] = useState('check');
  const [selectedColor, setSelectedColor] = useState('coral');

  const PreviewIcon =
    habitIcons[selectedIcon] || habitIcons.check;

  useEffect(() => {
    if (habit) {
      setTitle(habit.title || '');
      setDescription(habit.description || '');
      setSelectedType(habit.type || HABIT_TYPES.TODO);
      setSelectedIcon(habit.icon || 'check');
      setSelectedColor(habit.color || 'coral');
    } else {
      setTitle('');
      setDescription('');
      setSelectedType(HABIT_TYPES.TODO);
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
      type: selectedType,
      icon: selectedIcon,
      color: selectedColor,
    });
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      {/* =====================================================
          TITRE
          ===================================================== */}

      <div className="habit-form__field">
        <label htmlFor="habit-title">
          Titre
        </label>

        <input
          id="habit-title"
          type="text"
          value={title}
          onChange={(event) =>
            setTitle(event.target.value)
          }
          placeholder="Ex. Lire 20 minutes"
          maxLength={60}
          autoFocus
          required
        />
      </div>

      {/* =====================================================
          DESCRIPTION
          ===================================================== */}

      <div className="habit-form__field">
        <label htmlFor="habit-description">
          Description
        </label>

        <textarea
          id="habit-description"
          value={description}
          onChange={(event) =>
            setDescription(event.target.value)
          }
          placeholder="Décris ton habitude..."
          rows={3}
          maxLength={160}
        />
      </div>

      {/* =====================================================
          TYPE
          ===================================================== */}

      <div className="habit-form__field">
        <label>
          Type d'habitude
        </label>

        <div
          className="habit-type-picker"
          role="radiogroup"
          aria-label="Type d'habitude"
        >
          {HABIT_TYPE_OPTIONS.map((option) => {
            const isSelected =
              selectedType === option.value;

            return (
              <button
                key={option.value}
                type="button"
                className={
                  isSelected
                    ? 'habit-type-picker__option habit-type-picker__option--selected'
                    : 'habit-type-picker__option'
                }
                onClick={() =>
                  setSelectedType(option.value)
                }
                aria-pressed={isSelected}
              >
                <span className="habit-type-picker__label">
                  {option.label}
                </span>

                <span className="habit-type-picker__description">
                  {option.description}
                </span>

                {isSelected && (
                  <span
                    className="habit-type-picker__check"
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

      {/* =====================================================
          ICÔNE
          ===================================================== */}

      <div className="habit-form__field">
        <label>
          Icône
        </label>

        <IconPicker
          selectedIcon={selectedIcon}
          onSelect={setSelectedIcon}
        />
      </div>

      {/* =====================================================
          COULEUR
          ===================================================== */}

      <div className="habit-form__field">
        <label>
          Couleur
        </label>

        <div className="habit-color-picker">
          {Object.entries(habitColors).map(
            ([colorKey, color]) => {
              const isSelected =
                selectedColor === colorKey;

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
                    '--color-completed':
                      color.completed,
                  }}
                  onClick={() =>
                    setSelectedColor(colorKey)
                  }
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
            }
          )}
        </div>
      </div>

      {/* =====================================================
          ACTIONS
          ===================================================== */}

      <div className="habit-form__actions">
        <button
          type="button"
          onClick={onCancel}
        >
          Annuler
        </button>

        <button
          type="submit"
          disabled={!title.trim()}
        >
          {isEditing
            ? 'Enregistrer les modifications'
            : "Ajouter l'habitude"}
        </button>
      </div>
    </form>
  );
}

export default HabitForm;
