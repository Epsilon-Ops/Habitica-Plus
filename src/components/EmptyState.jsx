import React, { useState } from "react";

function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-state__icon" aria-hidden="true">
        ✓
      </div>

      <h2 className="empty-state__title">
        Aucune habitude pour le moment
      </h2>

      <p className="empty-state__description">
        Commence par ajouter une habitude pour commencer ton suivi.
      </p>
    </div>
  );
}

export default EmptyState;
