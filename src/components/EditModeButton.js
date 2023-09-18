import React from "react";

function EditModeButton({ onClick, isEditMode }) {
  return (
    <button onClick={onClick}>
      {isEditMode ? "Cancel Edit" : "Edit Mode"}
    </button>
  );
}

export default EditModeButton;
