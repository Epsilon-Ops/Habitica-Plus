import React, { useState } from "react";

function ConfirmModal({
title,
message,
confirmLabel = "Confirmer",
cancelLabel = "Annuler",
onConfirm,
onCancel,
}) {
return (
<div
className="confirm-modal"
role="presentation"
onMouseDown={(event) => {
if (event.target === event.currentTarget) {
onCancel();
}
}}
>
<section className="confirm-modal__content" role="dialog" aria-modal="true" aria-labelledby="confirm-modal-title" >
<div className="confirm-modal__icon">
!
</div>

    <div className="confirm-modal__body">
      <h2 id="confirm-modal-title">
        {title}
      </h2>

      <p>{message}</p>
    </div>

    <div className="confirm-modal__actions">
      <button
        type="button"
        className="confirm-modal__cancel"
        onClick={onCancel}
      >
        {cancelLabel}
      </button>

      <button
        type="button"
        className="confirm-modal__confirm"
        onClick={onConfirm}
      >
        {confirmLabel}
      </button>
    </div>
  </section>
</div>


);
}

export default ConfirmModal;