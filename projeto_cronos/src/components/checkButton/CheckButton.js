import React, { useState } from 'react';

const CheckButton = ({ label, isChecked, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      {label}
    </label>
  );
};

export default CheckButton;