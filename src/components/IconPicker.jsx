import React, { useState } from 'react';

import { habitIcons } from '../icons/habitIcons';

function IconPicker({ selectedIcon, onSelect }) {
  return (
    <div className="icon-picker">
      {Object.entries(habitIcons).map(([iconName, Icon]) => {
        const isSelected = selectedIcon === iconName;

        return (
          <button
            key={iconName}
            type="button"
            className={`icon-picker__item ${
              isSelected ? 'icon-picker__item--selected' : ''
            }`}
            onClick={() => onSelect(iconName)}
            aria-label={`Choisir l'icône ${iconName}`}
            aria-pressed={isSelected}
          >
            <Icon aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}

export default IconPicker;
