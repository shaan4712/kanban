import React, { useState } from 'react';
import DisplayOptions from './DisplayOptions';
import '../css-files/Header.css';

function Header({ grouping, sorting, onGroupingChange, onSortingChange }) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <header className="header">
      <button className="display-button" onClick={() => setShowOptions(!showOptions)}>
        <img className='display-icon' src="/assets/Display.svg" alt="Display Options" />
        Display
        <img className='down' src="/assets/down.svg" alt="down" />
      </button>
      {showOptions && (
        <DisplayOptions
          grouping={grouping}
          sorting={sorting}
          onGroupingChange={onGroupingChange}
          onSortingChange={onSortingChange}
        />
      )}
    </header>
  );
}

export default Header;