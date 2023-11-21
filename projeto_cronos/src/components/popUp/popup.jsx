import React, { useState } from 'react';

const Popup = ({ isOpen, onClose }) => {
  const [options, setOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleCheckboxChange = (option) => {
    setOptions({
      ...options,
      [option]: !options[option],
    });
  };

  return (
    <div className={`popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <h2>Escolha os filtros desejados:</h2>
        <label>
          <input
            type="checkbox"
            checked={options.option1}
            onChange={() => handleCheckboxChange('option1')}
          />
          Opção 1
        </label>
        <label>
          <input
            type="checkbox"
            checked={options.option2}
            onChange={() => handleCheckboxChange('option2')}
          />
          Opção 2
        </label>
        <label>
          <input
            type="checkbox"
            checked={options.option3}
            onChange={() => handleCheckboxChange('option3')}
          />
          Opção 3
        </label>

        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Popup;