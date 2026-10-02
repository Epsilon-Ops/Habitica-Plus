import React, { useState } from "react";

function AddHabitButton({ onClick }) {
return (
<button type="button" className="add-habit-button" onClick={onClick} >
<span>+</span>
</button>
);
}

export default AddHabitButton;