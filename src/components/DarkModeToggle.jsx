import React from 'react';

export default function DarkModeToggle({ isDarkMode, onToggle }) {
  return (
    <button onClick={onToggle}>
      {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  );
}